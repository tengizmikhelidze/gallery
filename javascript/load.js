var spinnerWrapper = document.querySelector('.spinner-wrapper');
var downArrow = document.getElementsByClassName('fa-arrow-alt-circle-down');

window.addEventListener("load", ()=>{
    spinnerWrapper.remove();
})  

window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight/4){
        downArrow[0].style.display = "none";
    } else {
        downArrow[0].style.display = "initial";
    }
})