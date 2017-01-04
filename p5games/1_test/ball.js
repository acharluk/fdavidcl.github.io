function Ball(size) {
  this.size = size;
  this.position = { x:0, y:0 };
  
  this.update = function() {
    this.position.x = mouseX;
    this.position.y = mouseY;
  }
  
  this.render = function() {
    ellipse(this.position.x, this.position.y, size, size);
  }
}
