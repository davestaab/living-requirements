Ability: To see the specifications for this app (Living Requirements)
  In order to know about the capabilities for the living requirement application
  As a user
  I want to see the specs for the app

  Scenario: Load last test run
    When you view page specs/snapshot
    Then you can see features:
      | id                                                               | text                                                                      |
      | user-can-see-a-requirement                                       | Ability: User can see a requirement                                       |
      | user-can-see-the-requirements-for-the-living-requirements-module | Ability: User can see the requirements for the living requirements module |
