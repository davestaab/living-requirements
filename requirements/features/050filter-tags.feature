@feature
Ability: Filtered requirements by tags
  In order to explore the requirements
  As a user
  I want to filter features and scenarios by tags

  Background:
    Given a cucumber example output tags_example
    """
    [
      {
        "keyword": "Ability",
        "name": "See requirements in document mode",
        "id": "docs-mode",
        "tags": [
          {
            "name": "@from-feature"
          }
        ],
        "elements": [
          {
            "id": "docs-mode;success-scenario",
            "keyword": "Scenario",
            "name": "success scenario",
            "type": "scenario",
            "tags": [
              {
                "name": "@from-feature"
              },
              {
                "name": "@from-scenario"
              }
            ],
            "steps": []
          },
          {
            "id": "docs-mode;success-scenario",
            "keyword": "Scenario",
            "name": "success scenario",
            "type": "scenario",
            "tags": [
              {
                "name": "@from-feature"
              },
              {
                "name": "@from-scenario2"
              }
            ],
            "steps": []
          }
        ]
      }
    ]
    """

  @scenario
  Scenario: See the set of tags
    When you are viewing page examples/tags_example
    Then you will see the tag set is:
      | tag             |
      | @from-feature   |
      | @from-scenario  |
      | @from-scenario2 |

  Scenario: Adding a tag to the filter set

  Scenario: Removing a tag from the filter set

  Scenario: filter features by the filter set

  Scenario: filter scenarios by the filter set

  Scenario: exclude features by a tag

  Scenario: exclude scenarios by a tag


