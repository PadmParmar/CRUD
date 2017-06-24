var express=require('express'),
app=express();
var router = express.Router();// calling the outside routes
var routesDB = require('./routesDB').router;
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use('/',routesDB);

var server = app.listen(3000,function(req,res){
   console.log("Listening to port %s",server.address().port);
});