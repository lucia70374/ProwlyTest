Feature: Verify the search functionality of an search engine Ecosia with added filters

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

    Scenario Outline: Successful search with filtering images with subfilters
        When user types "prowly ai tools" in the search bar and clicks with enter
        When text results for "prowly ai tools" should be asserted
        When the user clicks Images filter button
        Then the user clicks on "<filterName>" subfilter

        Examples:
            | filterName |
            | Purple     |
            | Square     |
    
    Scenario Outline: Clear all subfiltering results for the Image filter
        When user types "prowly ai tools" in the search bar and clicks with enter
        When text results for "prowly ai tools" should be asserted
        When the user clicks Images filter button
        Then the user clicks on "<filterName>" subfilter
        When the user clicks Clear all button
        Then all subfilters should be cleared

        Examples:
            | filterName |
            | Purple     |
            | Square     |