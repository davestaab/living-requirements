Ability: User can see a requirement
  In order to understand how the software works
  As a user
  I want to see each requirement

  Scenario: Simple feature
    Given a cucumber example output single_feature
    """
    [
      {
        "keyword": "Feature",
        "name": "User can see a requirement",
        "line": 1,
        "id": "user-can-see-a-requirement",
        "tags": [],
        "uri": "requirements\\features\\requirements.feature"
      }
    ]
    """
    When you view page example single_feature
    Then you can see a feature user-can-see-a-requirement has text Feature: User can see a requirement

  Scenario: Multiple features
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
    When you view page example multiple_features
    Then you can see features:
      | id                               | text                                      |
      | user-can-see-one-requirement     | Ability: User can see one requirement     |
      | user-can-see-another-requirement | Feature: User can see another requirement |

  Scenario: See feature description
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
    When you view page example feature_with_description
    Then you can see a feature user-can-see-a-requirement has text Feature: User can see a requirement
    Then you can see a feature user-can-see-a-requirement has description "In order to understand how the software works\nAs a user\nI want to see each requirement"
