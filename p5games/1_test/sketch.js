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
