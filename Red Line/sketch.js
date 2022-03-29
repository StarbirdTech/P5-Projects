// Change headX,Y in setup or here to change the start location of the line
let headX = 200;
let headY = 200;
let tailX = 200;
let tailY = 200;

let speed = 10;

let map;

let pointX = 100;
let pointY = 100;

function preload() {
  map = loadImage('t-logo.png');
}

function setup() {
  createCanvas(400, 400);
  background(10,10,10);
  stroke(255,0,0);
  strokeWeight(1);
  image(map, 0, 0, 400, 400);
  //translate(200, 200); // Moves orgin to center of window // Keenan help!
}

function draw() {
  pointX += random(-10,10);
  pointY += random(-10,10);

  if (getDarkness(pointX,pointY) < 250) {
    tailX = headX;
    tailY = headY;
    headX = pointX;
    headY = pointY;
    line(headX,headY,tailX,tailY);
  }
}

function mousePressed() {
  text(random(1),mouseX,mouseY);
}

function getDarkness(x,y) {
  let pixcol = get(x,y);
  return (pixcol[0] + pixcol[1] + pixcol[2])/3;
}