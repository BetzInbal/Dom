/*
div class="mission" id="mission">
    <div class="leftMission">



}*/






const button = document.querySelector("#add")
button.addEventListener("click", e =>{
    let div = document.createElement("div")
    div.className = "mission"
    const cont = document.querySelector("#cont")
    cont.appendChild(div)
    let leftMission = document.createElement("div")
    div.appendChild(leftMission)
    let inp = document.createElement("input")
    inp.type = "checkbox"
    leftMission.appendChild(inp)
    let label = document.createElement("label")
    leftMission.appendChild(label)
    const missiontoadd = document.querySelector("#toadd")
    label.textContent = missiontoadd.value
    missiontoadd.value=""  
    let rigthMission = document.createElement("div") 
    div.appendChild(rigthMission)
    let labelX = document.createElement("label")
    rigthMission.appendChild(label)
    rigthMission.value="X" 
    inp.addEventListener("change", e => {
        console.log(e)
        if(inp.checked){
            label.style.textDecoration = "line-through"
            div.style.background = "rgb(81, 204, 50)"
            }
            else{
                label.style.textDecoration = "none"
            div.style.background = "rgb(241, 240, 240)"
            }   
    })
    rigthMission.addEventListener("click", e => {

    })
})

