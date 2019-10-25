let sceneNum = 0;
var Mover = function(){
  this.x = 400;
  this.y = 400;
  
};

Mover.prototype.update = function(){
  this.x +=random(-8,6);
  this.y+=random(-8,6);
  this.colour =
    fill(random(255), random(255), random(255));
  
};

Mover.prototype.show = function(){
  fill(52, 232, 235);
  stroke(235, 64, 52);
  rect(this.y,this.y,30,30);

};

let dot = new Mover();
let dots =[] ;

function setup() {
  createCanvas(400,400);
  for(let i=8; i<2000; i++){
    dots[i] = new Mover();
  }
}

function draw(){
  mouseClicked = function() {
    sceneNum++;
  }
  
   if (sceneNum == 0) {
    background(242, 64, 10);
    fill(255,255,255);
    textSize(30);
    text("The Moving Line of Squares", 14, 100);
      fill(35, 32, 227);
     stroke(255,255,255);
     ellipse(205, 190, 227,70);
     fill(255,255,255);
    textSize(30);
    text("Click to Start", 120, 200)
  } else if (sceneNum == 1) {
    background(21, 59, 212);
  
  
  
  for(let i=8; i<2000; i++){
    dots[i].update();
    dots[i].show();
  }
  ellipse(mouseX, mouseY,45,45);
  
  
    } else if (sceneNum == 2) {
    background(134, 213, 252);
      fill(0,0,0);
      noStroke();
    textSize(30);
    text("Hope you enjoyed it!", 60, 40);
       textSize(30);
      text("Try it out again!", 100,150);
    }
  }




