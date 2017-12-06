var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });



});



router.post('/login', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'geoadmin'
  });
  connection.connect();
  var clname = req.body.clname;
  connection.query('select * from clients where clnm= ?',[clname], function (err, rows, fields) {
     if (err) throw error;
     var bdata = JSON.stringify(rows[0]);
     res.send(bdata);
    });
});



module.exports = router;
