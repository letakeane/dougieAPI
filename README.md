# API for Dougie

## setup

1. Clone down
1. CD into it
1. run `npm install`
1. run `npm start`

endpoint: `localhost:3001/episodes`
When you GET to this endpoint, it returns an array of data about the episodes of Season 1 of Lovecraft Country.

Write a React app:
- App.js: renders the Form and Episodes container
- Form.js: user can add a new episode
- Episodes.js: displays each episode

Practice:
- Write unit test checking the render of Episodes.js
- Write unit test checking the render of Form.js
- Write unit test checking that the Form can be filled out and the button clicked, with appropriate functions being called (with the correct arguments)
- Write unit test checking that App can render (will need to do async mocking)
- Write INTEGRATION TEST in App, checking that a new episode can be added and displayed
