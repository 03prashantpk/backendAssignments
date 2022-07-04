const https = require("https");

// if the route, The URL is "/"
homepage = () => {
    var htmlCode = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Age Cal - API</title>
        <style>
            body {
                padding: 1% 3%;
                background-color: antiquewhite;
            }
            
            hr {
                border-top: 1px #93939337 solid;
            }
            
            code {
                background-color: #F2F2F2;
                padding: 9px 10px;
                color: #424242;
            }
            
            h3 {
                color: #EA6D4A;
                font-weight: 600;
            }
            
            li {
                width: 500px;
                padding: 8px;
                background-color: #F2F2F2;
                color: #424242;
            }
            
            span {
                padding: 0px 10px;
                text-align: right;
            }
            
            h1 {
                text-align: center;
                color: #EA6D4A;
                font-weight: 600;
            }
            
            a {
                color: #fff;
                background-color: #EA6D4A;
                padding: 8px;
            }
            
            #exp {
                color: #ea6d4ae7;
                font-size: 15px;
            }
            
            p {
                color: #EA6D4A;
                position: fixed;
                bottom: 0;
                right: 0;
                padding-right: 40px;
            }
        </style>
    </head>
    
    <body>
        <h1>Age Calculator - API DOC's</h1>
        <h6>Age Calculator API, using CORE NODE and Manual Routes <br><i>Without any NPM (packages)</i></h6>

        <hr>
        <h3>How to make an API Call</h3>
        <code>http://localhost:3000/age?year=2001&month=08&date=03&name=Prakum</code>
    
        <h3>API END POINT</h3>
        <code>http://localhost:3000/age</code>
    
        <h3>Parameters: *All required</h3>
        <ul>
            <li>year: <span>number</span> <span id="exp">User DOB year in number. eg: 1980</span> </li>
            <li>month: <span>number</span> <span id="exp">User DOB month in number. eg: between 01 and 12</span> </li>
            <li>date: <span>number</span> <span id="exp">User DOB date in number. eg: 01 to 31 </span></li>
            <li>name: <span>string</span> <span id="exp">User name in string. eg: Prakum</span> </li>
        </ul>
        <h3>Run example</h3>
        http://localhost:3000/age?year=2001&month=08&date=03&name=Prakum <a href="http://localhost:3000/age?year=2001&month=08&date=03&name=Prakum" target="_blank">Click Here</a>
    
        <p><a href="#">Coded by Prashant Kumar</a></p>
    </body>
    
    </html>`;
    htmlCode.replace(/(\r\n|\n|\r)/gm, "");
    return htmlCode;
};

// if the route, The URL is "correct with prams and conditions"
calcuatedOutputHtml = (name, age) => {
    var calaulatedOutputHtml = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Age Cal - API</title>
            <style>
            body {
                background-color: antiquewhite;
                padding: 2%;
            }
            p{
                font-size: 24px;
                font-weight: 600;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            </style>
        </head>

        <body>
            <p>Hello, ${name}</p>
            <p>You are currently ${age} years old</p>
        </body>

        </html>`;

    return calaulatedOutputHtml;
}

// If url or the prams are invalid.
error404 = () => {
    var error404Html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404</title>
        <style>
            body {
                text-align: center;
                background-color: antiquewhite;
            }
            
            h1 {
                font-size: 70px;
            }
        </style>
    </head>
    
    <body>
        <h1>404</h1>
        <p>Error</p>
        <p>Please read the documentation: <a href="http://localhost:3000/age">Click Here</a></p>
        
    </body>
    
    </html>`;

    return error404Html.replace(/(\r\n|\n|\r)/gm, "");
}

module.exports = { homepage, calcuatedOutputHtml, error404 };