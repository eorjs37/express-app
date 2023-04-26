const express = require('express');
const app = express();
const port = 3000;
const dbconfig = require('./config/database');
const mysql = require('mysql');

const connection = mysql.createConnection(dbconfig);

connection.connect(err => {
  if (err) throw err;
  console.log('connected');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
