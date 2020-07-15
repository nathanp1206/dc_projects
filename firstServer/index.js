const http = require('http')
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html")
    res.end(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Look a website</title>
    </head>
    <body>
        <h1>Hello World</h1>
        ${['I', 'AM', 'AWESOME'].map(text=>text+' *CLAP* ').join(" ")}
        <div>The time is : <span id="time">${new Date().toTimeString()}</span></div>
    </body>
    <script>
        setInterval(()=>{
            document.getElementById("time").innerHTML = new Date().toTimeString()
        }, 1000)
    </script>
    </html>`)
})



server.listen(3000, '127.0.0.1', ()=>console.log(`Server running at http://${hostname}:${port}`))