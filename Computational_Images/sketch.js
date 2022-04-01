let px
let py

let mode = 0

function preload()
{
  img = loadImage("curri.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  resize(img)
  pixelDensity(1)
  strokeWeight(5)
  frameRate(120)
}

function draw() {
  loadPixels();
  img.loadPixels();

  if (mode == 0) {
    push()
    stroke(0)
    background(0)
    fill(255)
    text('<Press Space to Start >', width/2, height/2)
    pop()
  }
  else if (mode == 1) {
    drawCircles()
  }
  else if (mode == 2) {
    drawLines()
  }
  else {
    mode = 1
  }
}

function blur()
{
  noStroke()
   for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      index = (x+y*width)*4
      pixels[index + 0] = img.pixels[index + 0]
      pixels[index + 1] = img.pixels[index + 1]
      pixels[index + 2] = img.pixels[index + 2]
      pixels[index + 3] = img.pixels[index + 3]
    }
  }
}

// keyboard controls
function keyTyped() {
  if (key === 's') {
    saveCanvas('sketch', 'png');
  }
  else if (key === 'r') {
    mode = 0
  }
  else if (key === ' ') {
    mode ++
  }
}

// randomly draw circles using the color data from the image
function drawCircles() {
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let d = random(1, 10);
    noStroke();
    fill(img.get(x, y));
    ellipse(x, y, d, d);
  }
}

// randomly draw lines using the color data from the image
function drawLines() {
  for (let i = 0; i < 1000; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    noStroke();
    fill(img.get(x1, y1));
    ellipse(x1, y1, 10, 10);
    fill(img.get(x2, y2));
    ellipse(x2, y2, 10, 10);
    stroke(img.get(x1, y1));
    line(x1, y1, x2, y2);
  }
}

function wanderingLine() {
  //limit line length to 10 px
  let maxLength = 10;
  //start the line at a random position
  let x = random(width);
  let y = random(height);
  //start the line at a random angle
  let a = random(TWO_PI);
  //start the line at a random length
  let len = random(maxLength);
  //draw the line
  stroke(img.get(x, y));
  line(x, y, x + len * cos(a), y + len * sin(a));
}

function stackingLines() {
  for (let i = 0; i < 1000; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    noStroke();
    fill(img.get(x1, y1));
    ellipse(x1, y1, 10, 10);
    fill(img.get(x2, y2));
    ellipse(x2, y2, 10, 10);
    stroke(img.get(x1, y1));
    line(x1, y1, x2, y2);
  }
}

