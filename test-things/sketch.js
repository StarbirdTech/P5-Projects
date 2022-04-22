function setup() {
  createCanvas(400, 400);
  circles = new Array(10);
  for (var i = 0; i < circles.length; i++) {
    circles[i] = new Circle(random(150,width-150), random(150,height-150), random(50, 100));
  }
}

function draw() {
  background(220);
  for (var i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

//add circles when mouse is pressed
function mousePressed() {
  circles.push(new Circle(mouseX, mouseY, random(50, 100)));
}

//attract circles to mouse
function mouseDragged() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].attract(mouseX, mouseY);
  }
}

// class to make circle moves randomly and mirror around the edges
class Circle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.speed = random(1, 5);
    this.direction = random(0, 360);
  }

  move() {
    this.x += this.speed * cos(this.direction);
    this.y += this.speed * sin(this.direction);
    if (this.x > width + this.d/2) {
      this.x = -this.d/2;
    } else if (this.x < -this.d/2) {
      this.x = width + this.d/2;
    }
    if (this.y > height + this.d/2) {
      this.y = -this.d/2;
    } else if (this.y < -this.d/2) {
      this.y = height + this.d/2;
    }
  }

  display() {
    ellipse(this.x, this.y, this.d, this.d);
  }

  //attract to mouse
  attract(x, y) {
    var dx = x - this.x;
    var dy = y - this.y;
    var angle = atan2(dy, dx);
    this.direction = angle;
  }
}