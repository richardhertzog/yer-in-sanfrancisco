var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hey Richie")
});

app.listen(3000, function(){
    console.log("Server is working")
});
