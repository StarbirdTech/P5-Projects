function setup() {
  createCanvas(2400, 1350);
  frog = loadImage("frog.jpg");
  pixelDensity(1)
}

function draw() {
  background(0)
  // image(frog,0,0)
  loadPixels();
  frog.loadPixels();

  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      index = (x+y*width)*4
      pixels[index + 0] = 255  //frog.pixels[index + 0]
      pixels[index + 1] = 255 - frog.pixels[index + 1]
      pixels[index + 2] = 255 - frog.pixels[index + 2]
      pixels[index + 3] = frog.pixels[index + 3]

      if (x % 100 == 0 && y % 100 == 0) {
        fill(255,0,0)
        circle(x,y,100)
      }
    }
  }
  updatePixels();
}