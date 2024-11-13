Feature: Calculator functionality

Background: 
    Given I am on google calculator

  Scenario: Verify clicking on 0 displays 0
    When I click on 0
    Then I should see "0"

  Scenario: Verify clicking on 1 displays 1
    When I click on 1
    Then I should see "1"

  Scenario: Verify clicking on 2 displays 2
    When I click on 2
    Then I should see "2"

  Scenario: Verify clicking on 3 displays 3
    When I click on 3
    Then I should see "3"

  Scenario: Verify clicking on 4 displays 4
    When I click on 4
    Then I should see "4"

  Scenario: Verify clicking on 5 displays 5
    When I click on 5
    Then I should see "5"

  Scenario: Verify clicking on 6 displays 6
    When I click on 6
    Then I should see "6"

  Scenario: Verify clicking on 7 displays 7
    When I click on 7
    Then I should see "7"

  Scenario: Verify clicking on 8 displays 8
    When I click on 8
    Then I should see "8"

  Scenario: Verify clicking on 9 displays 9
    When I click on 9
    Then I should see "9"
  
  Scenario: Verify that operation + works
    When I click on 1
    When I click on +
    When I click on 1
    When I click on =
    Then I should see "2"

  Scenario: Verify that operation - works
    When I click on 1
    When I click on -
    When I click on 1
    When I click on =
    Then I should see "0"

  Scenario: Verify that operation multiply works
    When I click on 1
    When I click on x
    When I click on 1
    When I click on =
    Then I should see "1"

  Scenario: Verify that operation division works
    When I click on 4
    When I click on ÷
    When I click on 2
    When I click on =
    Then I should see "2"

  Scenario: Verify that division of 0 by 0 gives an error
    When I click on 0
    When I click on ÷
    When I click on 0
    When I click on =
    Then I should see "Error"

  Scenario: Verify that division of 1 by 0 gives infinity
    When I click on 1
    When I click on ÷
    When I click on 0
    When I click on =
    Then I should see "Infinity"

  Scenario: Verify that addition of negative number gives correct result
    When I click on -
    When I click on 1
    When I click on +
    When I click on 1
    When I click on =
    Then I should see "0"

  Scenario: Verify that addition of decimal numbers works
    When I click on 1
    When I click on Decimal
    When I click on 1
    When I click on +
    When I click on 1
    When I click on Decimal
    When I click on 1
    When I click on =
    Then I should see "2.2"

  Scenario: Verify that BEDMAS rules applies
    When I click on 2
    When I click on +
    When I click on 6
    When I click on ÷
    When I click on 2
    When I click on x
    When I click on 3
    When I click on =
    Then I should see "11"

  Scenario: Verify that AC button works
    When I click on 2
    When I click on +
    When I click on 6
    When I click on =
    When I click on AC
    Then I should see "0"

  Scenario: Verify that CE button works
    When I click on 6
    When I click on 6
    When I click on CE
    Then I should see "6"

  
  
  
