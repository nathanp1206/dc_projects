const express = require("express")
const app = express()
const path = require('path')
const html_modules = require("./modules/html_modules")
const html_404 = require("./modules/html_404")
const port = 3001
let count = 0

// app.get("/", (req, res)=>res.sendFile('/html/index.html'))

app.use('/static', express.static(path.join(__dirname, 'public')))

// app.get('/about', (req, res)=>res.sendFile(path.join(__dirname, '/public/about.html')))

// app.get('/', (req, res)=>res.sendFile(path.join(__dirname, '/public/index.html')))

// app.get('/legal', (req, res)=>res.sendFile(path.join(__dirname, '/public/legal.html')))

// app.get('/contact', (req, res)=>res.sendFile(path.join(__dirname, '/public/contact.html')))

app.get('/', (req, res)=>res.send(html_modules("Home")))

app.get('/about', (req, res)=>res.send(html_modules("About")))

app.get('/contact', (req, res)=>res.send(html_modules("Contact")))

app.get('/legal', (req, res)=>res.send(html_modules("Legal")))

app.get('/style.css', (req, res)=>res.sendFile(path.join(__dirname, './public/style.css')))

app.get('/404.gif', (req, res)=>res.sendFile(path.join(__dirname, './images/404.gif')))


app.get("*", (req, res)=>{
    res.status(404)
    res.send(html_404("404"))
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})