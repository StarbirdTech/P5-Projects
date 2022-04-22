var scribble = new Scribble();

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(30);
}

function mouseMoved() {
  scribble.scribbleLine(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseClicked() {
  background(220);
}