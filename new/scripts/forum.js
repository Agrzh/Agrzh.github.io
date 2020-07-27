function profile() {
let el = document.querySelector(".menu_profile");
el.style.opacity = "1";
}

function close_profile() {
  let el = document.querySelector(".menu_profile");
  el.style.opacity = "0";
}
window.onload = function() {
 var drawingCanvas = document.getElementById('avatar');
 if(drawingCanvas && drawingCanvas.getContext) {
  var context = drawingCanvas.getContext('2d');
  context.strokeStyle = "#000";
  context.fillStyle = "gray";
  context.beginPath();
  context.arc(125,70,55,0,Math.PI*2,true);
  context.closePath();
  context.stroke();
  context.fill();
 }
}

function exit() {
window.location.href = "index.html";
}

function no_news() {
  var no_newsElement = document.querySelector('.block_news');
  var animation = no_newsElement.animate([
    {transform: 'translate(0)'},
    {transform: 'translate(2000px)'}
  ],);
  animation.addEventListener('finish', function() {
    no_newsElement.style.transform = 'translate(2000px)';
  });
}
function news() {
  var newsElement = document.querySelector('.block_news');
  var animation = newsElement.animate([
    {transform: 'translate(0)'},
    {transform: 'translate(0)'}
  ],);
  animation.addEventListener('finish', function() {
    newsElement.style.transform = 'translate(0)';
  });
}
/*document.getElementById('discord').addEventListener('click', function(e) {
    var copytext = document.createElement('input');
    copytext.value = window.location.href;
    document.body.appendChild(copytext);
    copytext.select();
    document.execCommand('copy');
});*/
