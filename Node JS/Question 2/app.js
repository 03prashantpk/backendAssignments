const http = require('http');
var url = require('url');
const fs = require("fs");

var htmlPages = require("./htmlCode.js");


const port = 3001;
const host = "localhost";

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    vegetableData = () => {
        let vegeData = fs.readFileSync('vegetableData.json');
        let vegeJsonObj = JSON.parse(vegeData);

        return vegeJsonObj;
    }

    // calculating object length
    var rootVegeLen = vegetableData().result.rootVegetable.length;
    var leafVegeLen = vegetableData().result.leafyVegetables.length;

    //
    if (req.url == "" || req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        var homePage = htmlPages.homepage();
        res.end(homePage);

        //
    } else if (req.url == "/vegetables") {
        // Required Data as per Assignment
        console.log("\n\n", vegetableData());
        res.write("<body style='padding: 2% 4%'>");

        // Extra Data
        // All Root vegetable list
        console.log("\n\nAll Root vegetable Data:");

        res.write("<br><h2>All Root vegetable Data:</h2><br>");
        res.write("JSON Object Formate: " + JSON.stringify(vegetableData()) + "<br><br>");
        for (let root = 0; root < rootVegeLen; root++) {


            var rootListing = JSON.stringify(vegetableData().result.rootVegetable[root]).replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
            console.log(rootListing);

            res.write("<li>" + rootListing + "</li> <br>");

        }

        // All Leafy vegetable List
        console.log("\nAll Leafy vegetable Data:");
        res.write("<br><h2>All Leaf vegetable Data:</h2><br>");
        for (let leaf = 0; leaf < leafVegeLen; leaf++) {

            var leaflisting = JSON.stringify(vegetableData().result.leafyVegetables[leaf]).replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
            console.log(leaflisting);
            res.write("<li>" + leaflisting + "</li> </body><br>");

        }


        //
    } else if (req.url == "/rootVegetable" || req.url == "/vegetables/root/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<body style='padding: 2% 4%'>");

        console.log(vegetableData().result.rootVegetable);

        console.log("\n\nAll Root vegetable Data:");
        res.write("<br><h2>All Root vegetable Data:</h2><br>");
        for (let root = 0; root < rootVegeLen; root++) {


            var rootListing = JSON.stringify(vegetableData().result.rootVegetable[root]).replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
            console.log(rootListing);

            res.write("<li>" + rootListing + "</li> <br></body>");

        }

        //
    } else if (req.url == "/leafyVegetables" || req.url == "/vegetables/leaf/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<body style='padding: 2% 4%'>");

        console.log(vegetableData().result.leafyVegetables);

        // All Leafy vegetable List
        console.log("\nAll Leafy vegetable Data:");
        res.write("<br><h2>All Leaf vegetable Data:</h2><br>");
        for (let leaf = 0; leaf < leafVegeLen; leaf++) {

            var leafListing = JSON.stringify(vegetableData().result.leafyVegetables[leaf]).replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
            console.log(leafListing);

            res.write("<li>" + leafListing + "</li> <br></body>");
        }
    } else {
        var error404Page = htmlPages.error404();
        res.end(error404Page);
    }


    res.end();
}).listen(port, function() {
    console.log("App is running on port " + port + "\n");
    console.log("App DOC's: \nhttp://" + host + ":" + port + "/");
    console.log("Fatch Data: \nhttp://" + host + ":" + port + "/vegeteables\n");
});

console.clear();