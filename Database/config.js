var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'unicorn18',
  database : 'nozama'
});

connection.connect();

//CODE BELOW TESTS DATABASE CONNECTION AND RENDERS TO SERVER
// const querytest = connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

//connection.end();

module.exports = connection;