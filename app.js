var express = require('express') 
var app = express()
app.use(express.static(__dirname + '/view'));

var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./model/database.js')();

app.get('/', function (req, res) {
  res.sendFile('view/home.html', {root: __dirname })
})

app.get('/profile', function (req, res) {
  res.sendFile('view/profile.html', {root: __dirname }) 
})

app.post('/profile', function (req, res) {
  getProfile(res,req.body.id);
})

app.post('/updateProfile', function (req, res) {
  updateProfile(res,req.body.id,req.body.fname,req.body.lname,req.body.pass,req.body.phone);
})

app.post('/profilePosts', function (req, res) {
  getProfilePosts(res,req.body.id);
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
  singlePostValues(res,req.body.id);
  //res.send(req.body.id);
})

app.post('/search', function (req, res) {
  search(res,req.body.oras,req.body.tip,req.body.achizitie,req.body.nr_cam,req.body.nr_bai,req.body.conf,req.body.etaj,req.body.clasif,req.body.tipArr)
})

app.post('/login', function (req, res) {
  login(res,req.body.user,req.body.pass);
})

app.post('/signUp', function (req, res) {
  signUp(res,req.body.fname,req.body.lnane,req.body.user,req.body.pass,req.body.phone);
})


app.listen(80, function () {
  console.log('Example app listening on port 80!') 
})  
