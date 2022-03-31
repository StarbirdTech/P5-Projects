function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
}

let vars = {};

function addSlider(variable, min, max, val, step, text) {
  let slider = createSlider(min, max, val, step);
  let label = createSpan(text.replace("#", val.toFixed(2)));
  createElement("br");
  
  let onInput = () => {
    vars[variable] = slider.value();
    label.html(text.replace("#", slider.value().toFixed(2)));
    background(245);
    stroke(vars.r, vars.g, vars.z, vars.o); 
  };
  
  slider.input(onInput);
  
  vars[variable] = val;
}


// UI set up
function setup() {
  addSlider("r", 0, 255, randomNumber(0, 255), 0.01, "Red = #");
  addSlider("g", 0, 255, randomNumber(0, 255), 0.01, "Green = #");
  addSlider("z", 0, 255, randomNumber(0, 255), 0.01, "Blue = #");
  addSlider("o", 0, 100, 50, 0.01, "Opacity = #")
  addSlider("a", -3, 3, randomNumber(-3, 3), 0.1, "#");
  addSlider("b", -3, 3, randomNumber(-3, 3), 0.1, "#");
  addSlider("c", -3, 3, randomNumber(-3, 3), 0.1, "#");
  addSlider("d", -3, 3, randomNumber(-3, 3), 0.1, "#");

  createCanvas(1000, 1000);
  stroke(vars.r, vars.g, vars.z, vars.o);
  pixelDensity(1); 
}

// Attractor sketching
let x = 1, y = 1;

function draw() {
  for(let i = 0; i < 1000; i++) {
    let oldX = x;
    let oldY = y;
    x = sin(vars.a * oldY) - cos(vars.b * oldX);
    y = sin(vars.c * oldX) - cos(vars.d * oldY);
    let scaledX = map(x, -2, 2, 0, width);
    let scaledY = map(y, -2, 2, 0, height);
    point(scaledX, scaledY);
  }
}