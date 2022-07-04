const url = require("url");

// if the route, The URL is "/"
homepage = () => {
    var htmlCode = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Question 3 - Area and Volume API</title>
        <style>
            body {
                padding: 1% 3%;
                background-color: #C0F1F5;
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
                color: #EC4E54;
                font-weight: 600;
            }
            
            li {
                width: 800px;
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
                color: #0b3d27;
                font-weight: 600;
            }
            
            a {
                color: #fff;
                background-color: #EC4E54;
                padding: 8px;
            }
            
            #exp {
                color: orange;
                font-size: 15px;
            }
            
            p {
                color: #0b3d27;
                position: fixed;
                bottom: 0;
                right: 0;
                padding-right: 40px;
            }
            h6{
                font-size: 16px;
                text-align: center;
            }
        </style>
    </head>
    
    <body>
        <h1>Question 3</h1>
        <h6>Area and Volume calculation API Using CORE NODE.<br><i>Without any NPM (packages)</i></h6>
        <hr>
        <h3>API End Point</h3>
        Document: <code>http://localhost:3000/metrics</code>
        <br>  <br>

        <h3>Supported Parameters</h3>
        <ul>
        <li>object: <span>sphere and circle</span> <span id="exp">Please use sphere or circle only as object parameters</span> </li>
        <li>metric: <span>surfaceArea , area or volume </span> <span id="exp">use metric as surfaceArea for sphere, area for circle and volume for sphere.</li>
        <li>radius: <span>number</span> <span id="exp">Use only integer value for radius</span></li>
        </ul>
        <br>
    
        <h3>Parameters expample</h3>
        1. object "sphere" with metric "volume" and radius "5":  <code>http://localhost:3000/metrics?object=sphere&metric=volume&radius=5</code>
        <br><br>
        2. object "sphere" with metric "surfaceArea" and radius "5":  <code>http://localhost:3000/metrics?object=sphere&metric=surfaceArea&radius=5</code>
        <br><br>
        3. object "circle" with metric "area" and radius "5":  <code>http://localhost:3000/metrics?object=circle&metric=area&radius=5</code>
        <br>  <br>
        
        <h3>Run example</h3>
        http://localhost:3000/ <a href="http://localhost:3000/" target="_blank">Click Here</a> <br> <br>
        http://localhost:3000/metrics <a href="http://localhost:3000/metrics" target="_blank">Click Here</a><br> <br>
        <span>or<span> <br> <br>
        http://localhost:3000/metrics?object=sphere&metric=volume&radius=5 <a href="http://localhost:3000/metrics?object=sphere&metric=volume&radius=5" target="_blank">Click Here</a> <br> <br>
        http://localhost:3000/metrics?object=sphere&metric=surfaceArea&radius=5 <a href="http://localhost:3000/metrics?object=sphere&metric=surfaceArea&radius=5" target="_blank">Click Here</a><br> <br>
        http://localhost:3000/metrics?object=circle&metric=area&radius=5 <a href="http://localhost:3000/metrics?object=circle&metric=area&radius=5" target="_blank">Click Here</a><br> <br>
    
        <p><a href="#">Coded by Prashant Kumar</a></p>
    </body>
    
    </html>`;
    htmlCode.replace(/(\r\n|\n|\r)/gm, "");
    return htmlCode;
};


resultHtmlCode = (result) => {
    var resultHtml =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Result - API</title>
        <style>
            body {
                text-align: center;
                background-color: #C0F1F5 ;
            }
            
            h1 {
                font-size: 70px;
            }
            span{
                color: #0b3d27;
                position: fixed;
                bottom: 15px;
                right: 0;
                padding-right: 40px;
            }
            a{
                color: #fff;
                background-color: #EC4E54;
                padding: 8px;
            }
        </style>
    </head>
    
    <body>
    <h1>${result}</h1>
        <p>For More: <a href="http://localhost:3000/">Click Here</a></p>
        <span><a href="#">Author Prashant Kumar</a></span>
        
    </body>
    
    </html>`;

    return resultHtml.replace(/(\r\n|\n|\r)/gm, "");
}

// If url or the prams are invalid.
error404 = (result) => {
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
                background-color: #C0F1F5 ;
            }
            
            h1 {
                font-size: 70px;
            }
        </style>
    </head>
    
    <body>
        <h1>404</h1>
        <p>Error ${result} <br> Maybe few parameters are wrong.</p>
        <p>Please read the documentation: <a href="http://localhost:3000/">Click Here</a></p>
        
        
    </body>
    
    </html>`;

    return error404Html.replace(/(\r\n|\n|\r)/gm, "");
}

module.exports = { homepage, resultHtmlCode, error404 };