let lastDrawpoint;
let drops = []; 
let circle;

let angle = 0;
let diameter;

let x = 200
let y = 200

function setup() {
  createCanvas(400, 400);
	noFill();
	diameter = width * 0.3;
	circle = createCheckbox("Draw Circle", false);
	circle.mousePressed(function(){
		angle = 0;
	});
}

function draw() {
  background(220);
	
	if (circle.checked()){
		angle += random(0.01, 10);
		let drawPoint = createVector(
			x,
			y
		);
		drops.push( new Drop(drawPoint) )
	}
	
	drops.forEach((drop, i)=>{
			drop.update();
			drop.display();
		
	 		if (drop.size > width * 2) drops.splice(i, 1);									
	});
		
}

function mousePressed(){
	if (!circle.checked()){
		let drawPoint = createVector(mouseX, mouseY);
		drops.push( new Drop(drawPoint) );
	}
  else {
    x = mouseX;
    y = mouseY;
  }
}

function mouseDragged(){
	if (!circle.checked()){
		let drawPoint = createVector(mouseX, mouseY);
		drops.push( new Drop(drawPoint) );
	}
}



class Drop{
	constructor(p, d){
		this.pos = p;
		this.dir = d;
		this.size = 0.1;
		this.sizeInc = 0.1
	}
	
	update(){
		this.size += this.sizeInc;
		this.sizeInc *= 1.02
	}
	
	display(){
		ellipse(this.pos.x, this.pos.y, this.size);
	}
}