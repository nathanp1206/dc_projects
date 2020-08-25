const pgp = require("pg-promise")()

const connect = require("./config")

const db = pgp(connect)

db.any('SELECT * FROM users')
.then(users=>console.log(users))