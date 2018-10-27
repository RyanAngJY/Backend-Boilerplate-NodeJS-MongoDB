var express = require('express'),
    app = express(),
    port = process.env.PORT || 8081,
    bodyParser = require('body-parser'),
    cors = require("cors");
    
var todoRoutes = require("./routes/todos");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})
    
    