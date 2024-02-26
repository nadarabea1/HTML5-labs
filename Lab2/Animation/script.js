var canvas = document.getElementById('myCanvas');
var oontext = canvas.getContext('2d');

var x = 0;
var y = 0;
var dx = 1;
var dy = 1;

function draw() {
    oontext.clearRect(0, 0, canvas.width, canvas.height);

    oontext.beginPath();
    oontext.moveTo(0, 0);
    oontext.lineTo(x, y);
    oontext.lineWidth = 2;
    oontext.strokeStyle = 'blue';
    oontext.stroke();

    x += dx;
    y += dy;

    if (x >= canvas.width || y >= canvas.height) {
        x = 0;
        y = 0;
    }

    requestAnimationFrame(draw);
}

draw();