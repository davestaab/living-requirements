@feature:scenarios
Ability: See Scenarios
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
            "type": "scenario",
            "steps":[]
          }
        ]
      }
    ]
    """
    When you view page examples/scenario_title
    And you click feature 'user-can-see-a-requirement'
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
            "type": "scenario",
            "steps":[]
          }
        ]
      }
    ]
    """
    When you view page examples/scenario_tags
    And you click feature 'user-can-see-a-requirement'
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
            "description": "In order to understand how the software works\nAs a user\nI want to see each requirement",
            "steps":[]
          }
        ]
      }
    ]
    """
    When you view page examples/scenario_with_description
    And you click feature 'user-can-see-a-requirement'
    And you click scenario 'user-can-see-a-requirement;simple-feature'
    Then you can see a scenario user-can-see-a-requirement;simple-feature has description "In order to understand how the software works\nAs a user\nI want to see each requirement"

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
    And you click feature 'user-can-see-a-requirement'
    Then you can see a step summary for scenario user-can-see-a-requirement;simple-feature
      | status    | count |
      | passed    | 2     |
      | pending   | 1     |
      | skipped   | 1     |
      | failed    | 1     |
      | undefined | 1     |

  Scenario: Step count should not count hidden steps
    Given a cucumber example output scenario_steps_no_hidden
    """
    [{
      "keyword": "Feature",
      "name": "Don't count hidden steps",
      "id": "dont-count-hidden-steps",
      "elements": [{
        "id": "dont-count-hidden-steps;hidden-steps",
        "keyword": "Scenario",
        "name": "Hidden steps",
        "type": "scenario",
        "steps": [
          {
            "keyword": "Before ",
            "hidden": "true",
            "result": {
              "status": "passed"
            }
          },
          {
            "keyword": "Then ",
            "name": "a passing assertion",
            "result": {
              "status": "passed"
            }
          }]
        }]
      }]
      """
    When you view page examples/scenario_steps_no_hidden
    And you click feature 'dont-count-hidden-steps'
    Then you can see a step summary for scenario dont-count-hidden-steps;hidden-steps
      | status | count |
      | passed | 1     |

  Scenario: Should be able to see Doc String
    Given a cucumber example output scenario_show_doc_string
    """
    [{
      "keyword": "Ability",
      "name": "User can see doc string",
      "id": "user-can-see-doc-string",
      "elements": [
        {
          "id": "user-can-see-scenarios;should-be-able-to-see-doc-string",
          "keyword": "Scenario",
          "name": "Should be able to see doc string",
          "type": "scenario",
          "steps": [
            {
              "keyword": "Given ",
              "name": "a first step",
              "result": {
                "status": "passed"
              }
            },
            {
              "arguments": [
                {
                  "content": "hello\nworld"
                }
              ],
              "keyword": "Given ",
              "name": "a second step with a doc string argument",
              "result": {
                "status": "passed"
              }
            }
          ]
        }
      ]
    }]
    """
    When you view page examples/scenario_show_doc_string
    And you click feature 'user-can-see-doc-string'
    And you click scenario 'user-can-see-scenarios;should-be-able-to-see-doc-string'
    Then you can see doc strings for step 2 of scenario 'user-can-see-scenarios;should-be-able-to-see-doc-string'
    """
    hello
    world
    """

  Scenario: Should be able to see Data Table
    Given a cucumber example output scenario_show_data_table
    """
    [{
      "keyword": "Ability",
      "name": "User can see data table",
      "id": "user-can-see-data-table",
      "elements": [{
        "id": "user-can-see-data-table;should-be-able-to-see-data-table",
        "keyword": "Scenario",
        "name": "Should be able to see data table",
        "type": "scenario",
        "steps": [{
            "keyword": "Given ",
            "name": "a first step",
            "result": {
              "status": "passed"
            }
          },
          {
            "arguments": [{
              "rows": [{
                  "cells": [
                    "fruit",
                    "count"
                  ]
                },
                {
                  "cells": [
                    "apples",
                    "2"
                  ]
                },
                {
                  "cells": [
                    "oranges",
                    "1"
                  ]
                },
                {
                  "cells": [
                    "pears",
                    "1"
                  ]
                },
                {
                  "cells": [
                    "pineapples",
                    "1"
                  ]
                },
                {
                  "cells": [
                    "lemons",
                    "1"
                  ]
                }
              ]
            }],
            "keyword": "Given ",
            "name": "a second step with a data table argument",
            "result": {
              "status": "passed"
            }
          }
        ]
      }]
    }]
    """
    When you view page examples/scenario_show_data_table
    And you click feature 'user-can-see-data-table'
    And you click scenario 'user-can-see-data-table;should-be-able-to-see-data-table'
    Then you can see data table for step 2 of scenario 'user-can-see-data-table;should-be-able-to-see-data-table'
      | fruit      | count |
      | apples     | 2     |
      | oranges    | 1     |
      | pears      | 1     |
      | pineapples | 1     |
      | lemons     | 1     |

