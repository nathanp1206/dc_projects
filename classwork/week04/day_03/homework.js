//create array of only names
// let names = characters.map(char=>char.name)
// console.log(names)

// let charsAndMass = characters.map(char=>parseInt(char.mass) > 50 ? {name:char.name, mass:char.mass} : null).filter(e=>e)
// console.log(charsAndMass)

// let charsAndMass = characters.map(function(char, index, array){
//     return {name:char.name, mass:char.mass}
// })

// console.log(charsAndMass)

let charsAndMass = [];
characters.foreach(function(char){
    if(parseInt(chars.mass) > 50){
        charsAndMass.push{name:char.name, mass:char.mass}
    }
})

console.log(charsAndMass)


//const starNames = character.map(function(char) {
//     return char.name;
// });

// console.log(starNames)

// const starNames = character.map(function(char) {
//     if (`${char.mass}` > 50){
//         return `${char.name} ${parseInt(char.mass)}`;
//         return {name:char.name, mass:char.mass}
//     }
// }).filter(e=>e);
// console.log(starNames)