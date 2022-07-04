const express = require("express");
const app = express();
const http = require("http");


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/student/studentsList", function(req, res) {
    var StudentList = {
        "result": ["Rajesh", "Ramesh", "Sayali", "Sanjana"]
    };
    res.send(StudentList);
    console.log(StudentList);
});

app.get("/student/studentsList/2", function(req, res) {
    var StudentList = {
        "result": ["Rajesh", "Ramesh", "Sayali", "Sanjana"]
    };
    var len = StudentList.result.length;

    for (var i = 0; i < len; i++) {
        res.write(`<p>${StudentList.result[i]}</p>`);
    }
    res.send();

});

app.get('*', function(req, res) {
    res.sendFile(__dirname + "/404.html");
});

app.listen(3000, function() {
    console.log("Server Started at port 3000");
});