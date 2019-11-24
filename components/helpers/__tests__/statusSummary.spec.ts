import statusExampleData from './example_status_cucumber_report'
import {
  calcSummaryTotals,
  combineSummaries,
  featureSummary,
  normalizeSteps,
  reduceSummaries,
  scenarioSummary,
  stepSummary,
  sortSummaryStatusByCount,
  singleScenarioSummary,
  singleFeatureSummary
} from '~/components/helpers/statusSummary'
import { Summary, Status } from '~/components/helpers/types'

const createSummary = (status: Status, count: number = 1): Summary => {
  return {
    status,
    count
  }
}
describe('normalize steps to summary', function() {
  it('should return an array of summary items from an array of steps', function() {
    expect(
      normalizeSteps([
        {
          result: {
            status: 'pending'
          }
        },
        {
          result: {
            status: 'passed'
          }
        }
      ])
    ).toEqual([createSummary('pending'), createSummary('passed')])
  })
})

describe('combine summaries', function() {
  it('should combine summaries by status and add counts', function() {
    expect(
      combineSummaries([
        createSummary('pending'),
        createSummary('pending'),
        createSummary('pending')
      ])
    ).toEqual([createSummary('pending', 3)])
  })
  it('should order the summaries by count', function() {
    expect(
      combineSummaries([
        createSummary('passed'),
        createSummary('pending', 2),
        createSummary('failed', 0)
      ])
    ).toEqual([
      createSummary('pending', 2),
      createSummary('passed'),
      createSummary('failed', 0)
    ])
  })
})

describe('reduce summaries', function() {
  it('should return pending with a zero count if no steps?', function() {
    expect(reduceSummaries([])).toEqual({
      status: 'passed',
      count: 0
    })
  })

  it('should return failed if one failed', function() {
    expect(
      reduceSummaries([
        createSummary('failed'),
        createSummary('passed'),
        createSummary('pending'),
        createSummary('skipped'),
        createSummary('undefined')
      ])
    ).toEqual(createSummary('failed'))
  })

  it('should return pending if one is pending', function() {
    expect(
      reduceSummaries([
        createSummary('passed'),
        createSummary('pending'),
        createSummary('skipped'),
        createSummary('undefined')
      ])
    ).toEqual(createSummary('pending'))
  })

  it('should return undefined if one is undefined', function() {
    expect(
      reduceSummaries([
        createSummary('undefined'),
        createSummary('skipped'),
        createSummary('passed')
      ])
    ).toEqual(createSummary('undefined'))
  })

  it('should return skipped if any are skipped', function() {
    expect(
      reduceSummaries([createSummary('passed'), createSummary('skipped')])
    ).toEqual(createSummary('skipped'))
  })
  it('should return passed if only passed steps', () => {
    expect(
      reduceSummaries([createSummary('passed'), createSummary('passed')])
    ).toEqual(createSummary('passed'))
  })
})

describe('stepSummary ', function() {
  it('should return a summary for every step', function() {
    expect(stepSummary(statusExampleData)).toEqual([
      createSummary('passed', 4),
      createSummary('pending', 4),
      createSummary('failed', 4),
      createSummary('skipped', 4),
      createSummary('undefined', 4)
    ])
  })
})

describe('scenarioSummary ', function() {
  it('should return a summary for every scenario', function() {
    expect(scenarioSummary(statusExampleData)).toEqual([
      createSummary('passed', 2),
      createSummary('pending', 2),
      createSummary('failed', 2),
      createSummary('skipped', 2),
      createSummary('undefined', 2)
    ])
  })
})

describe('featureSummary', function() {
  it(' should return a summary for every feature', function() {
    expect(featureSummary(statusExampleData)).toEqual([
      createSummary('passed'),
      createSummary('pending'),
      createSummary('failed'),
      createSummary('skipped'),
      createSummary('undefined')
    ])
  })
})

describe('calcSummaryTotals ', function() {
  it('should add counts of all summaries', function() {
    expect(
      calcSummaryTotals([
        createSummary('passed', 1),
        createSummary('passed', 2),
        createSummary('passed', 3),
        createSummary('passed', 0)
      ])
    ).toEqual(6)
  })
})

describe('sortSummaryStatus', function() {
  it('should return statuses sorted by count', function() {
    expect(
      sortSummaryStatusByCount([
        createSummary('passed', 1),
        createSummary('failed', 3),
        createSummary('undefined', 5)
      ])
    ).toEqual(['undefined', 'failed', 'passed'])
  })
})

describe('singleScenarioSummary', function() {
  it('should create a summary for a single scenario', function() {
    expect(
      singleScenarioSummary({
        steps: [
          {
            result: {
              status: 'passed'
            }
          },
          {
            result: {
              status: 'passed'
            }
          },
          {
            result: {
              status: 'passed'
            }
          }
        ]
      })
    ).toEqual([createSummary('passed', 3)])
  })
  it('should not count hidden steps', function() {
    expect(
      singleScenarioSummary({
        steps: [
          {
            hidden: true,
            result: {
              status: 'passed'
            }
          }
        ]
      })
    ).toEqual([])
  })
})

describe('singleFeatureSummary', function() {
  it('should show a summary for the feature', function() {
    expect(
      singleFeatureSummary({
        elements: [
          {
            steps: [
              {
                result: {
                  status: 'passed'
                }
              },
              {
                result: {
                  status: 'pending'
                }
              }
            ]
          },
          {
            steps: [
              {
                result: {
                  status: 'passed'
                }
              }
            ]
          },
          {
            steps: [
              {
                result: {
                  status: 'failed'
                }
              },
              {
                result: {
                  status: 'passed'
                }
              }
            ]
          }
        ]
      })
    ).toEqual([
      createSummary('pending'),
      createSummary('passed'),
      createSummary('failed')
    ])
  })
})
