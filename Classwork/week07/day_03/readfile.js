const fs = require('fs')

fs.readFile("helloWorld.js", 'utf8', (err, data)=>{
    if (err) throw (err);

    let num = Number(data);
    console.log(num)
})