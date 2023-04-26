const mysql = require('mysql');
const dbconfig = require('../../config/database');
const pool = mysql.createPool(dbconfig);

module.exports = pool;
