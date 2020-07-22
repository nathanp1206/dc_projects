// const express = require('express')
// const app = express()

// const eS = require('express-session')
// const expressSession = eS({ secret:'bsiu47fbajw3246befkjbqi1342uwbdp954iusdakbjrpiu2323g78brbeiuywv', resave: false, saveUninitialized: false })
// const bcrypt = require('bcrypt')
// const saltRounds = 10
// const passport = require('passport');
// const Strategy = require('passport-local').Strategy;

// app.use(express.urlencoded({ extended: true }))
// app.use(expressSession)
// app.use(passport.initialize())
// app.use(passport.session())

// const db = pgp[]

// passport.use(new Strategy((username,password,callback)=>{
//     let user = db.find(u=>u.username===username)
//     if(!user) return callback(null, false)

//     bcrypt.compare(password, user.password)
//     .then(result=>{
//         if(!result) return callback(null, false)
//         return callback(null, user)
//     })
    
// }))

// passport.serializeUser((user, callback)=>callback(null, user.id))

// passport.deserializeUser((id, callback)=>{
//     let user = db.find(u=>String(u.id)===String(id))
//     if(!user) return callback({"not-found":"No user with that id was found."})
//     return callback(null, user)
// })

// const port = 3333

// const checkIsLoggedIn = (req,res,next) =>{
//     if(req.isAuthenticated()) return next()
//     return res.redirect("/login")
// }

// const checkIfExist = (req, res, next) =>{
//     // let user = await db.one(`SELECT * FROM students WHERE username = ${req.body.username}`)
//     let user = db.find(u=>u.username===req.body.username)
//     if(user) return res.send("User already exists")
//     next()
// }

// const createUser = (req,res,next)=>{
//     bcrypt.hash(req.body.password, saltRounds)
//     .then(hash=>{
//         let id = db.length > 0 ?db.sort((a,b)=>a.id-b.id)[db.length-1].id+1 : 1
//         db.push({
//             id:id,
//             username:req.body.username,
//             password:hash,
//             name:req.body.name
//         })
//         next()
//     })
// }

// app.get("/", checkIsLoggedIn, (req, res)=>res.send(`You are Authenticated : ${req.user.username}`))

// app.get("/login", (req, res)=>res.sendFile(__dirname + '/login.html'))

// app.get('/style.css', (req, res)=>res.sendFile(__dirname + '/style.css'))

// app.post("/login", passport.authenticate('local'), (req, res) => {
//     res.redirect("/")
// })

// app.get("/register", (req, res)=>res.sendFile(__dirname + '/register.html'))

// app.post("/register", checkIfExist, createUser, (req,res)=>{
//     res.redirect("/login")
// })

// app.listen(port, () => console.log(`http://localhost:${port}`))

const express = require('express');
const app = express();
const connectionString = require("./config");
console.log(connectionString);
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const eS = require('express-session');
const expressSession = eS({ secret:"fbasiudfbliwug3r7823iub8723bbeiuqwge871biu7", resave: false, saveUninitialized: false });
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const checkIsLoggedIn = (req,res,next) =>{
    if(req.isAuthenticated()) return next();
    return res.redirect("/login");
}

const bcrypt = require('bcrypt');
const saltRounds = 10;
const createUser = (req,res,next)=>{    
    bcrypt.hash(req.body.password, saltRounds)
    .then((hash)=> { 
        db.none(`
            INSERT INTO users 
            (name,username,password) VALUES 
            ('${req.body.name}', '${req.body.username}', '${hash}')
        `).then(res=>next())
        .catch(err=>console.log(err))
    });    
}

app.use(express.urlencoded({ extended: true }))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy((username,password,callback)=>{
    db.one(`SELECT username, name, id, password FROM users WHERE username='${username}'`)
    .then(user=>{
        console.log(user);
        if(!user) return callback(null, false);
        bcrypt.compare(password, user.password).then((result)=> {
            // result == true if they are the same
            if (!result) return callback(null, false);
            return callback(null, user);
        });
    })
    .catch(err=>{
        console.log(err);
        callback(null, false)
    })        
}));

passport.serializeUser((user,callback) =>callback(null, user.id));
passport.deserializeUser((id, callback)=>{
    db.one(`SELECT username, name, id FROM users WHERE id='${id}'`)
    .then(user=>{
        if(!user) return callback(null, false);
        callback(null, user);
    })
    .catch(err=>{
        callback(null, false)
    })
});

const port = 3030;

app.get("/",checkIsLoggedIn, (req,res)=>res.send(`Welcome ${req.user.name}`))

app.get('/login', (req,res)=>res.sendFile(__dirname + '/login.html'));

app.get('/register', (req,res)=>res.sendFile(__dirname + '/register.html'));

app.get('/style.css', (req, res)=>res.sendFile(__dirname + '/style.css'))

app.post("/login", passport.authenticate('local'), (req,res)=>{
    res.redirect(`/`);
});

app.post("/register", createUser, (req,res)=>{
    res.redirect("/login")
});

app.listen(port, () => console.log(`http://localhost:${port}`));