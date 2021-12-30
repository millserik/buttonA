function setup() {
  createCanvas(480, 272);
  angle1 = 0;
  g = 0;
  a = 1;
}

function draw() {
  background(220);
  

  // create buttons
  push()
  fill(10)
  noStroke()
  //up
  ellipse(120,60,40)
  //down
  ellipse(120,130,40)
  //left
  ellipse(80,95,40)
  //right
  ellipse(160,95,40)
  
  //x
  ellipse(360,60,40)
  //b
  ellipse(360,130,40)
  //y
  ellipse(320,95,40)
  //a
  ellipse(400,95,40)
  pop()
  
    // create buttons
  push()
  //fill(191, 34, 34)
  //stroke(191, 34, 34)
  fill(220, 0, 0)
  stroke(220, 0, 0)
  strokeWeight(1)
  
  //up
  //ellipse(120,60,40)
  triangle(112,65-a,128,65-a,120,52-a)
  
  //down
  //ellipse(120,130,40)
  triangle(112,125+a,128,125+a,120,138+a)
  
  //left
  //ellipse(80,95,40)
  triangle(85-a,87,85-a,103,72-a,95)
  
  //right
  //ellipse(160,95,40)
  triangle(155+a,87,155+a,103,168+a,95)
  
  
  textAlign(CENTER,CENTER)
  textSize(22)
  //x
  //ellipse(360,60,40)
  text('X',360,60)
  
  //b
  //ellipse(360,130,40)
  text('B',360,130)
  
  
  //y
  //ellipse(320,95,40)
  text('Y',320,95)
  
  
  //a
  //ellipse(400,95,40)
  text('A',400,95)
  
  
  pop()
  
  
  //create axle model
    push();
    rectMode(CENTER);
    fill(125);
    stroke(20);
    strokeWeight(3);
    translate(240,200);
    rotate(angle1);
    rect(0,0,50,50,10);
    pop();
  
  if (g == 1){
    angle1 = angle1 + 0.12;
  } else {
    angle1 = angle1;    
  }
    
}

function mousePressed(){
  if(dist(mouseX,mouseY,400,95)<20){
    g = 1;
  }
  
  
}

function mouseReleased(){
  g = 0;
}