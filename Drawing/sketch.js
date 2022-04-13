let attd
let circles = []

let startX = 80

function preload() {
  //attd = loadJSON("attendance.json")
}

function setup() {
  createCanvas(400,400)
  noStroke()

  circles.push(new Arc(startX*1,'Dissmissed',0))
  circles.push(new Arc(startX*1,'Absent',1))
  circles.push(new Arc(startX*1,'Present',2))
  circles.push(new Arc(startX*1,'s',3))
  circles.push(new Arc(startX*1,'Late',4))
  circles.push(new Arc(startX*2,'Present',0))
  circles.push(new Arc(startX*2,'Present',1))
  circles.push(new Arc(startX*2,'Present',2))
  circles.push(new Arc(startX*2,'Present',3))
  circles.push(new Arc(startX*2,'Present',4))
  circles.push(new Arc(startX*3,'Present',0))
  circles.push(new Arc(startX*3,'Present',1))
  circles.push(new Arc(startX*3,'Present',2))
  circles.push(new Arc(startX*3,'Present',3))
  circles.push(new Arc(startX*3,'Present',4))
  circles.push(new Arc(startX*4,'Present',0))
  circles.push(new Arc(startX*4,'Present',1))
  circles.push(new Arc(startX*4,'Present',2))
  circles.push(new Arc(startX*4,'Present',3))
  circles.push(new Arc(startX*4,'Present',4))

/*
  for (let day = 0; day < attd.attendance.length; day++) {
    for (let studio = 0; studio < attd.attendance[day].length; studio++) {
      for (let student = 0; student < attd.attendance[0].studios[studio].students.length; student++) {
        let x = width/2 + (studio-2)*120
        let y = height/2
        let r = 75
        circles.push(new Circle(x,y,r,attd.attendance[day].studios[studio].students[student].time))
        console.log(day,studio,student)
      }
    }
  }
*/
}

function draw() {
  background(50)

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw()
  }
}

class Arc {
  constructor(x,time,i) {
    this.x = x;
    this.y = width/2;
    this.r = 50;
    this.time = time;
    this.arc = TWO_PI/5;
    this.start = i;
    this.end = i+1;
  }

  draw() {
    if (this.time == 'Present') {
      fill(0,255,0)
    }
    else if (this.time == 'Late') {
      fill(255,0,0)
    }
    else if (this.time == 'Absent') {
      noFill()
    }
    else if (this.time == 'Dissmissed') {
      fill(0,0,255)
    }
    else {
      fill(255)
    }
    arc(this.x,this.y,this.r,this.r,this.arc*this.start,this.arc*this.end+.05)
  }
}