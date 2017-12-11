const express = require('express');
const path = require('path');
const request = require('request');
const { validDateCheck, Months } = require('./utils');

const app = express();

const resJson = { unix: null, natural: null };

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204);
});

app.get('/:timeKey', (req, res) => {
  let date = null;
  const cloneObj = JSON.parse(JSON.stringify(resJson));

  const dateQuery = req.params.timeKey;
  date = new Date(isNaN(dateQuery) ? dateQuery : dateQuery * 1000);

  if (validDateCheck(date)) {
    // timezone offset calculation for 12:00am
    cloneObj.unix = date.getTime() / 1000 - (isNaN(dateQuery) ? date.getTimezoneOffset() * 60 : 0);

    cloneObj.natural = `${Months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    res.send(cloneObj);
  } else res.json(resJson);
});

module.exports = app;
