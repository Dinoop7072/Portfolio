let darkMode=document.getElementById("moon"),
nav=document.getElementById("nav"),
closeNav=document.getElementById("close"),
name=document.getElementById("name"),
prof=document.getElementById("prof");
list=document.getElementsByClassName("list-item"),
svg=document.getElementsByTagName("svg"),
header=document.getElementById("header");
logo=document.getElementById("logo"),
toggle=document.getElementById("toggle");
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
// nav=document.getElementById("nav"),
const navLink=document.querySelectorAll('.nav-link');



toggle.addEventListener('click',()=>{
    nav.classList.toggle("show");
})


closeNav.addEventListener('click',()=>{
    nav.classList.remove("show");
})



function linkaction(){



    nav.classList.remove('show');
 }

 navLink.forEach(n=>n.addEventListener('click',linkaction))


 




 darkMode.addEventListener("click",()=>{

    nav.classList.toggle("dark");
    closeNav.classList.toggle("light");
    name.classList.toggle("light");
    prof.classList.toggle("light");
    
    
        for (let i=0;i<list.length;i++)
        {
            list[i].classList.toggle("light");
        }
    darkMode.classList.toggle("light");


    for (let i=0;i<svg.length;i++)
        {
            svg[i].classList.toggle("scalarVector");
        }

        header.classList.toggle("dark");
        logo.classList.toggle("light");
        
        
    darkMode.classList.toggle("light");

    for (let i=0;i<navLink.length;i++)
        {

            navLink[i].classList.toggle("light");
        }
   
})
let progressBar = document.querySelector(".circular-progress1");
let valueContainer = document.querySelector(".value-container1");

let progressValue = 0;
let progressEndValue = 60;
let speed = 30;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let progressBar1 = document.querySelector(".circular-progress2");
let valueContainer1 = document.querySelector(".value-container2");
let skills=document.querySelector("#skills");
let progressValue1 = 0;
let progressEndValue1 = 40;
let speed1 = 30;

let progress1 = setInterval(() => {
  
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress1);
  }
}, speed1);

let progressBar2 = document.querySelector(".circular-progress3");
let valueContainer2 = document.querySelector(".value-container3");

let progressValue2 = 0;
let progressEndValue2 = 30;
let speed2 = 30;

let progress2 = setInterval(() => {

  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);
