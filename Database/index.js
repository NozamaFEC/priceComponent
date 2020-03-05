var mysql = require('mysql');
var mysqlConfig = require('./config.js');


var connection = mysql.createConnection(mysqlConfig);

//CHANGE FUNCTION BELOW AND EXPORT THAT FUNCTION NAME

// var getUserName = function(name, cb) {
//     let where = `name='${name}';`;
//     connection.query('SELECT name, balance FROM users WHERE ' + where, (err, results) => {
//       if (err) {
//         console.log('error in query', err);
//         cb (err, null);
//       } else {
//         cb (null, results);
//         console.log(results);
//       }
//     });
//   };

// module.exports.getUserName = getUserName;
  