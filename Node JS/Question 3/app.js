const http = require("http");
const url = require("url");

var htmlPages = require("./htmlCode.js");
var calculateDataInfo = require("./logic.js");

const port = 3002;
const host = "localhost";

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var queryObj = url.parse(req.url, true).query;

    var object = queryObj.object;
    var metric = queryObj.metric;
    var radius = queryObj.radius;
    var matrices;

    // route "/" or metric API endpoint
    if (req.url == "/" || req.url == "/metrics") {
        var homePage = htmlPages.homepage();
        res.end(homePage);
    }

    // if routes are undefined or out of params
    else if (typeof object === 'undefined' || typeof metric === 'undefined' || typeof radius === 'undefined') {
        var error404Page = htmlPages.error404();
        res.end(error404Page);
    } else {
        var result = calculateDataInfo.calculation(object, metric, radius);
        console.log(result);
        var resultPage = htmlPages.resultHtmlCode(result);
        res.end(resultPage);
    }

    res.end();
}).listen(port, function() {
    console.log("App is running on port " + port + "\n");
    console.log("App DOC's: \nhttp://" + host + ":" + port + "/");
    console.log("Fatch Data: \nhttp://" + host + ":" + port + "/metrics?object=sphere&metric=volume&radius=5\n");
});

console.clear();