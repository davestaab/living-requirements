import groupBy from 'lodash/fp/groupBy'
import compose from 'lodash/fp/compose'
import filter from 'lodash/fp/filter'
import prop from 'lodash/fp/prop'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'

export const FAILED = 'failed'
export const PENDING = 'pending'
export const UNDEFINED = 'undefined'
export const SKIPPED = 'skipped'
export const PASSED = 'passed'

/**
 * Clean cucumber ids by removing the semicolon (;) and replacing with underscore (_)
 * @param id the id to clean
 * @return cleanId the now cleaned id
 */
export function cleanId(id) {
  return id.replace(/;/g, '_')
}

// const log = (label) => {
//   return tap((r) => {
//     console.log(label, r)
//   })
// }

const groupByToSummary = reduce((result, val) => {
  return [
    ...result,
    {
      status: val[0].result.status,
      count: val.length
    }
  ]
}, [])
/**
 * Group step results by status
 */
export const groupResultsByStatus = compose(
  groupBy('result.status'),
  filter((s) => !s.hidden)
)

export const getScenarioStepSummary = compose(
  groupByToSummary,
  groupResultsByStatus
)

/**
 * A scenario should be summarized by a single status
 * If any step failed, the scenario is failed
 * If any step is pending, the scenario is pending
 * If any step is undefined, the scenario is undefined
 * If all are skipped, then it's skipped
 * Only if all steps are passed is the scenario passed
 */
export const reduceStepsToStatus = compose(
  reduce((result, i) => {
    const { result: r } = i
    if (result === FAILED) return result
    if (
      r.status === FAILED ||
      r.status === PENDING ||
      (r.status === UNDEFINED && result !== FAILED && result !== PENDING) ||
      (r.status === SKIPPED &&
        result !== FAILED &&
        result !== PENDING &&
        result !== UNDEFINED)
    ) {
      return r.status
    }
    return result
  }, PASSED)
)

export const getFeatureSummary = compose(
  groupByToSummary,
  reduce((r, i) => {
    const toSpread = r[i] ? r[i] : []
    return {
      ...r,
      [i]: [
        ...toSpread,
        {
          result: {
            status: i
          }
        }
      ]
    }
  }, {}),
  map(
    compose(
      reduceStepsToStatus,
      prop('steps')
    )
  ),
  prop('elements')
)
