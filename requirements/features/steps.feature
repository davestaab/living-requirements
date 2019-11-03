@feature:steps
Ability: User can see Steps
  In order to see details about a scenario
  As a User
  I want to the steps taken for a scenario

  Scenario: Can see step name
    Given a cucumber example output steps/step_name
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
    Given a cucumber example output steps/step_status
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

  Scenario: You should not see hidden steps
  Cucumber adds a hidden: true flag to some steps like before/after.
  Those steps won't be displayed.
    Given a cucumber example output steps/steps_hidden
    """
    {
      "id": "scenario-with-hidden-steps",
      "steps": [
        {
          "keyword": "Before ",
          "hidden": "true",
          "result": {
            "status": "passed"
          }
        },
        {
          "keyword": "Then ",
          "name": "a passing assertion",
          "result": {
            "status": "passed"
          }
        },
        {
          "keyword": "After ",
          "hidden": "true",
          "result": {
            "status": "pending"
          }
        }
      ]
    }
    """
    When you view page examples/steps/steps_hidden
    Then you can see 1 step for scenario scenario-with-hidden-steps
    And you can see steps for scenario scenario-with-hidden-steps
      | status | name                     |
      | passed | Then a passing assertion |
