var express = require('express');
var app = express();

app.get('/', sayHello);

function sayHello(req, res){
    res.send("Hello World");
}

app.listen(3000);