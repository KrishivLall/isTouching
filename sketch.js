var fixedRect, movingRect;
var rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(100,100,50,50);
  rect3.shapeColor = "blue";
  rect3.debug = true;
}

function draw() {
  background(0,0,0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if ( isTouching(movingRect, rect3)){
  movingRect.shapeColor = "yellow";
  rect3.shapeColor = "yellow";
  }

  else{movingRect.shapeColor = "green";
       rect3.shapeColor = "green";
      }
  

  drawSprites();
}

