let myCircle


class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  draw() {
    fill(255, 0, 0);
    circle(this.x, this.y, this.r);
  }
}

function setup() {
  createCanvas(400, 400);
  myCircle = new Circle(100,10,10);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    myCircle.x = mouseX
    myCircle.y = mouseY
    myCircle.draw();
  }
}
