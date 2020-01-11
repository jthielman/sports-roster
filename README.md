This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Sports Roster

## Description
This app shows cards with the names and pictures of the players on a user's roster.  Users must first log in with Google, but then they may add players (with picture, name and position), see their roster, update player info and even delete players.  The assignment called for a _sports_ roster, but since I am much more like a standard nerd, I figured I'd gather some company.  A user may choose sportlers instead of fictional IT professionals, if desired, since users can only see their own players, not those of other users.

## Screenshots
Before logging in:

![Logged-out View](https://raw.githubusercontent.com/jthielman/sports-roster/master/screenshots/logged_out_view.png)

Logged in with players added to roster:

![Roster view](https://raw.githubusercontent.com/jthielman/sports-roster/master/screenshots/roster_view.png)

The form to add a new player:

![New Player Form](https://raw.githubusercontent.com/jthielman/sports-roster/master/screenshots/new_player_form.png)

The form while editing a player:

![Edit Player Form](https://raw.githubusercontent.com/jthielman/sports-roster/master/screenshots/edit_player_form.png)

## How to Run
- Clone down this project
- At the root of this project run the following command: `npm install`
- You will need to set up a firebase project with a reatime database and add the api keys of that database to a file in this project called `src/helpers/apiKeys.json`, using the example of `src/helpers/apiKeys.example.json`.
- Then run this command: `npm start`
- A window or tab should automatically open in your browser.