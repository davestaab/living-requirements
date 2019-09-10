Ability: User can see the requirements for this module

  Scenario: Load last test run
    When you view page self
    Then you can see features:
      | id                                            | text                                          |
      | user-can-see-a-requirement                    | User can see a requirement                    |
      | user-can-see-the-requirements-for-this-module | User can see the requirements for this module |
