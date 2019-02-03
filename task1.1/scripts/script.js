let canvas = document.getElementById("sandbox");
let context = canvas.getContext("2d");



//let R = 300/2;
function drowDivisions(R) {


for(let d = 0; d < 60; ++d){
  let angle = (d/60)*(2*Math.PI);
  let pX = Math.cos(angle)*R;
  let pY = -Math.sin(angle)*R;
  let qX = 0.9 * pX;
  let qY = 0.9 * pY;
  pX += R; pY += R;
  qX += R; qY += R;


  let line = new Path2D();

  line.moveTo(pX,pY);
  line.lineTo(qX, qY);
if(d % 5 == 0){
  context.lineWidth = 3;
} else context.lineWidth = 1;
  context.stroke(line);


}
}

function getTimeNow() {

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours, minutes, seconds);
return {
hours: hours,
minutes:minutes,
seconds:seconds

};
}

function getAngles(){
  let timeNow = getTimeNow();

  let hoursAngle, minutesAngle, secondsAngle;
  secondsAngle = (timeNow.seconds / 60)*(2*Math.PI);
    minutesAngle = (timeNow.minutes / 60)*(2*Math.PI);
    hoursAngle = ((timeNow.hours % 12)/12)*(2*Math.PI);

  secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;

    return{
      secondsAngle: secondsAngle,
      minutesAngle: minutesAngle,
      hoursAngle: hoursAngle
    };
}
function drawSecondHand(angle, R) {

let pX = Math.cos(angle)* 0.9 * R;
let pY = -Math.sin(angle)* 0.9 * R;
pX += R; pY += R;

let line = new Path2D;
line.moveTo(R,R);
line.lineTo(pX,pY);
context.strokeStyle = "red";
context.stroke(line);
context.strokeStyle = "black"

}

function drawMinutesHand(angle, R) {

let pX = Math.cos(angle)* 0.7 * R;
let pY = -Math.sin(angle)* 0.7 * R;
pX += R; pY += R;

let line = new Path2D;
line.moveTo(R,R);
line.lineTo(pX,pY);
context.lineWidth = "2"
context.strokeStyle = "black";
context.stroke(line);
context.strokeStyle = "black"
context.lineWidth = "1"
}

function drawHoursHand(angle, R) {

let pX = Math.cos(angle)* 0.5 * R;
let pY = -Math.sin(angle)* 0.5 * R;
pX += R; pY += R;

let line = new Path2D;
line.moveTo(R,R);
line.lineTo(pX,pY);
context.lineWidth = "3"
context.strokeStyle = "black";
context.stroke(line);
context.strokeStyle = "black"
context.lineWidth = "1"
}

function drawWatch() {

context.clearRect(0, 0, 300, 300);
let R = 300/2;
let circle = new Path2D();
circle.arc(R,R,R, 0, 2*Math.PI);
context.stroke(circle);
let angles = getAngles();
drowDivisions(R);
drawSecondHand(angles.secondsAngle, R);
drawMinutesHand(angles.minutesAngle, R);
drawHoursHand(angles.hoursAngle, R);
setTimeout(drawWatch, 1000);

}

window.onload = function (){
drawWatch();

}
