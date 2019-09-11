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
    When you view page examples scenario_title
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
    When you view page examples scenario_tags
    Then you can see a scenario user-can-see-a-requirement;simple-feature has tags:
      | tag      |
      | @debug   |
      | @another |

    @pending
    Scenario: Can see scenario description
#      Given a pending scenario
