const qube = document.querySelector(".qube")
let topp = 1
let left = 1
document.body.addEventListener("keydown", e => {

    console.log(e.keyCode)
    switch(e.keyCode) {
        case 37 :
            if (left > 0)
            left -= 1
            break;
        case 38 :
            if (topp > 0)
            topp -= 1
            break;
        case 39 :
            if (window.innerWidth > left+(15*1)+100)
            left += 1
                else
        qube.style.backgroundColor = "#c2bdbd"
            break;
        case 40 :
            if (window.innerHeight > topp+130 )
            topp += 1
        else
        qube.style.backgroundColor = "#c2bdbd"
            break;
        default:
            break;
    }
    qube.style.left = left+"px"
    console.log(qube.style.left)
    qube.style.top = topp+"px"
    console.log( qube.style.bottom)

})
document.body.addEventListener("mousedown", e => {
    let flag = true
    document.body.addEventListener("mousemove",ev =>{
        if (flag)
        {
        left = ev.clientX
        topp = ev.clientY
        qube.style.left = left+"px"
        qube.style.top = topp+"px"
        }
    document.body/addEventListener("mouseleave", eve => {
        flag= false
    })
    } )
    // left = e.pageX
    // topp = e.pageY
    // qube.style.left = left+"px"
    // qube.style.top = topp+"px"
})
// let x = e.clientX;
// let y = e.clientY;



// const ol = document.createElement("ol");
// document.body.appendChild(ol);
// let student = JSON.parse(localStorage.getItem("studenst")) || [];
// window.localStorage.setItem("studenst", JSON.stringify(student));
// const mainInput = document.getElementById("inp");
// const buttonSubmit = document.getElementById("sumbit");
// function func(mainInput1) {
//   console.log("njdfsnjfdfdkfjnfdnjfndfnjdsfnfdsnjfd");
//   const label = document.createElement("label");
//   const labelgarb = document.createElement("label");
//   labelgarb.textContent = "click here to remove";
//   const div = document.createElement("div");
//   label.textContent = mainInput1;
//   const inp = document.createElement("input");
//   inp.type = "checkbox";
//   inp.addEventListener("change", (e) => {
//     console.log(inp.checked);
//     if (inp.checked) {
//       label.style.textDecoration = "line-through";
//       div.style.background = "rgb(81, 204, 50)";
//       updatecheack(label.textContent , true)
//       console.log(student);
//     } else {
//       label.style.textDecoration = "none";
//       div.style.background = "rgb(241, 240, 240)";
//       updatecheack(label.textContent , false)
//     }
//   });
//   labelgarb.addEventListener("click", () => {
//     div.remove();
//     const t = student.find((t) => t.title == label.textContent);
//     student.remove(t);
//     console.log(student);
//   });
//   div.className = "cheackclass";
//   div.appendChild(inp);
//   div.appendChild(label);
//   div.appendChild(labelgarb);
//   ol.appendChild(div);
//   student.push({ title: mainInput1, ischeack: inp.checked });
//   console.log(student);
// }
// for (const stu of student) {
//   func(stu.title);
// }
// // for(let i = 0; i < student.length ; i ++){
// //     func(student[i].title)
// // }
// const a = () => {
//     func(mainInput.value);
// }
// buttonSubmit.addEventListener("click", a);
// function updatecheack(labelinput,booli){
//     if(booli){
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].title == labelinput) {
//           student[i].ischeack = true;
//         }
//       }
//     }
//     else{
//         for (let i = 0; i < student.length; i++) {
//             if (student[i].title == labelinput) {
//               student[i].ischeack = false;
//             }
//           }
//     }
// }
// const t = document.getElementsByClassName("cheackclass");










