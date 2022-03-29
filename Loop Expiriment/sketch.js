let x = 10
let y = 10

//let brickColorCol[brickColorRow[]]

let palette = ['#dfccaf','#b4a389','#bf390b','#902e15','#511301']

function setup() {
  createCanvas(400, 400)
/*
  sliderSpacing = 25;
  sliderOffset = width + 10;

  xslider = createSlider(1, 100, x, 1);
  xslider.sliderNumber = 1; //<<<
  xslider.position(sliderOffset, xslider.sliderNumber * sliderSpacing);
  xslider.style("width", "80px");

  yslider = createSlider(1, 100, y, 1);
  yslider.sliderNumber = 2; //<<<
  yslider.position(sliderOffset, yslider.sliderNumber * sliderSpacing);
  yslider.style("width", "80px");
*/
  background(220)
  //translate(col*width/10, row*height/10) <<<<<<<<
/*
  x = xslider.value()
  y = yslider.value()*/
}

function draw() {
  
}

/*

let palette = ['#dfccaf','#b4a389','#bf390b','#902e15','#511301']

let fillNum = Math.round(random(4))
fill(palette[fillNum])

*/

function mousePressed() {
  for (let col = 0; col < x; col++) {
    for (let row = 0; row < y; row++) {
      let fillNum = Math.round(random(palette.length-1))
      fill(palette[fillNum])
      rect(col*width/x,row*width/y,width/x,height/y)
    }
  }
}