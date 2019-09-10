Ability: User can see scenario for features
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
            "line": 7,
            "name": "Simple feature",
            "type": "scenario"
          }
        ]
      }
    ]
    """
    When you view page example scenario_title
    Then you can see a scenario user-can-see-a-requirement;simple-feature has name Scenario: Simple feature