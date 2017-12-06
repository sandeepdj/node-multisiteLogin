var express = require('express');
var router = express.Router();
var mysql = require('mysql');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });



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

     req.session.udata = bdata;
     res.end('Created session with message : Hello world'+req.session.udata );

    //  res.cookie('session', 'userData', bdata);
    //  res.send(bdata);
     
     
    });
});

var db = require('../connection.js'); // db is pool


router.get('/check', function(req, res, next) {
   // var udata = req.session.udata; 
    //res.send(udata);

 db.query('SELECT  * from employees', function(err, rows, fields) {
  if (err) throw err;

  var bdata = JSON.stringify(rows);

res.send(bdata)
  //console.log('The number is: ', rows[0].solution);
});


});



module.exports = router;
