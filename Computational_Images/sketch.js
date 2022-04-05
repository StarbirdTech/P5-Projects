let x
let y
let x1
let y1

let mode = 0

file = ["curri.jpg","frog.jpg","audio_viz_1.jpg","audio_viz_2.png","e.png","glowing_cube.jpg","isa.jpg","splatter.jpg","faceted_shape.png"]
currentFile = 0

function setup() {
  createCanvas(600, 600)
  loadImg()
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
    drawShapes()
  }
  else if (mode == 3) {
    wanderingLine()
  }
  else {
    mode = 1
  }
  push()
  fill(255)
  stroke(0)
  text(mouseX, 10, 15)
  text(mouseY, 10, 35)
  pop()
}


// keyboard controls
function keyTyped() {
  if (key === 's') {
    saveCanvas('sketch', 'png');
  }
  else if (key === 'r') {
    mode = 0
  }
  else if (key === 'n') {
    currentFile++
    if (currentFile > file.length-1) {
      currentFile = 0
    }
    loadImg()
  }
  else if (key === ' ') {
    mode ++
  }
}

// when upper left quarter of screen is clicked subtract one from current file
// when upper right quarter of screen is clicked add one to current file
// when lower left quarter of screen is clicked subtract one from mode
// when lower right quarter of screen is clicked add one to mode
function mouseClicked() {
  if (mouseX < width/2 && mouseY < height/2) {
    currentFile--
  }
  else if (mouseX > width/2 && mouseY < height/2) {
    currentFile++
  }
  else if (mouseX < width/2 && mouseY > height/2) {
    mode--
  }
  else if (mouseX > width/2 && mouseY > height/2) {
    mode++
  }
  if (currentFile < 0) {
    currentFile = file.length-1
  }
  else if (currentFile > file.length-1) {
    currentFile = 0
  }
  if (mode < 1) {
    mode = 4
  }
  else if (mode > 4) {
    mode = 0
  }
  loadImg()
}

function loadImg() {
  img = loadImage(file[currentFile])
  //img.resize(width, height)
  img.loadPixels();
}

// randomly draw circles using the color data from the image
function drawCircles() {
  for (let i = 0; i < 1000; i++) {
    let x = random(img.width);
    let y = random(img.height);
    let d = random(1, 10);
    noStroke()
    fill(img.get(x, y));
    ellipse(x * width / img.width, y * height / img.height, d, d);
  }
}

function drawHollowCircles() {
  for (let i = 0; i < 1000; i++) {
    let x = random(img.width);
    let y = random(img.height);
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

// randomly draw shaped using color data from image
function drawShapes() {
  for (let i = 0; i < 1000; i++) {
    let x = random(img.width);
    let y = random(img.width);
    let d = random(1, 10);
    noStroke()
    fill(img.get(x, y));
    ellipse(x, y, d, d);
  }
}
/*
// make a function that adds 1 to mode when left third of screen is clicked
function mouseClicked() {
  if (mouseX > width/3) {
    mode ++
  }
}
*/