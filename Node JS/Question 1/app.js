const { write } = require('fs');
var http = require('http');
var url = require('url');

var htmlPages = require("./htmlCode.js");
var calculateAgeLogic = require("./calculate.js");

const port = 3000;
const host = "localhost";

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var queryObj = url.parse(req.url, true).query;

    // Seprating queries from url
    var year = queryObj.year;
    var month = queryObj.month;
    var date = queryObj.date;
    var name = queryObj.name;

    // If URL is root
    if (req.url == "/" || req.url == '') {
        var homePage = htmlPages.homepage();
        res.end(homePage);

        // If URL is /age
    } else if (req.url == "/age") {
        var homePage = htmlPages.homepage();
        res.end(homePage);

        // If url is invailed or undefined
    } else if (typeof year === 'undefined' || typeof month === 'undefined' || typeof date === 'undefined' || typeof name === 'undefined') {
        var error404Page = htmlPages.error404();
        res.end(error404Page);
    } else {

        // If DOB Year is Invailed (0 or greater than current year)
        if (year > new Date().getFullYear() || year == 0) {
            var error404Page = htmlPages.error404();
            res.end(error404Page);

            console.log("Year can't be 0 or greater than 2022.");

            // If DOB months is invailed (0 or greater than 12)
        } else if (month < 1 || month > 12) {
            var error404Page = htmlPages.error404();
            res.end(error404Page);

            // If DOB months is invailed (0 or greater than 31)
            console.log("Month should be between 1 - 12");
        } else if (date < 1 || date > 31) {
            var error404Page = htmlPages.error404();
            res.end(error404Page);
            console.log("Day should be between 1 - 31");
        } else {
            var age = calculateAgeLogic.calculate(year, month, date);
            var ageOutput = htmlPages.calcuatedOutputHtml(name, age);
            res.end(ageOutput);

            // If you want in json object formate. just for console log and api test.
            var ageObj = {
                age: age,
                name: name
            }
            console.log(ageObj);

            // Reading obj value
            // console.log(ageObj.age);
            // console.log(ageObj.name);
        }

    }

    res.end();
}).listen(port, function() {
    console.log("App is running on port " + port + "\n");
    console.log("API DOC's: \nhttp://" + host + ":" + port + "/");
    console.log("API Call Eg: \nhttp://" + host + ":" + port + "/age?year=2001&month=08&date=03&name=Prakum\n");
});

console.clear();