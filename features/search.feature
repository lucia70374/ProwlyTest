Feature: Search Functionality

  Background:
    Given the user is on the homepage

  Scenario Outline: Successful search with valid input
    When the user enters "<searchTerm>" in the search bar and clicks enter
    Then the search results for "<searchTerm>" should be displayed
    When the user clicks filter button "<filterName>" that button should be highlighted
    Examples:
      | searchTerm | filterName |
      | semrush ai | images |
      | seeemrush aai | news   |
      | SEmRuSh aI | videos |

  #Scenario: Search with empty input
  #  Given the user is on the homepage
  #  When the user leaves the search bar empty
  #  When the user clicks the search button
  #  Then a message prompting to enter a search term should be displayed
