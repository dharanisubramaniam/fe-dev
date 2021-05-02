const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Dharani',
  password: 'filmy12345',
  database: 'fe_videos'
  // user: 'u322787559_Dharani',
  // password: 'Green@2597#',
  // database: 'u322787559_fe_videos'
});

module.exports = connection