const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const users = require('./src/router/users');
const main = require('./src/router/main');
const conn = require('./src/db/connection');

app.use(bodyParser.json());

conn.connect(err => {
  if (err) throw err;
  console.log('connected');
});

app.use('/', main);
app.use('/users', users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
