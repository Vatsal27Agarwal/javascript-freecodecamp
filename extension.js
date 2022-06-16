
let myleads = []

const inputbtn = document.getElementById("input-btn")
const deletebtn = document.getElementById("delete-btn")
const inputel = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")
const leadsfromlocalstorage = JSON.parse( localStorage.getItem("leads") )

function render(array) {
    let listitems = ''
    for (let i = 0; i< array.length; i++){
        listitems += "<li>" + array[i] + "</li>"
    }
    ulel.innerHTML = listitems
}

if (leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage
    render(myleads)
}

inputel,addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        event.preventDefault()
        inputbtn.click()
    }
})

inputbtn.addEventListener("click", function() {
    myleads.push(inputel.value)
    render(myleads)
    inputel.value = ""

    localStorage.setItem("leads",JSON.stringify(myleads))
    console.log( localStorage.getItem("leads"))
})

deletebtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myleads =[]
    render(myleads)
})

