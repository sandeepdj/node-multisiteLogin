var mysql = require('mysql');
 



var udata = req.session.udata; 
var dbname = udata.dbnm;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : dbname
  });

  connection.connect();



module.exports = connection;