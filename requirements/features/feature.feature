Ability: User can see a requirement
  In order to understand how the software works
  As a user
  I want to see each requirement

  Scenario: Can see multiple features
    Given a cucumber example output multiple_features
    """
    [
      {
        "keyword": "Ability",
        "name": "User can see one requirement",
        "line": 1,
        "id": "user-can-see-one-requirement"
      },
      {
        "keyword": "Feature",
        "name": "User can see another requirement",
        "line": 1,
        "id": "user-can-see-another-requirement"
      }
    ]
    """
    When you view page examples/multiple_features
    Then you can see features:
      | id                               | text                                      |
      | user-can-see-one-requirement     | Ability: User can see one requirement     |
      | user-can-see-another-requirement | Feature: User can see another requirement |

  Scenario: Can see feature description
    Given a cucumber example output feature_with_description
    """
    [
      {
        "keyword": "Feature",
        "description": "In order to understand how the software works\nAs a user\nI want to see each requirement",
        "name": "User can see a requirement",
        "id": "user-can-see-a-requirement"
      }
    ]
    """
    When you view page examples/feature_with_description
    And you click feature user-can-see-a-requirement
    Then you can see a feature user-can-see-a-requirement has description "In order to understand how the software works\nAs a user\nI want to see each requirement"

  Scenario: Can see feature tags
    Given a cucumber example output feature_with_tags
      """
      [
        {
          "keyword": "Ability",
          "name": "Can see tags",
          "id": "can-see-tags",
          "tags": [
            {
              "name": "@tag",
              "line": 1
            },
            {
              "name": "@anotherTag",
              "line": 1
            }
          ]
        }
      ]
      """
    When you view page examples/feature_with_tags
    Then you can see a feature can-see-tags has tags:
      | tag         |
      | @tag        |
      | @anotherTag |
