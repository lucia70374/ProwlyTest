# Create Tests using Gherkin syntax

Feature: Search Functionality

  Scenario: Successful search with valid input
    Given the user is on the homepage
    When the user enters "semrush ai" in the search bar and clicks enter
    Then the search results for "semrush ai" should be displayed

  #Scenario: Search with mixed case input
  #  Given the user is on the homepage
  #  When the user enters "SeMrUsH Ai" in the search bar
  #  When the user clicks the search button
  #  Then the search results for "semrush ai" should be displayed

  #Scenario: Search with empty input
  #  Given the user is on the homepage
  #  When the user leaves the search bar empty
  #  When the user clicks the search button
  #  Then a message prompting to enter a search term should be displayed

  #Scenario: Search with leading and trailing spaces
  #  Given the user is on the homepage
  #  When the user enters "  prowly ai tools  " in the search bar
  #  When the user clicks the search button
  #  Then the search results for "prowly ai tools" should be displayed
