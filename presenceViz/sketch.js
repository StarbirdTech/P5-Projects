let attd
let circles = []

let startX = 80

function preload() {
  attd = loadJSON("attendance.json")
}

function setup() {
  createCanvas(400,400)
  noStroke()
  /*
  let studio = 0 // 0 - 3
  let day = 0 // 0 - 4
  let arc = 0 // 0 - 4
  let x = 60*(day+1)
  */

  for (let studio = 0; studio < attd['studio'].length; studio++) {
    curStudio = attd['studio'][studio]
    //console.log(curStudio)
    for (let day = 0; day < curStudio['day'].length; day++) {
      curDay = curStudio['day'][day]
      //console.log(curDay)
      for(let arc = 0; arc <  curDay['attendance'].length; arc++) {
        curAttd = curDay['attendance'][arc]
        //console.log(curAttd['time'])
        if(curDay['attendance'].length > 5)
          print(curDay)

        //circle(40 + studio * 40,day * 40, radiusIWant)
        circles.push(new Arc(studio, day,arc,curAttd['time'],curDay['attendance'].length))
      }
    }
  }
}
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

function draw() {
  noLoop()
  translate(117,93)

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw()
  }
}

function mousePressed () {
  save()
}

class Arc {
  constructor(x,y,arc,time,arcNumber) {
    this.r = 50;
    this.x = x * 55;
    this.y = y * 55;
    this.time = time;
    this.arc = TWO_PI/arcNumber;
    this.start = arc;
    this.end = arc+1;
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