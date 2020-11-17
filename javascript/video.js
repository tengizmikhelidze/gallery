"use strict;"
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video1_h1 = document.getElementById('video1-h1');
var video2_h1 = document.getElementById('video2-h1');
var video3_h1 = document.getElementById('video3-h1');
var header_video = document.getElementsByClassName('header-video');
var header = document.getElementsByClassName('header');
console.log(header[0]);
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
}, 15000)

function stopVideo(){
    header_video[0].remove();
    header[0].style.display='block';
}