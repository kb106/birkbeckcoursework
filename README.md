# birkbeck coursework - HTML/JSON/Node.js/Javascript Project
Birkbeck Coursework

Requirements:

1. Create an HTML page with a form with:
one which retrieves Grand Slam winners and runners-up from the server,
one which retrieves players and the number of Grand Slams they have won from the server,
one which clears all the user input, and
one which clears the output area on the page.

2. By means of a drop-down list, the user should be able to select which set of results (i.e., which file) they wish to query, with a default selection being made.

3. When a user clicks the first button mentioned above, the results should appear in an HTML table generated dynamically, with columns headed Year, Tournament, Winner and Runner-up. So for the first two tournaments for 2022 listed in the women's results. If the button is clicked with no further restrictions being entered into the form by the user (see below), then all the tournament results from the selected file should be returned in the table.
   
4. The user should be able to enter a value for the year (e.g. 2019) as well as one of the conditions 'equals', 'greater than' or 'less than', selected from a drop-down list, with the default selection being 'equals'. So if the user enters 2019 for the year and 'equals' for the condition, only the results of the four Grand Slam tournaments for 2019 are returned.
   
5. The user should be able to select which tournament they are interested in by choosing from an HTML select drop-down list. The options should be "Australian Open", "French Open", "Wimbledon", "U.S. Open" and "Any". By default, "Any" should be selected, so that all tournaments are returned.
   
6. For each of "Winner" and "Runner-up", the user should be able to enter the name of a player. The user should not be required to use the full names of players, so the value entered needs only to match a substring of the player's name. For example, the user may not remember that Murray's first name is "Andy", so can search using the string "Murray". The match should be case-sensitive in each case (so avoiding the need to transform the strings).
   
7. The user should be able to make selections from any combination of items (4) to (6) above, so, for example, to ask for all the times that Roger Federer won Wimbledon since 2010.

8. When a user clicks the second button mentioned above, the results should also appear in an HTML table generated dynamically, with columns headed Player and Number of wins. This will display the name of a player, along with the number of times they have won a Grand Slam tournament, sorted in descending order of number of wins.
Associated with the second button (i.e., next to it) should be a text box into which the user can enter a positive integer. If a value is entered, only those players who have at least that number of wins should be output. The only user input considered in this case is the selection of men's or women's results along with any entry in the "number of wins" text box.

For each of the get-results and get-win-count buttons, when the button is clicked, a JavaScript function must be called. This function must use either the JavaScript fetch method or the jQuery getJSON function to retrieve the necessary data from the Node.js web server. The user input must be passed to the web server using query string parameters.

Some simple error checking of user input should be performed in your iwt-cw.js file, with a message.

Web server on port 8080

Two routes should be implemented, one for each of the two "get" buttons; the paths for these should be /results and /winCount, respectively. The results from each route must be returned as a JSON array.

Error handling:

The Node.js program should check for errors in the query string parameter values. If there are any, a JSON object with a single key named "error" should be returned, with the value of "error" being a string describing the error. Only the first detected error needs to be caught. If there is an error, no other data should be returned.

Express for your Node.js web server.

CORS:

CORS header in the response served by the Node.js web server. Please use * to allow requests from any origin (in order to facilitate testing).





