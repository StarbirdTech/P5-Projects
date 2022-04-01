// make grid of squares the size of the window with random colors

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  for (var i = 0; i < width; i += 10) {
    for (var j = 0; j < height; j += 10) {
      fill(random(255), random(255), random(255));
      rect(i, j, 10, 10);
    }
  }
}

//create button to refresh page
function draw() {
  if (mouseIsPressed) {
    background(0);
    noStroke();
    for (var i = 0; i < width; i += 10) {
      for (var j = 0; j < height; j += 10) {
        fill(random(255), random(255), random(255));
        rect(i, j, 10, 10);
      }
    }
  }
}