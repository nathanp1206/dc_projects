const header = require('./header')
const footer = require('./footer')
module.exports = function html404(pageName){
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
        ${header(pageName)}
        <div class="bodyText1">
            <img class="gifImage" src="/404.gif" alt="404 Error" />
        </div>
        <div class="bodyText">
        404 Error: Page not found
        </div>
    </div>
    ${footer(pageName)}
    </body>
    </html>
    `
}