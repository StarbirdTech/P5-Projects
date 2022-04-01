let px
let py

let mode = 0


function preload()
{
  frog = loadImage("frog.jpg")
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
  for(i = 0 ;i<30;i++)
      paintWithPixels()
  
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

/*
function mousePressed()
{
  save()
}
*/

function keyPressed() {
  mode ++

  if (keyCode == 28) {
    mode = 0
  }
}