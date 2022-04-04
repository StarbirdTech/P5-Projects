let x
let y
let x1
let y1

let mode = 0

function preload()
{
  img = loadImage("curri.jpg")
}

function setup() {
  createCanvas(600, 600)
  img.resize(width, height)
  pixelDensity(1)
  strokeWeight(5)
  frameRate(120)

  x = random(width)
  y = random(height)
}

function draw() {
  loadPixels();
  img.loadPixels();

  if (mode == 0) {
    push()
    stroke(0)
    background(0)
    fill(255)
    textSize(32)
    textAlign(CENTER, CENTER)
    text("Press Space to Start", width/2, height/2)
    pop()
  }
  else if (mode == 1) {
    drawHollowCircles()
  }
  else if (mode == 2) {
    drawCircles()
  }
  else if (mode == 3) {
    wanderingLine()
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

function mouseClicked() {
  mode ++
}

// randomly draw circles using the color data from the image
function drawCircles() {
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let d = random(1, 10);
    noStroke()
    fill(img.get(x, y));
    ellipse(x, y, d, d);
  }
}

function drawHollowCircles() {
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let d = random(1, 10);
    fill(255)
    stroke(img.get(x, y));
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

// draw a line that randomly moves around the screen
function wanderingLine() {
  px = random(0,width/8);
  py = random(0,height/8);
  px+=random(0,100)
  py+=random(0,100)
  img.loadPixels();
  stroke(img.get(x,y))
  line(x, y, px, py);
  x = px;
  y = py;
}