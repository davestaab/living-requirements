@feature:chart
Ability: User can see a pie chart of progress

  In order to get an overview of the project
  As a user
  I want to see a pie chart of features/scenarios by status

  Scenario: Chart with scenarios of every status
    Given a cucumber example output chart_scenarios_every_status
    """
    [
      {
        "keyword": "Ability",
        "id": "scenarios-of-every-type",
        "name": "Scenarios of every status",
        "elements": [
          {
            "id": "user-can-see-a-requirement;simple-feature",
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
            "id": "user-can-see-a-requirement;simple-feature",
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
            "id": "user-can-see-a-requirement;simple-feature",
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
          },
          {
            "id": "user-can-see-a-requirement;simple-feature",
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
            "id": "user-can-see-a-requirement;simple-feature",
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
      }
    ]
    """
    When you view page examples/chart_scenarios_every_status
    Then chart 'scenariosChart' should match 'scenarioChartSnapshot'
