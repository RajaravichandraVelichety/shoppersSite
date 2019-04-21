const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var cors = require('cors')
var app = express()
 
app.use(cors())


var amazon= require('./server/amazon.route');
var api = require('./server/api.route');
var flipkart = require('./server/flipkart.route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname,'dist')));

app.use('/',api);

app.use('/amazon',amazon);

app.use('/flipkart',flipkart);

app.get('*'), (req,res)=>{

    res.sendFile(path.join(__dirname,'dist/index.html'));
}

var port =  '3000';
app.set('port',port);

var server = http.createServer(app);
server.listen(port, ()=> console.log('server is running'));