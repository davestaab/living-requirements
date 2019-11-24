import {
  groupBy,
  compose,
  map,
  reduce,
  entries,
  sortBy,
  prop,
  subtract,
  flatMap,
  add,
  filter
} from 'lodash/fp'
import { Step, Summary, Status } from './types'

/**
 * Converts a list of Steps to a list of Summaries
 * @param steps
 */
export function normalizeSteps(steps: Array<Step>): Array<Summary> {
  return steps.map((st: Step) => {
    return {
      status: st.result.status,
      count: 1
    }
  })
}

const reduceSummaryCount = reduce(
  (acc: number, cur: Summary): number => acc + cur.count,
  0
)

const sortByCountDesc = sortBy(
  compose(
    subtract(Number.MAX_SAFE_INTEGER),
    prop('count')
  )
)

const combineSummariesProgram = compose(
  sortByCountDesc,
  map((entry) => {
    const [key, data] = entry
    return {
      status: key,
      count: reduceSummaryCount(data)
    }
  }),
  entries,
  groupBy('status')
)

/**
 * Combines a list of summaries so there are no duplicates statuses and the counts are added together.
 * @param input
 */
export function combineSummaries(input: Array<Summary>): Array<Summary> {
  return combineSummariesProgram(input)
}

/**
 * Takes an array of summaries and reduces them to a representative summary
 * that's the worse status.
 * The priority order is failed, pending, undefined, skipped, passed
 * The count of summary is always 1
 * If no summaries are in the array, then a summary of passed with a count of 0 is returned
 * @param input
 */
export function reduceSummaries(input: Array<Summary>): Summary {
  return reduce(
    (acc: Summary, cur: Summary): Summary => {
      if (acc.status === 'failed') {
        return {
          status: 'failed',
          count: 1
        }
      }
      if (
        cur.status === 'failed' ||
        cur.status === 'pending' ||
        (cur.status === 'undefined' && acc.status !== 'pending') ||
        (cur.status === 'skipped' &&
          acc.status !== 'pending' &&
          acc.status !== 'undefined')
      ) {
        return {
          status: cur.status,
          count: 1
        }
      }
      return {
        status: acc.status,
        count: 1
      }
    },
    {
      status: 'passed',
      count: 0
    }
  )(input)
}

export function stepSummary(suite: any): Array<Summary> {
  return compose(
    combineSummaries,
    normalizeSteps,
    flatMap(prop('steps')),
    flatMap(prop('elements'))
  )(suite)
}

const scenarioSummaryPiece = map(
  compose(
    reduceSummaries,
    normalizeSteps,
    filter((s: any) => !s.hidden),
    prop('steps')
  )
)

export function scenarioSummary(suite: any): Array<Summary> {
  return compose(
    combineSummaries,
    scenarioSummaryPiece,
    flatMap(prop('elements'))
  )(suite)
}

export function featureSummary(suite: any): Array<Summary> {
  return compose(
    combineSummaries,
    flatMap(
      compose(
        reduceSummaries,
        scenarioSummaryPiece,
        prop('elements')
      )
    )
  )(suite)
}

/**
 * Returns a sorted array of statuses
 * Used in the chart
 */
export function sortSummaryStatusByCount(input: Array<Summary>): Array<Status> {
  return compose(
    map(prop('status')),
    sortBy(
      compose(
        subtract(Number.MAX_SAFE_INTEGER),
        prop('count')
      )
    )
  )(input)
}

export const calcSummaryTotals = compose(
  reduce(add, 0),
  map(prop('count'))
)

/**
 * Takes a single scenario and returns the summary for that scenario
 * @param scenario
 */
export function singleScenarioSummary(scenario: any): Array<Summary> {
  return compose(
    combineSummaries,
    normalizeSteps,
    filter((s: any) => !s.hidden),
    prop('steps')
  )(scenario)
}

/**
 * Takes a single feature and returns a summary for that feature
 * @param feature
 */
export function singleFeatureSummary(feature: any): Array<Summary> {
  return compose(
    combineSummaries,
    map(
      compose(
        reduceSummaries,
        normalizeSteps,
        prop('steps')
      )
    ),
    prop('elements')
  )(feature)
}
