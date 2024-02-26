var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");


context.beginPath();
var grd1=context.createRadialGradient(180,200,250,180,200,1);
grd1.addColorStop(0,"rgb(10, 80, 126)");
grd1.addColorStop(1,"white");
context.arc(200,200,200,0,2*Math.PI)
context.fillStyle= "blue"
context.fillStyle =grd1;
context.fill();

context.beginPath();
var grd2=context.createRadialGradient(180,200,220,300,300,5);
grd2.addColorStop(0,"rgb(10, 80, 126)");
grd2.addColorStop(1,"white");
context.arc(200,200,170,0,2*Math.PI)
context.fillStyle= "blue"
context.fillStyle =grd2;
context.fill();

context.beginPath();
context.moveTo(120,100);
context.lineTo(120,300);
context.closePath();
context.lineWidth = 22;
context.strokeStyle = "white";
context.stroke();

context.beginPath();
context.moveTo(280,100);
context.lineTo(280,300);
context.closePath();
context.stroke();

context.translate(120, 107); 
context.rotate(-40 * Math.PI / 180);
context.beginPath();
context.moveTo(0, 0);
context.lineTo(0, 240);
context.closePath();
context.stroke();
