Feature: Search Functionality

    Background: Before each scenario
        Given the user is on the homepage
        When the user accepts cookies

    Scenario Outline: Successful search with valid input
        When the user enters "<searchTerm>" in the search bar and clicks enter
        Then the search results for "<searchTerm>" should be displayed
        When the user clicks filter button "<filterName>" that button should be highlighted

        Examples:
            | searchTerm    | filterName |
            | semrush ai    | images     |
            | seeemrush aai | news       |
            | SEmRuSh aI    | videos     |


    Scenario Outline: Search with empty input
        When the user clicks the search button "<searchTerm>" with no input he should see a prompt "<message>"
    
        Examples:
            | searchTerm  | message                     |
            |             | Please fill out this field. |

    