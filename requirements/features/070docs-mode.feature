@docs
Ability: Docs mode

  In order to easily read the requirements
  As a user
  I want an easy to read format

  Scenario: Docs mode can be turned on
    Given a cucumber example output docs_mode_example
    """
    [
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "passed",
            "type": "scenario",
            "steps": [
            ]
          }
        ]
      }
    ]
    """
    When you view page examples/docs_mode_example
    And you turn on docs mode
    Then you can see docs mode is on

  Scenario: Docs mode can be turned off
    Given a cucumber example output docs_mode_example
    """
    [
      {
        "keyword": "Ability",
        "elements": [
          {
            "keyword": "Scenario",
            "name": "passed",
            "type": "scenario",
            "steps": []
          }
        ]
      }
    ]
    """
    When you view page examples/docs_mode_example
    Then you can see docs mode is off

  Scenario: Can't see results chart
    Given you are viewing page examples/docs_mode_example
    When you turn on docs mode
    Then you can not see '#featureSummaryChart'
    And you can not see '#scenarioSummaryChart'

  Scenario: Features and scenarios are not hidden
