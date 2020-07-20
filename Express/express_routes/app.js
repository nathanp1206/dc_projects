const express = require("express")
const app = express()
const port = 3005

app.get("/", (req, res)=>res.send("Hello World"))

app.get("/api", (req, res)=>res.send({"first":"Hello", "second":"World"}))

app.get("/cats", (req, res)=>res.send("Cats are great, sike"))

app.get("/cats/:name", (req, res)=>res.send(`Your cats name is ${req.params.name}`))

app.get("*", (req, res)=>{
    res.status(404)
    res.send("You have an error")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})