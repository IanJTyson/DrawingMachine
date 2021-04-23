let array = []

function setup() {

  createCanvas(1000, 600);
  background(20, 100,150);
  frameRate(10);

  strokeWeight(5);

rectMode(CENTER);

spawnDots();
}

function spawnDots(){
  fill(255);
  strokeWeight(2);
  ellipse (width/2, 40, 20, 20);
}

function keyTyped(){
  if (key === 'o'){
    //save this image
    saveCanvas('ConnectTheDots', 'png');
  }
  return false;
}

function draw() {
  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);

}



}
