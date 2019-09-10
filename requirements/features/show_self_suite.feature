Ability: User can see the requirements for the living requirements module

  Scenario: Load last test run
    When you view page self snapshot
    Then you can see features:
      | id                                                               | text                                                                      |
      | user-can-see-a-requirement                                       | Ability: User can see a requirement                                       |
      | user-can-see-the-requirements-for-the-living-requirements-module | Ability: User can see the requirements for the living requirements module |
