const toggle = document.getElementById("toggle");
const respNav = document.getElementById("respNav");

const barOne = document.getElementsByClassName("bar one")[0];
const barTwo = document.getElementsByClassName("bar two")[0];
const barThree = document.getElementsByClassName("bar three")[0];

toggle.addEventListener("click",()=>{
    respNav.classList.toggle("active");

    barOne.classList.toggle("active");
    barTwo.classList.toggle("active");
    barThree.classList.toggle("active");
})

