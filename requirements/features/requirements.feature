Ability: User can see a requirement

  Scenario: Simple feature
    Given a cucumber example output example1
    """
    [
      {
        "keyword": "Ability",
        "name": "User can see a requirement",
        "line": 1,
        "id": "user-can-see-a-requirement",
        "tags": [],
        "uri": "requirements\\features\\requirements.feature"
      }
    ]
    """
    When you view page example example1
    Then you can see a feature User can see a requirement
