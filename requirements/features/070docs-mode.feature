@docs
Ability: Docs mode

  In order to easily read the requirements
  As a user
  I want an easy to read format

  Docs mode focuses on being able to read requirements as a specification suite
  as apposed to seeing test results, attachments and errors.

  Background:
    Given a cucumber example output docs_mode_example
    """
    [
      {
        "keyword": "Ability",
        "name": "See requirements in document mode",
        "id": "docs-mode",
        "elements": [
          {
            "id": "docs-mode;success-scenario",
            "keyword": "Scenario",
            "name": "success scenario",
            "type": "scenario",
            "tags": [
              {
                "name": "@debug"
              },
              {
                "name": "@another"
              }
            ],
            "steps": [
              {
                "keyword": "Given ",
                "name": "you have some assumptions",
                "result": {
                  "status": "passed"
                }
              },
              {
                "keyword": "When ",
                "name": "you take an action",
                "result": {
                  "status": "passed"
                }
              },
              {
                "keyword": "Then ",
                "name": "you can expect some results",
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

  Scenario: Docs mode can be turned on
    When you are viewing page examples/docs_mode_example
    When you turn on docs mode
    Then you can see docs mode is on

  Scenario: Docs mode can be turned off
    When you view page examples/docs_mode_example
    Then you can see docs mode is off

  Scenario: Can't see results chart
    Given you are viewing page examples/docs_mode_example
    When you turn on docs mode
    Then you can not see '#featureSummaryChart'
    And you can not see '#scenarioSummaryChart'

  Scenario: Features, scenarios and steps are shown
    Given you are viewing page examples/docs_mode_example
    When you turn on docs mode
    Then you can see a feature docs-mode has text 'Ability: See requirements in document mode'
    And you can see a scenario docs-mode;success-scenario has name 'Scenario: success scenario'
    And you can see steps for scenario docs-mode;success-scenario
      | name                             |
      | Given you have some assumptions  |
      | When you take an action          |
      | Then you can expect some results |

  Scenario: Scenario description is shown

  Scenario: Scenario description is not shown
  It's not shown if there is no description

  Scenario: Feature description is shown

  Scenario: Feature description is not shown
  It's not shown if there is no description

  Scenario: Hidden steps are not shown

  Scenario: Can see feature tags


  Scenario: Can see scenario tags in docs mode
    When you view page examples/docs_mode_example
    And you turn on docs mode
    Then you can see a scenario docs-mode;success-scenario has tags:
      | tag      |
      | @debug   |
      | @another |
