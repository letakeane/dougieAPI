const express = require('express');
const app = express();
// const cors = require('cors');
const { episodes } = require('./data.js');

// app.use(cors);
app.use(express.json());
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
  console.log(`Dougie's API is now ready on port ${app.get('port')}!`);
})

app.locals.episodes = episodes;

app.get('/', (request, response) => {
  response.send('HELLO');
})

app.get('/episodes', (request, response) => {
  response.status(200).json(app.locals.episodes);
})
