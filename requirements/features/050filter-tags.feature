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
        "name": "All about tags",
        "id": "about-tags",
        "tags": [
          {
            "name": "@from-feature"
          }
        ],
        "elements": [
          {
            "id": "about-tags;success-scenario",
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
            "id": "about-tags;success-scenario",
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
      },
      {
        "keyword": "Ability",
        "name": "with no tags",
        "id": "no-tags",
        "tags": [],
        "elements": []
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

  Scenario: Adding a tag to the filter set filters features
    // TODO: next
#    When you are viewing page examples/tags_example
#    And you select tag filter '@from-feature'
#    Then you can see tag '@from-feature' is active

  Scenario: Removing a tag from the filter set

  Scenario: filter features by the filter set
    When you are viewing page examples/tags_example
    And you select tag filter '@from-feature'
    Then the feature count is 1
    And you can see features:
      | id         | text                    |
      | about-tags | Ability: All about tags |

  Scenario: filter scenarios by the filter set

  Scenario: exclude features by a tag

  Scenario: exclude scenarios by a tag


