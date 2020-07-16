const http = require('http')
const fs = require('fs')
const port = 3000;
const hostname = 'localhost';



const server = http.createServer((req, res)=>{


    if(req.url === '/'){
    fs.readFile("./index.html", "utf8", (err, data)=>{
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html")
        res.end(data)
    })
    } else if(req.url === '/style.css'){
        fs.readFile("./style.css", "utf8", (err, data)=>{
            res.statusCode = 200;
            res.setHeader("Content-type", "text/css")
            res.end(data)
        })
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", 'text/plain')
        res.end("The content is not here")
    }
})



server.listen(3000, '127.0.0.1', ()=>console.log(`Server running at http://${hostname}:${port}`))