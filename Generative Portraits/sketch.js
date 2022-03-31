function preload()
{
  frog = loadImage("frog.jpg");
}

function setup() {
  createCanvas(858, 536);
  pixelDensity(1)
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
  x = random(0,width)
  y = random(0,height)
  fill(frog.get(int(x),int(y)))
  circle(x,y,20)
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

function mousePressed()
{
  save()
}