var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 200, 50, 60);
 fixedRect.shapeColor="purple";
 movingRect=createSprite(600,200,80,30);
 movingRect.shapeColor="green";
 movingRect.velocityX=-5;
 fixedRect.velocityX=5;
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  bounceOff();

  
  drawSprites();

}
function bounceOff(){
  if (movingRect.x-fixedRect.x<movingRect/2+fixedRect/2) {
    movingRect.velocityX=-(movingRect.velocityX);
    fixedRect.velocityX=-(fixedRect.velocityX);
  }
}