// app.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/public-sale', (req, res) => {
  res.render('publicsale');
});

app.listen(port, () => {
  console.log(`Jovial Network site running at http://localhost:${port}`);
});
