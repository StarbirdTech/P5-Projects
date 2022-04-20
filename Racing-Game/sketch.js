let playerx = 150
let playery = 350
let scene = -1

let playerr = 255
let playerg = 255
let playerb = 255 

let rx = -50
let ry = 50
let rs = 50

let gx = -50
let gy = 50
let gs = 50

let speed = 5
let score = 0
let menuVar = 0

let hitRadius = 45
let collision = false
let spawn = 2
let spawn2 = 2

let D
let Fs
let A

function setup() {
  createCanvas(300, 400);
  rectMode(CENTER)

playerx = 150
playery = 350
scene = -1

playerr = 255
playerg = 255
playerb = 255 

rx = -50
ry = 50
rs = 50

gx = -50
gy = 50
gs = 50

speed = 5
score = 0
menuVar = 0

hitRadius = 45
collision = false
spawn = 2
spawn2 = 2

}

function draw() {
  frameRate(60)

  if (scene == -1) {
    menu()
  }
  if (scene == 1) {
    game()
  }
}

function keyPressed() {
  if (keyCode == 83) {
   scene *= -1
  }

  if (keyCode == 40) {
    scene *= -1
   }

  if (keyCode == 68) {
    playerx += 75;
  }

  if (keyCode == 65) {
    playerx -= 75;
  }

  if (keyCode == 87) {
    setup()
  }

  if (keyCode == 38) {
    setup()
  }

  if (keyCode == 39) {
    playerx += 75;
  }

  if (keyCode == 37) {
    playerx -= 75;
  }
}

function menu() {
  background(200)
  fill(0)
  text('Score = ' + score, 15, 15)

  if(menuVar == 0) {
    text('Press Down Arrow To Play', 80, 200)
  }

  if (menuVar == 1) {
    text('Press Up Arrow To Restart', 80, 200)
    text('Press Down Arrow To Continue', 69, 220)
  }

  if (menuVar == 2) {
    text('You Were Hit!', 110, 200)
    text('Press Up Arrow To Restart', 80, 220)
  }

}

function game() {
  background(200)

  fill(100, 100, 255)
  rect(225, 200, 100, 400)
  fill(100, 100, 255)
  rect(75 , 200, 100, 400)
  fill(0, 0, 255)
  rect(150, 200, 75, 400)

  fill(0)
  rect( 0 , 200, 75, 400)
  rect(300, 200, 75, 400)

  menuVar = 1
  fill(255)
  text('Score = ' + score, 15, 15)
  text('Down Arrow To Pause', 170, 15 )
  //text('Debug = ' + , 70, 25)

  fill(0, 255, 0)
  rect(playerx, playery, 60)


  if (playerx < 75) {
    playerx = 75;
  }
  if (playerx > 225) {
    playerx = 225;
  }

  fill(255, 0, 0)
  circle(rx, ry, rs)
  circle(gx, gy, gs)
  if (score < 30) {
    gx = -100
  } else{
    if (spawn2 == 1) {
      gx = 75
    }
  
    if (spawn2 == 2) {
      gx = 150
    }
  
    if (spawn2 == 3) {
      gx = 225
    }
  }

  if (ry < 425) {
    ry += speed;
  } else{
    ry = -25
    spawn = int(random(1,4))
    speed += 0.2
    score += 1
  }

  if (gy < 425) {
    gy += speed;
  } else{
    gy = -25
    spawn2 = int(random(1,4))
  }

  if (spawn == 1) {
    rx = 75
  }

  if (spawn == 2) {
    rx = 150
  }

  if (spawn == 3) {
    rx = 225
  }

  if (abs(playerx - rx) < hitRadius && abs(playery - ry) < hitRadius) {
    collision = true
  }

  if (abs(playerx - gx) < hitRadius && abs(playery - gy) < hitRadius) {
    collision = true
  }

  if (collision == true) {
    menuVar = 2
    scene *= -1
    menu()
  }

  if (score == 30) {
    speed = 6
  }
}

function playSound() {
  if (spawn == 1) {
    playSound(D)
  }

  if (spawn == 2) {
    playSound(Fs)
  }

  if (spawn == 3) {
    playSound(A)
  }

  if (spawn2 == 1) {
    playSound(D)
  }

  if (spawn2 == 2) {
    playSound(Fs)
  }

  if (spawn2 == 3) {
    playSound(A)
  }
}

function mouseClicked() {

  if (mouseX > playerx && playery > 40) {
    playerx += 75
  }

  if (mouseX < playerx && playery > 40) {
    playerx -= 75
  }

  if (mouseY < 40 && mouseX > 150) {
    scene *= -1
  }

  if (mouseY < 40 && mouseX < 150) {
    setup()
  }

}