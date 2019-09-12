Ability: User should be able to see scenario steps
  In order to see details about a scenario
  As a User
  I want to the steps taken for a scenario

  Scenario: Can see step name
    Given a cucumber example steps output step_name:
    """
    {
      "id": "scenario-with-steps",
      "steps": [
        {
          "keyword": "Given ",
          "name": "a cucumber example output single_feature"
        },
        {
          "keyword": "When ",
          "name": "you view page example single_feature"
        }
      ]
    }
    """
    When you view page examples/steps/step_name
    Then you can see steps for scenario scenario-with-steps
      | name                                           |
      | Given a cucumber example output single_feature |
      | When you view page example single_feature      |

  Scenario: Can see step status
    Given a cucumber example steps output step_status:
    """
    {
      "id": "scenario-with-steps",
      "steps": [
        {
          "keyword": "Given ",
          "name": "passed",
          "result": {
            "status": "passed"
          }
        },
        {
          "keyword": "Given ",
          "name": "pending",
          "result": {
            "status": "pending"
          }
        },
        {
          "keyword": "Given ",
          "name": "skipped",
          "result": {
            "status": "skipped"
          }
        },
        {
          "keyword": "Given ",
          "name": "failed",
          "result": {
            "status": "failed"
          }
        },
        {
          "keyword": "Given ",
          "name": "undefined",
          "result": {
            "status": "undefined"
          }
        }
      ]
    }
    """
    When you view page examples/steps/step_status
    Then you can see steps for scenario scenario-with-steps
      | status    |
      | passed    |
      | pending   |
      | skipped   |
      | failed    |
      | undefined |
