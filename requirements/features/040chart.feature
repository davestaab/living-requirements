@feature:chart
Ability: To see charts giving a overview of the project

  In order to get an overview of the project
  As a user
  I want to see a chart of features or scenarios by status

  Scenario: Chart of single feature
    Given a cucumber example output chart_features_every_status
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
    When you view page examples/chart_features_every_status
    Then chart 'featureSummaryChart' should match 'featureSummaryChartEveryStatus'

  Scenario: No Features (empty state chart)
    Given a cucumber example output chart_no_features
  """
  []
  """
    When you view page examples/chart_no_features
    Then chart 'featureSummaryChart' should match 'featureSummaryChartNoStatus'

  Scenario: Chart of scenarios by status
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
          },
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
          },
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
          },
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
          },
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
    Then chart 'scenarioSummaryChart' should match 'scenarioSummaryChartEveryStatus'
