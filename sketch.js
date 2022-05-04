var
apple=235;
tree=235;
//The setup function only happens once
function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(116,201,183); //an RGB color for the canvas' background
  //circle
  stroke(91, 193, 229) // an RGB color for the circle's border
  strokeWeight(6);
  fill(242,apple,89); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY+20,70,70); // center of canvas, 20px dia
  fill(84,168,159);
  stroke(91, 193, 229);
  strokeWeight(5);
  rect(0,200,499,100);
  stroke(230,244,61);
  strokeWeight(2);
  fill(242,tree,89);
  triangle(0,300,90,200,190,300);
  stroke(230,244,61);
  fill(242,tree,89);
  triangle(95,200,195,300,290,200);
  stroke(230,244,61);
  fill(242,tree,89);
  triangle(200,300,295,200,395,300);
  stroke(230,244,61);
  fill(242,tree,89);
  triangle(300,200,400,300,500,200);
  fill(255,255,255);
  ellipse(random(width),random(height),10,10);
}

function mousePressed() {
    if(apple<=135){
    apple=235;
  }else{
    apple=apple-10;
  }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    tree = 235;
  }else if (keyCode===RIGHT_ARROW){
    tree = tree-10;  
    }
  }


