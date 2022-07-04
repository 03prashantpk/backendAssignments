// if the route, The URL is "/"
homepage = () => {
    var htmlCode = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quest 2 - How it Works</title>
        <style>
            body {
                padding: 1% 3%;
                background-color: #aaf0d1;
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
                color: #0b3d27;
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
                color: #0b3d27;
                font-weight: 600;
            }
            
            a {
                color: #fff;
                background-color: #0b3d27;
                padding: 8px;
            }
            
            #exp {
                color: #0b3d27e7;
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
        <h1>Question 2</h1>
        <h6>Reading JSON data using Core Node file system and Manual Routes <br><i>Without any NPM (packages)</i></h6>
        <hr>
        <h3>How it works</h3>
        Document: <code>http://localhost:3000/</code>
    
        <h3>Get All vegetable Data</h3>
        Fatch All vegetable Data <code>http://localhost:3000/vegetables</code>

        <h3>Get All Root vegetable Data</h3>
        Fatch All vegetable Data <code>http://localhost:3000/vegetables/root/</code>
         <span> or</span>
        <code>http://localhost:3000/rootVegetable</code>

        <h3>Get All leaf vegetable Data</h3>
        Fatch All vegetable Data <code>http://localhost:3000/vegetables/leaf/</code>
         <span> or</span>
        <code>http://localhost:3000/leafyVegetables</code>
    
        
        <h3>Run example</h3>
        http://localhost:3000/vegetables <a href="http://localhost:3000/vegetables" target="_blank">Click Here</a>
    
        <p><a href="#">Written by Prashant Kumar</a></p>
    </body>
    
    </html>`;
    htmlCode.replace(/(\r\n|\n|\r)/gm, "");
    return htmlCode;
};

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
                background-color: #aaf0d1 ;
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


module.exports = { homepage, error404 };