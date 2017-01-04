var i = 0;
function setup() {
  createCanvas(1024, 600);
}

function draw() {
  background(255,0,0, 0);
  //ellipse(50, i, 80, 80);
  ellipse(mouseX, mouseY, 60, 60);
  if (mouseIsPressed) {
    i += mouseY / 100;
  }
  if (i > height) i = 0;
}
