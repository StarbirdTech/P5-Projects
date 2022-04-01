let px
let py

let mode = 0


function preload()
{
  frog = loadImage("curri.jpg")
  //invert image colors
  frog.loadPixels()
  for (let i = 0; i < frog.pixels.length; i += 4) {
    frog.pixels[i] = 255 - frog.pixels[i]
    frog.pixels[i + 1] = 255 - frog.pixels[i + 1]
    frog.pixels[i + 2] = 255 - frog.pixels[i + 2]
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frog.resize(width,height)
  pixelDensity(1)
  strokeWeight(5)
}

function draw() {
  //background(0)
  noStroke()
  // image(frog,0,0)
  loadPixels();
  frog.loadPixels();
  frameRate(120)
  drawCircles()
  /*
  for(i = 0 ;i<30;i++)
      paintWithPixels()
  */
}


function paintWithPixels()
{
  //px = x
  //py = y

  x = random(0,width)
  y = random(0,height)
  noStroke()
  fill(frog.get(int(x),int(y)))
  if (mode == 0) {
    push()
    stroke(0)
    background(0)
    fill(255)
    text('<Press Key to Start >', width/2, height/2)
    pop()
  }
  else if (mode == 1) {
    circle(x,y,10)
  }
  else if (mode == 2) {
    line(random(0,width),random(0,height),random(0,width),random(0,height))
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
      pixels[index + 0] = frog.pixels[index + 0]
      pixels[index + 1] = frog.pixels[index + 1]
      pixels[index + 2] = frog.pixels[index + 2]
      pixels[index + 3] = frog.pixels[index + 3]
    }
  }
}

function keyPressed() {
  mode ++

  if (keyCode == 28) {
    mode = 0
  }
}

// save the canvas as a png
function keyTyped() {
  if (key === 's') {
    saveCanvas('sketch', 'png');
  }
}

// randomly draw circles using the color data from the image
function drawCircles() {
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let d = random(1, 10);
    noStroke();
    fill(frog.get(x, y));
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
    fill(frog.get(x1, y1));
    ellipse(x1, y1, 10, 10);
    fill(frog.get(x2, y2));
    ellipse(x2, y2, 10, 10);
    stroke(frog.get(x1, y1));
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
  stroke(frog.get(x, y));
  line(x, y, x + len * cos(a), y + len * sin(a));
}
/*
  for (let i = 0; i < 1000; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    noStroke();
    fill(frog.get(x1, y1));
    ellipse(x1, y1, 10, 10);
    fill(frog.get(x2, y2));
    ellipse(x2, y2, 10, 10);
    stroke(frog.get(x1, y1));
    line(x1, y1, x2, y2);
  }
}*/

// function to crop and resize the image to fill the canavs
function resize() {
  //crop the image to the size of the canvas
  image(frog, 0, 0, width, height);
  //resize the image to the size of the canvas
  frog.resize(width, height);
}