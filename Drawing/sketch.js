/*
let region = [[200,300,400,600],[100,200,300,0]];
let points = [];

let lifeTime = 120;

let myCircle

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
  fill("#04e064");
  frameRate(60);

  myCircle = new fadingCircle(200, 200, 20, 255, 300);
}

function draw() {
  myCircle.draw(100,100, 10, 10, 100);
}

function showActivity(zone) {
  let x = random(region[zone][0],region[zone][1]);
  let y = random(region[zone][2],region[zone][3]);

  points.push([x,y,frameCount]);

  for (let i = 0; i < points.length; i++) {
    if (points[i][2] < frameCount - lifeTime) {
      points.splice(i,1);
    }
  }

  for (let i = 0; i < points.length; i++) {
    ellipse(points[i][0],points[i][1],10,10);
  }
}

// write a class for circles that have a lifespan
// and a color
// and a method to draw them
// and a method to update them
// and a method to check if they are still alive
// and a method to remove them
// and a method to check if they are in a certain zone

class fadingCircle {
  constructor(x,y,r,c,life) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.life = life;
  }

  draw() {
    fill(this.c);
    ellipse(this.x,this.y,this.r,this.r);
  }

  update() {
    this.life--;
  }

  isAlive() {
    return this.life > 0;
  }

  remove() {
    this.life = 0;
  }

  isInZone(x1,x2,y1,y2) {
    return this.x > x1 && this.x < x2 && this.y > y1 && this.y < y2;
  }
}

class BankAccount{
  balance = 0;
  constructor(owner, number) {
    this.owner = owner;
    this.number = number;
  }
}

let circles = []
let myCircle

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke()
  fill(0)
  myCircle = new c_Circle(300, circles.length)
}

function draw() {
  //myCircle.update()
}

class c_Circle {
  constructor(life, id){
    //this.x = x;
    //this.y = y;
    this.life = life;
    this.id = id
  }

  draw() {
    circle(circles[id][0],circles[id][1],20)
  }

  update() {
    this.life--
    if (this.life < 100) {
      background(255)
      circles.splice(id) 
    }
  }
}

function mousePressed() {
  circles.push([random(width),random[height]])
  c_Circle.draw()
}

let rectObjs = []

function setup() {
  createCanvas(400,400)
}

function draw() {
  background(50)
  noStroke()
  rectMode(CENTER)
  fill(255)
  for (let i = 0; i < rectObjs.length; i++) {
    fill(rectObjs[i].fillColor, rectObjs[i].alpha);
    rect(rectObjs[i].xpos, rectObjs[i].ypos, 50, 25);
    //rectObjs[i].ypos += 1;
    rectObjs[i].life--;
    rectObjs[i].alpha --;
  }
  for (let i = rectObjs.length - 1; i >= 0; i--) {
    if (rectObjs[i].ypos > height) {
      rectObjs.splice(i,1);
    }
  }
  for (let i = rectObjs.length - 1; i >= 0; i--) {
    if (rectObjs[i].life < 0) {
      rectObjs.splice(i,1);
    }
  }
}

 function mousePressed() {
  rectObjs.push({xpos: random(255), ypos: random(255), life:random(100,500), fillColor: color(random(255), random(255), random(255)), alpha: 100});
}

Description of Timeline

Variables:
min: the minimum time that the timeline can be at
pos: the current time that the timeline is at
max: the maximum time that the timeline can be at
increment: the amount that the timeline will move by
speed: multiplier for the increment

Usage:
pos is mapped to a point between timeline startX and endX when timeline marker is drawn

*/

let timeLineStruct = {minTime: 0, currentTime: 0, maxTime: 86400, increment: 60, speed: 3, offset: 20}
let timeline

let zones = [[50,350,50,200],[50,200,200,275],[200,350,200,275],[50,350,275,350]]
let zone_count = [8,2,1,4]

let offset = 50

function setup() {
  createCanvas(400,400)
  timeline = new Timeline(timeLineStruct)
  test_circle0 = new Circle(0)
  test_circle1 = new Circle(1)
  test_circle2 = new Circle(2)
  test_circle3 = new Circle(3)
}

function draw() {
  background(50)

  if (mouseIsPressed) {
    text(timeline.currentTime, timeLineStruct.offset, height - 3.5)
    text(timeline.currentPos, 350, height - 3.5)
  }

  test_circle0.draw()
  test_circle1.draw()
  test_circle2.draw()
  test_circle3.draw()
  timeline.draw()
  timeline.update()
}

function mousePressed() {
  timeline.currentTime = timeline.currentTime + timeline.increment
  timeline.currentPos = map(timeline.currentTime, timeline.minTime, timeline.maxTime, 0, width)
}

class Circle {
  constructor(zone) {
    this.x = random(zones[zone][0],zones[zone][1]);
    this.y = random(zones[zone][2],zones[zone][3]);
    this.r = 0;
    this.alpha = 0;
    this.start = random(5000, 7000);
    this.mid = random(70000, 80000)/2;
    this.end = random(70000, 80000);
  }
 
  draw() {
    if (timeline.currentTime >= this.start && timeline.currentTime <= this.mid) {
      this.alpha = map(timeline.currentTime, this.start, this.mid, 0, 255,true)
      this.r = map(timeline.currentTime, this.start, this.mid, 0, 100,true)
    }
    else if (timeline.currentTime >= this.mid && timeline.currentTime <= this.end) {
      this.alpha = map(timeline.currentTime, this.mid, this.end, 255, 0,true)
      this.r = map(timeline.currentTime, this.mid, this.end, 100, 0,true)
    }
    else {
      this.alpha = 0;
      this.r = 0;
    }
    fill(0, 255, 0, this.alpha);
    ellipse(this.x,this.y,this.r);
  }
}

class Timeline {
  constructor(timeLineStruct) {
    this.startX = timeLineStruct.offset;
    this.endX = width -  timeLineStruct.offset;
    this.yPos = height -  timeLineStruct.offset;
    this.currentTime = timeLineStruct.minTime;
    this.increment = timeLineStruct.increment;
    this.speed = timeLineStruct.speed;
    this.minTime = timeLineStruct.minTime;
    this.maxTime = timeLineStruct.maxTime;
    this.currentPos = 0;
  }
  draw() {
    //draw line
    stroke(200)
    strokeWeight(5)
    line(this.startX, this.yPos, this.endX, this.yPos);
    //line(20, width - 20, height - 20, width - 20);

    // draw the circle
    noStroke()
    fill(255,0,0)
    this.currentPos = map(this.currentTime,this.minTime,this.maxTime,this.startX,this.endX,true), this.startX, this.endX
    circle(this.currentPos, this.yPos, 15);
  }
  update() {
    this.currentTime = this.currentTime + this.increment * this.speed

    if (this.maxTime < this.currentTime) {
      this.currentTime = this.minTime
    }
  }
}

/*

isInZone(x1,x2,y1,y2) {
    return this.x > x1 && this.x < x2 && this.y > y1 && this.y < y2;
  }

function makeTimeline() {
  let startX = 20
  let endX = width - 20
  let ypos = height - 20

  // move the timeline
  if (mouseIsPressed) {
    timeline.currentTime = map(mouseX, 0, endX, timeline.startTime, timeline.endTime)}
  timeline.currentTime += timeline.increment * timeline.speed;
  // check if end of timeline reached
  if (timeline.currentTime > timeline.endTime) {timeline.currentTime = timeline.startTime;}
  // map the current time to the timeline
  timeline.currentPos = map(timeline.currentTime, timeline.startTime, timeline.endTime, startX, endX);

  drawLine(startX, ypos, endX, ypos);
  
  drawCircle(timeline.currentTime);

  if (mouseIsPressed == true) {
    timeline.currentPos = mouseX
    if (timeline.currentPos < startX) {timeline.currentPos = startX}
    if (timeline.currentPos > endX) {timeline.currentPos = endX}
  }
}

function mouseReleased() {
  timeline.currentTime = map(mouseX, 0, width, timeline.startTime, timeline.endTime);
}
*/



/*

Current Bugs:
- Timeline pos can move beyond the timeline

Current Issues:
- Timeline height is manually controlled in function

*/