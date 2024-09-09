const h2 = document.createElement("h2")
h2.textContent = "hjgfbrhjmnv n"

const inp = document.createElement("input")
// inp.type= "range"
// inp.min = 0
// inp.max = 100
// inp.value = 20
// inp.step = 20

// h2.textContent = inp.value

'document.body.appendChild(h2)'
document.body.appendChild(inp)

// inp.addEventListener("change",() => 
//     {h2.textContent = inp.value} )
inp.addEventListener("paste", e => {
    e.preventDefault()
    e.target == inp
    alert("DFGNH")
    

})