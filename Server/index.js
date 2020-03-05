var express = require('express');
var bodyParser = require('body-parser');
var db = require('../Database');
var path = require('path');
var app = express();

app.use( bodyParser.json() );


app.use(express.static(__dirname + '/../react-client/dist'));

//CHANGE GET FUNCTION 
// app.get('/api/users', function (req, res) {
//     //console.log(db.getUserName('beth'));
//     let name = req.query.user;
//     //console.log(name);
//     db.getUserName(name, (error, results) => {
//       if (error) {
//         res.send('Get request err in db', err);
//       } else { 
//         res.send(results);
//       }
//     });
//   });
  
  //error first call backs are needed in servers and db
  app.listen(3000, function() {
    console.log('listening on port 3000!');
  });