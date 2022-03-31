let x = 10
let y = 20

let gridWidth
let gridHeight

let vars = {}

let seed = 10

let rects = Array()

let palette = ['#dfccaf','#b4a389','#bf390b','#902e15','#511301']

function setup() {
  createCanvas(400, 400)
  gridWidth = 200
  gridHeight = 200

  
  
  rectMode(CENTER)
/*
  for (let col = 0; col < x; col++) {
    rects[col] = Array(row)
    for (let row = 0; row < y; row++) {
      rects[col][row] = Array(row)
    }
  }

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

  background(220)
  //translate(col*width/10, row*height/10) <<<<<<<<

  x = xslider.value()
  y = yslider.value()*/
}

function draw() {
  background(200)

  randomSeed(10)

  seed = random(10)
  //randomSeed(random(10))

  translate(mouseX,mouseY)

  for (let col = 0; col < x; col++) {
    for (let row = 0; row < y; row++) {
      
      let fillNum = Math.round(random(palette.length-1))
      fill(palette[fillNum])

      push()
      translate(col*gridWidth/x,row*gridHeight/y)
      rect(0,0,gridWidth/x,gridHeight/y)
      pop()
    }
  }
}