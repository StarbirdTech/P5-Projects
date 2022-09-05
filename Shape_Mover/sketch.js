class Shape {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.w = 50;
    this.speed = 5;
    this.highlightWidth = this.w * 1.5;
  }
  display() {
    fill(255, 0, 0, map(this.y, 0, height / 3, 200, 0));
    rect(this.x - this.highlightWidth / 2, 0, this.highlightWidth, height);
    fill(255, 0, 0);
    circle(this.x, this.y, this.w);
  }
  move() {
    this.y += this.speed;
  }
}

class Spike {
  constructor(x) {
    this.x = x;
    this.y = 200;
    this.w = 50;
    this.speed = 5;
  }
  display() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.w);
  }
  move() {
    this.y += this.speed;
  }
}

let balls = [];
let spikes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 5; i++) {
    spikes.push(new Spike(random(width - 50)));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    if (balls[i].y > height) {
      balls.splice(i, 1);
    }
  }
  for (let i = 0; i < spikes.length; i++) {
    spikes[i].display();
  }
  fill(255);
  text("Rects: " + balls.length, 10, 20);
}

function mouseClicked() {
  balls.push(new Shape(mouseX, mouseY));
}
