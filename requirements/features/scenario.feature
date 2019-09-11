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
    When you view page examples scenario_with_description
    Then you can see a scenario user-can-see-a-requirement;simple-feature has description In order to understand how the software works\nAs a user\nI want to see each requirement
