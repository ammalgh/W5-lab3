// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...

let stopLight=document.getElementById('stopLight');
let slowLight=document.getElementById('slowLight');
let goLight=document.getElementById('goLight');


let btn1=document.getElementById("stopButton");
btn1.addEventListener("click",() =>{

    stopLight.style.backgroundColor = "red";
  })


  let btn2=document.getElementById("slowButton");
btn2.addEventListener("click",() =>{

    slowLight.style.backgroundColor = "yellow";
  })


  let btn3=document.getElementById("goButton");
  btn3.addEventListener("click",() =>{
  
    goLight.style.backgroundColor = "green";
    })

