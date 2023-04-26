const express = require('express');
const router = express.Router();
const conn = require('../db/poolconnection');

router.get('/', (req, res) => {
  const sql = `SELECT * FROM Users u`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      status: 'success',
      data: result,
    });
  });
});

module.exports = router;
