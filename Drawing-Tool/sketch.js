/*function setup() {
  createCanvas(710, 400);
  background(102);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(170, 190, 200);
  //noStroke();
  
  //fill(255);
  //ellipse(mouseX, mouseY, 60, 60);
  
  //fill(0);
  //ellipse(width - mouseX, height - mouseY, 60, 60);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY)
  }
}