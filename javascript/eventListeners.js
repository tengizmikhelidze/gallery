"use strict;"
let gallery = [];

for(let i=1; i<=8; i++){
    gallery.push(document.getElementsByClassName(`img-${i}`)[0]);
}

window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight/4){
        downArrow.style.display = "none";
    } else {
        downArrow.style.display = "initial";
    }
})

for(let i=0; i<gallery.length; i++){
    gallery[i].addEventListener('mouseover', () =>{
        gallery[i].style.filter= 'brightness(0.8)';
        gallery[i].childNodes[1].childNodes[1].style.transform = 'translateX(0px)';
        gallery[i].childNodes[1].childNodes[3].childNodes[1].style.display='initial';
    } )

    gallery[i].addEventListener('mouseout', () =>{
        gallery[i].style.filter= 'brightness(1)';
        gallery[i].childNodes[1].childNodes[1].style.transform = 'translateX(10px)';
        gallery[i].childNodes[1].childNodes[3].childNodes[1].style.display='none';
    } )
}

