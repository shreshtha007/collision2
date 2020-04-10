function bounceOff(){
    if (movingRect.x-fixedRect.x<movingRect/2+fixedRect/2) {
      movingRect.velocityX=-(movingRect.velocityX);
      fixedRect.velocityX=-(fixedRect.velocityX);
    }
  }