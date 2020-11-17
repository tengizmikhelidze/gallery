var spinnerWrapper = document.querySelector('.spinner-wrapper');
var downArrow = document.getElementById('downArrowLogo');

window.addEventListener("load", ()=>{
    spinnerWrapper.remove();
})  

window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight/4){
        downArrow.style.display = "none";
    } else {
        downArrow.style.display = "initial";
    }
})