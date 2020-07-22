const express = require('express')
const app = express()
const port = 3355


const es6Renderer = require('express-es6-template-engine')

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

const middleware = (req,res,next)=>{
    console.log("Middleware")
    next()
}

app.get("/", middleware, middleware, (req, res)=>{
   res.send("Done")
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})

