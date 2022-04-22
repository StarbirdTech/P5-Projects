let points = [];

function setup() {
  createCanvas(400, 400, WEBGL);
  
  for (let i = 0; i < 20; i++) {
    points.push(new p5.Vector(random(-width / 2, width / 2), random(-height / 2, height / 2), random(-width / 2, width / 2)));
  }
}

function draw() {
  background(220);
  //draw cubes at all points
  for (let i = 0; i < points.length; i++) {
    push();
    translate(points[i].x, points[i].y, points[i].z);
    box(10);
    pop();
  }
}

// move camera
function mouseDragged() {
  camera(mouseX - width / 2, mouseY - height / 2, 0, 0, 0, 0, 0, 1, 0);
}