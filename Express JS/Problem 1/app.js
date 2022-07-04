const express = require("express");
const fs = require("fs");
var dataFunctions = require("./dataFunction");
const bodyParser = require("body-parser")

const app = express();
const port = 3004;
const host = "localhost";
const path = __dirname;

// API DOC's
app.get("/", function(req, res) {
    res.sendFile(path + '/index.html');
});

app.get("/student/getDetails/all", function(req, res) {
    res.send("<p>" + JSON.stringify(dataFunctions.retriveData()) + "</p>");
});

// Get - Routes  /student/add
app.get("/student/add", function(req, res) {
    res.send("Please use Post Method to add Data")
});

// Post - /student/add
app.post("/student/add", function(req, res) {
    res.send(dataFunctions.addData());
});

// get - /student/getDetails
app.get("/student/getDetails", function(req, res) {
    res.send(dataFunctions.retriveData());
    console.log(dataFunctions.retriveData());
});


// App listen and some bacic info
app.listen(port, function() {
    console.log("App is running at port 3004");
    console.log("\nAPI DOC's: \nhttp://" + host + ":" + port + "/");

    // Console or Postman functions
    console.log("API Call Eg: \nhttp://" + host + ":" + port + "/student/add\   - Post METHOD - Console or POSTMAN\n");
    console.log("API Call Eg: \nhttp://" + host + ":" + port + "/student/getDetails\   - Get METHOD - Console or POSTMAN\n");

    // Browser and Console Functions
    console.log("API Call Eg: \nhttp://" + host + ":" + port + "/student/add/   - Get METHOD - Browser\n");
    console.log("API Call Eg: \nhttp://" + host + ":" + port + "/student/getDetails/all   - Get METHOD - Browser\n");
});