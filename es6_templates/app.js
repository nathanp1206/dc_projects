const express = require('express')
const app = express()

const es6Renderer = require('express-es6-template-engine')

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')

// app.get("/", (req, res)=>{
//     res.render('index', {
//         locals:{
//             name:"Clint",
//             age:"38"
//         }
//     }
// )})

app.get("/", (req, res)=>{
    res.render('index', {
        locals:{
            date: new Date().toTimeString()
        }
    }
)})

app.listen(4567)

