var canvas = document.getElementById("stadium");
var context = canvas.getContext("2d");

context.beginPath();
context.rect(10, 20, 630, 220);
var grd1 = context.createLinearGradient(0, 0, 0, 230);
grd1.addColorStop(0, 'rgb(117, 183, 236)');
grd1.addColorStop(1, "white");
context.fillStyle = grd1;
context.fill();

context.beginPath();
context.rect(10, 250, 630, 230);
var grd2 = context.createLinearGradient(0, 250, 0, 480);
grd2.addColorStop(0, 'rgb(61, 177, 46)');
grd2.addColorStop(1, "white");
context.fillStyle = grd2;
context.fill();

context.beginPath();
context.moveTo(220,200);
context.lineTo(450,200);
context.closePath();
context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();

var grd3 = context.createLinearGradient(240,200,240,300);
grd3.addColorStop(0, 'black');
grd3.addColorStop(1, "grey");
context.beginPath();
context.moveTo(220,200);
context.lineTo(220,300);
context.closePath();
context.strokeStyle = grd3;
context.stroke();

context.beginPath();
context.moveTo(450,200);
context.lineTo(450,300);
context.closePath();
context.strokeStyle = grd3;
context.stroke();


