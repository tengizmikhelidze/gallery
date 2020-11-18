"use strict;"
let spinnerWrapper = document.querySelector('.spinner-wrapper');
let downArrow = document.getElementById('downArrowLogo');
let header_video = document.getElementsByClassName('header-video');
let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');
let video1_h1 = document.getElementById('video1-h1');
let video2_h1 = document.getElementById('video2-h1');
let video3_h1 = document.getElementById('video3-h1');
let header = document.getElementsByClassName('header');
let main = document.getElementsByTagName('main');
header_video[0].style.display='none';
main[0].style.display = 'none';

function stopVideo(){
    header_video[0].remove();
    header[0].style.display='block';
    main[0].style.display = 'initial';
}
window.addEventListener("load", ()=>{
    spinnerWrapper.remove();
    header_video[0].style.display='initial';
    setTimeout(() => {
        video1.remove();
        video2.style.display = 'initial';
        video1_h1.remove();
        video2_h1.style.display = 'initial';
    }, 5000);

    setTimeout(() => {
        video2.remove();
        video3.style.display = 'initial'; 
        video2_h1.remove();
        video3_h1.style.display = 'initial';
    }, 10000);

    setTimeout(() => {
        header_video[0].remove()
        header[0].style.display='block';
        main[0].style.display = 'initial';
        
    }, 15000);
})  

