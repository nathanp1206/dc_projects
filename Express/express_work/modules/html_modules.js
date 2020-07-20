const header = require('./header')
const footer = require('./footer')
module.exports = function htmlMod(pageName){
    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express Testing</title>
        <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
    <div class="bodyStuff">
        <div class="title">   
            ${pageName}
        </div> 
        ${header(pageName)}
        <div class="bodyText">
            You miss every shot you don't take
            -Wayne Gretsky
        </div>
    </div>
    ${footer(pageName)}
    </body>
    </html>
    `
}