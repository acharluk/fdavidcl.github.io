/*
var ball;

function setup() {
  createCanvas(1024, 600);
  ball = new Ball(60);
}

function draw() {
  background(255,0,0, 50);
  ball.update();
  ball.render();
}
*/


var n = createSlider(0,1000,10);//1000;
var minRad = 10;
var maxRad = 570;
var nfAng = createSlider(0,1,0.001);//0.005;
var nfTime = 0.002;
var fillColor = 255;
var acc = 0.07;

function setup() {
    createCanvas(1024, 1024);
    background(0);
    noFill();
   
}

function draw() 
{
  stroke(fillColor, 25);
  translate(width/2, height/2);
  rotate(radians(frameCount/frameRate));
  beginShape();
  for (var i=0; i<n; i++) {
    var ang = map(i, 0, n, 0, 6.283);
    var rad = map(noise(i*nfAng, frameCount*nfTime), 0, 1, minRad, maxRad);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  //nfAng+=0.000001;
    if (fillColor > 0) {
        fillColor -= acc;
        acc *= 1.0009;
    } else {
        console.log("Finished");
        noLoop();
    }
}
