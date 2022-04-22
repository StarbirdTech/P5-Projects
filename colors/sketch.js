let minYchange = -30; //these two ranges determine line overlap and width you can try negative numbers for the "minYchange" it just gets a little funky
let maxYchange = 50;
let layers = 1; //If you don't understand u r dumb
let rotStripe = 10; //stripe rotation
let lines = false;
let alph = 200; //out of 255, opacity
let colRand = false; //if false, it will choose from the color palette otherwise it will be ugly
let filling = true;//Don't turn off unless lines = true
let lw = 3; //line width, 3 is good you can mess with it if you're a nerd
let extraBlack = 0; //Use negative numbers, decreases the numbers of colors drawn from the color pallete. If you think it's funny to make it a positive number it does nothing
let r, g, b;
let table;
let layerNum = 1;
let layerSlider;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  let maxSize = min(windowWidth, windowHeight) - 20;
  let canv = createCanvas(maxSize, maxSize);
  canv.mousePressed(setup);
  layerSlider = createSlider(1, 10, 1, 1);
  layerSlider.position(450, 20);
  if (lines == true) {
    strokeWeight(lw);
  } else {
    noStroke();
  }
  angleMode(DEGREES);
  let end = height / 2 + 500; //where lines stop
  let palette = floor(random(676));
  for (let layerInt = 0; layerInt < layers; layerInt++) {
    let y1;
    if (layerInt == 0) {
      y1 = -height / 2 - 300;
    } else {
      y1 = -height / 2 + (height / layers) * layerInt;
    }
    let y2 = y1,
      y3 = y2,
      y4 = y3,
      y5 = y4,
      y6 = y5;
    let rotLayer = random(359); //the smaller this number is, the closer the layers will be in rotation
    let rotThisStripe = 0;
    while (
      (y1 < end) &//I was sad until this was added
      (y2 < end) &
      (y3 < end) &
      (y4 < end) &
      (y5 < end) &
      (y6 < end) &
      (-maxYchange < minYchange)//Delete this line while the minYchange is a negative number that is greater than the maxYchange :\
    ) {
      y1 += random(minYchange, maxYchange);
      y2 += random(minYchange, maxYchange);
      y3 += random(minYchange, maxYchange);
      y4 += random(minYchange, maxYchange);
      y5 += random(minYchange, maxYchange);
      y6 += random(minYchange, maxYchange);
      if (colRand == true) {
        r = random(256);
        g = random(256);
        b = random(256);
      } else {
        let col = floor(random(5 + extraBlack));
        r = table.get(palette, col * 3);
        g = table.get(palette, col * 3 + 1);
        b = table.get(palette, col * 3 + 2);
      }
      if (filling == true) {
        fill(r, g, b, alph);
      } else {
        noFill();
      }
      push();
      translate(width / 2, height / 2);//translating to the middle to vary rotation more
      rotThisStripe += rotStripe; //rotating after each stripe
      rotate(rotThisStripe + rotLayer);//rotation of specific stripe plus specific layer
      let xStart = -width / 2;
      beginShape();
      curveVertex(xStart + 300, height + 1000);//Basically these next lines draw a line, make more lines, then stop and the last line will make sure to cover the rest of the canvas that needs to be covered.
      curveVertex(xStart - 300, y1); // It won't cover the full page sometimes if you don't
      curveVertex(xStart + (width / 5) * 1, y2);//smaller the number you divide the width by the less curvy
      curveVertex(xStart + (width / 5) * 2, y3);
      curveVertex(xStart + (width / 5) * 3, y4);
      curveVertex(xStart + (width / 5) * 4, y5);
      curveVertex(width / 2 + 300, y6);
      curveVertex(width * 2 + 300, height * 2 + 500);
      endShape(CLOSE);
      pop();//resets rotation
      
    }
  }
}
function Sliders(){
  layerNum = layerSlider.value();
  layers(layerNum.value());
  text("Layers: " + layerNum, 150, -190);
  (setup);
}