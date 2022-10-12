function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  rectMode(CENTER)
  noFill()
  stroke(255)
  strokeWeight(2)
  for(var i =0;i<3 ; i++)
  {
    ellipse(25+(i*50),25,50)
    rect(25+(i*50),25,50)
    ellipse(50+(i*50),50,20)
 
}
}


