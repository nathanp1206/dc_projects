// const button = document.querySelector("button")

// let clickFunc = () => {
//     console.log('You clicked me yo!)
// }

// let anotherFunc = () => {
//     alert("Hey I clicked")
//     button.removeEventListener("click", anotherFunc)
// }

// // button.onclick = clickFunc
// // button.onclick = anotherFunc

// button.addEventListener("click", clickFunc)
// button.addEventListener("click", anotherFunc)

// window.addEventListener("resize", ()=>{
//     console.log(window.innerWidth)
// })

// button.addEventListener("click", event=>{
//     console.log(event)
// })
let button = document.querySelector("add-element")

const createCard = () => {
    let newCard = document.createElement("div")
    newCard.setAttribute("class", "card")

    let newH2 = document.createElement("h2")
    newH2.innerText = "Title"

    let newP = document.createElement("p")
    newP.append("Content")

    let newEp = document.createElement("p")
    newEp.setAttribute("class", "extra")
    newEp.innerText = "Extra Content"

    newCard.append(newH2, newP, newEp)

    document.getElementById("cards").append(newCard)
}

button.addEventListener('click', ()=>{
    let titleInput = document.getElementById("card-title")
    let contentInput = document.getElementById("card-content")
    let extraInput = document.getElementById("card-extra")
    console.dir(titleInput)

    let newCard = createCard()
    document.getElementById("cards").append(newCard)
})


const button = document.querySelector('#myButton')

button.addEventListener('click', function(event){
    if(event.button === '0'){
        console.log('You Left Clicked')
    }
})
