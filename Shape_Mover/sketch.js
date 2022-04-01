let count = 100;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  //background('#212020');
  translate(width/2, height/2);
  rect(x, y, count);

  if (mouseIsPressed === true) {
    //line(mouseX, mouseY, pmouseX, pmouseY);
    //push();
    //scale(count, count);
    //circle(mouseX, mouseY,count,count);
    //pop();

    rect(x, y, 100)

    count = count + 1;
  }

  if (mouseIsPressed === false) {
    if (count > 10) {
      count -= 1;
    }
  }
}

function mouseClicked() {
  circle(mouseX, mouseY, 100);
}