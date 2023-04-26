const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const users = require('./src/router/users');
const main = require('./src/router/main');
const conn = require('./src/db/connection');
const createError = require('http-errors');

app.use(bodyParser.json());

conn.connect(err => {
  if (err) throw err;
  console.log('connected');
});

//swagger
const { swaggerUi, specs } = require('./src/swagger/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use('/', main);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
