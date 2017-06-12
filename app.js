var express = require('express')
var app = express()
app.use(express.static(__dirname + '/view'));

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./model/database.js')();
require('./model/bd.js')();

app.get('/bd', function (req, res) {
  res.sendFile('view/bd.html', {root: __dirname })
})

app.get('/', function (req, res) {
  res.sendFile('view/home.html', {root: __dirname })
})

app.get('/profile', function (req, res) {
  res.sendFile('view/profile.html', {root: __dirname })
})

app.get('/nOe', function (req, res) {
  res.sendFile('view/new or edit.html', {root: __dirname })
})

app.get('/filters', function (req, res) {
  filters(res)
})

app.get('/singlePost', function (req, res) {
  res.sendFile('view/singlePost.html', {root: __dirname })
})

app.post('/singlePost', function (req, res) {
  res.send("bla");
  //res.sendFile('view/singlePost.html', {root: __dirname })
})


app.post('/search', function (req, res) {
  search(res,req.body.oras,req.body.tip,req.body.achizitie,req.body.nr_cam,req.body.nr_bai,req.body.conf,req.body.etaj,req.body.clasif,req.body.tipArr)
})

app.post('/login', function (req, res) {
  console.log(req.body.user+' '+req.body.pass);
  login(res,req.body.user,req.body.pass);
})

app.post('/bd', function (req, res) {
  searchBD(res,req.body.oras,req.body.tip,req.body.achizitie,req.body.nr_cam,req.body.nr_bai,req.body.conf,req.body.etaj,req.body.clasif,req.body.tipArr)
}) 

app.post('/bdindex', function (req, res) {
  searchBDindex(res,req.body.oras,req.body.tip,req.body.achizitie,req.body.nr_cam,req.body.nr_bai,req.body.conf,req.body.etaj,req.body.clasif,req.body.tipArr)
}) 

app.post('/bdshow', function (req, res) {
  showBD(res,req.body.id)
}) 

app.post('/bdsoftdelte', function (req, res) {
  softdeleteBD(res,req.body.id)
}) 

app.post('/bddelte', function (req, res) {
  deleteBD(res,req.body.id)
}) 

app.listen(80, function () {
  console.log('Example app listening on port 80!') 
})
