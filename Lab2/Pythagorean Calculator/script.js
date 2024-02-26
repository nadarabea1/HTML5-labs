var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(120,100);
context.lineTo(120,300);
context.lineTo(30,300);
context.closePath();
context.lineWidth = 3;
context.strokeStyle = "black";
context.fillText("a", 70, 310); 
context.fillText("b", 130, 220); 
context.fillText("c", 40, 220); 
context.stroke();

context.font="16pt Georgia"
context.fillText("According to pythagorean theorem", 10, 360);




