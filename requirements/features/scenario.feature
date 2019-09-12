Ability: User can see scenarios for features
  In order to see examples of the feature
  As a user
  I want to see scenarios illustrating the features

  Scenario: Can see scenario title
    Given a cucumber example output scenario_title
    """
    [
      {
        "keyword": "Ability",
        "name": "User can see a requirement",
        "line": 2,
        "id": "user-can-see-a-requirement",
        "uri": "requirements\\features\\feature.feature",
        "elements": [
          {
            "id": "user-can-see-a-requirement;simple-feature",
            "keyword": "Scenario",
            "name": "Simple feature",
            "type": "scenario"
          }
        ]
      }
    ]
    """
    When you view page examples/scenario_title
    Then you can see a scenario user-can-see-a-requirement;simple-feature has name Scenario: Simple feature

  Scenario: Can see scenario tags
    Given a cucumber example output scenario_tags
    """
    [
      {
        "keyword": "Ability",
        "name": "User can see a requirement",
        "line": 2,
        "id": "user-can-see-a-requirement",
        "uri": "requirements\\features\\feature.feature",
        "elements": [
          {
            "id": "user-can-see-a-requirement;simple-feature",
            "keyword": "Scenario",
            "tags": [
              {
                "name": "@debug"
              },
              {
                "name": "@another"
              }
            ],
            "name": "Simple feature",
            "type": "scenario"
          }
        ]
      }
    ]
    """
    When you view page examples/scenario_tags
    Then you can see a scenario user-can-see-a-requirement;simple-feature has tags:
      | tag      |
      | @debug   |
      | @another |

  Scenario: Can see scenario description
    Given a cucumber example output scenario_with_description
    """
    [
      {
        "keyword": "Feature",
        "name": "User can see a requirement",
        "id": "user-can-see-a-requirement",
        "elements": [
          {
            "id": "user-can-see-a-requirement;simple-feature",
            "keyword": "Scenario",
            "name": "Simple feature",
            "type": "scenario",
            "description": "In order to understand how the software works\nAs a user\nI want to see each requirement"
          }
        ]
      }
    ]
    """
    When you view page examples/scenario_with_description
    Then you can see a scenario user-can-see-a-requirement;simple-feature has description In order to understand how the software works\nAs a user\nI want to see each requirement

  Scenario: Can see step counts by status
    Given a cucumber example output scenario_steps_by_status
      """
      [
        {
          "keyword": "Feature",
          "name": "Scenario Steps",
          "id": "user-can-see-a-requirement",
          "elements": [
            {
              "id": "user-can-see-a-requirement;simple-feature",
              "keyword": "Scenario",
              "name": "One step of every type",
              "type": "scenario",
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
                },
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
        }
      ]
      """
    When you view page examples/scenario_steps_by_status
    Then you can see a step summary for scenario user-can-see-a-requirement;simple-feature
      | status    | count |
      | passed    | 2     |
      | pending   | 1     |
      | skipped   | 1     |
      | failed    | 1     |
      | undefined | 1     |

