import {
  getScenarioStepSummary,
  reduceStepsToStatus,
  FAILED,
  PASSED,
  PENDING,
  SKIPPED,
  UNDEFINED
} from '../utils'

describe('getScenarioStepSummary', () => {
  it('should return a summary object for the scenario', function() {
    expect(
      getScenarioStepSummary([
        {
          result: {
            status: 'pending'
          }
        },
        {
          result: {
            status: 'pending'
          }
        },
        {
          result: {
            status: 'failed'
          }
        }
      ])
    ).toEqual([
      {
        status: 'pending',
        count: 2
      },
      {
        status: 'failed',
        count: 1
      }
    ])
  })

  it('should not duplicate data from previous calls', function() {
    expect(
      getScenarioStepSummary([
        {
          result: {
            status: 'passed'
          }
        }
      ])
    ).toEqual([
      {
        status: 'passed',
        count: 1
      }
    ])
    expect(
      getScenarioStepSummary([
        {
          result: {
            status: 'failed'
          }
        }
      ])
    ).toEqual([
      {
        status: 'failed',
        count: 1
      }
    ])
  })
})

describe('reduce steps to status', function() {
  it('should return passed if only passed steps', () => {
    expect(
      reduceStepsToStatus([
        {
          result: {
            status: 'passed'
          }
        }
      ])
    ).toEqual(PASSED)
  })

  it('should return passed if no steps?', function() {
    expect(reduceStepsToStatus([])).toEqual(PASSED)
  })

  it('should return failed if one failed', function() {
    expect(
      reduceStepsToStatus([
        {
          result: {
            status: 'failed'
          }
        },
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
      ])
    ).toEqual(FAILED)
  })

  it('should return pending if one is pending', function() {
    expect(
      reduceStepsToStatus([
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
      ])
    ).toEqual(PENDING)
  })

  it('should return undefined if one is undefined', function() {
    expect(
      reduceStepsToStatus([
        {
          result: {
            status: 'passed'
          }
        },
        {
          result: {
            status: 'undefined'
          }
        }
      ])
    ).toEqual(UNDEFINED)
  })

  it('should return skipped if all are skipped', function() {
    expect(
      reduceStepsToStatus([
        {
          result: {
            status: 'skipped'
          }
        },
        {
          result: {
            status: 'passed'
          }
        }
      ])
    ).toEqual(SKIPPED)
  })
})
