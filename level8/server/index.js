const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(process.env.PORT, () => {
  console.log(`Level8 listening on port ${process.env.PORT}`)
});