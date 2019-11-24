@feature:chart
Ability: User can see a chart of scenarios

  In order to get an overview of the project
  As a user
  I want to see a pie chart of features/scenarios by status

  Scenario: Chart of single feature
    Given a cucumber example output chart_scenarios_every_status
    """
    [
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "passed",
            "type": "scenario",
            "steps": [
              {
                "keyword": "Given ",
                "name": "passed",
                "result": {
                  "status": "passed"
                }
              }
            ]
          }
        ]
      },
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "failed",
            "type": "scenario",
            "steps": [
              {
                "keyword": "Given ",
                "name": "failed",
                "result": {
                  "status": "failed"
                }
              }
            ]
          }
        ]
      },
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "pending",
            "type": "scenario",
            "steps": [
              {
                "keyword": "Given ",
                "name": "pending",
                "result": {
                  "status": "pending"
                }
              }
            ]
          }
        ]
      },
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "undefined",
            "type": "scenario",
            "steps": [
              {
                "keyword": "Given ",
                "name": "undefined",
                "result": {
                  "status": "undefined"
                }
              }
            ]
          }
        ]
      },
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "skipped",
            "type": "scenario",
            "steps": [
              {
                "keyword": "Given ",
                "name": "skipped",
                "result": {
                  "status": "skipped"
                }
              }
            ]
          }
        ]
      }
    ]
    """
    When you view page examples/chart_scenarios_every_status
    Then chart 'featureSummaryChart' should match 'featureSummaryChartEveryStatus'

Scenario: No Features (empty state chart)
  Given a cucumber example output chart_scenarios_no_status
  """
  []
  """
  When you view page examples/chart_scenarios_no_status
  Then chart 'featureSummaryChart' should match 'featureSummaryChartNoStatus'
