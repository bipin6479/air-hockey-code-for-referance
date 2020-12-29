var striker = createSprite(200,200,15,15);
var compMallet = createSprite(200,40,100,10);
var playMallet = createSprite(200,360,100,10);
var Goal1 = createSprite(200,1,200,20);
var Goal2 = createSprite(200,399,200,20);
var boundary = createSprite(396,332,5,133);
var boundary2 = createSprite(396,199,5,133);
var boundary3 = createSprite(396,65,5,133);
var boundary4 = createSprite(3,332,5,133);
var boundary5 = createSprite(3,199,5,133);
var boundary6 = createSprite(3,65,5,133);
var boundary7 = createSprite(0,398,200,5);
var boundary8 = createSprite(350,398,100,5);
var boundary9 = createSprite(0,2,200,5);
var boundary0 = createSprite(350,2,100,5);



var gameState = "serve";

var cs = 0;
var ps = 0;

striker.shapeColor = "yelow";
compMallet.shapeColor = "blue";
playMallet.shapeColor = "red";
Goal1.shapeColor = "yellow";
Goal2.shapeColor = "yellow";
boundary.shapeColor = "blue";
boundary2.shapeColor = "white";
boundary3.shapeColor = "red";
boundary4.shapeColor = "red";
boundary5.shapeColor = "white";
boundary6.shapeColor = "blue";
boundary7.shapeColor = "red";
boundary8.shapeColor = "blue";
boundary9.shapeColor = "blue";
boundary0.shapeColor = "red";




function draw()
{
  background("black");
  
  
  fill(" Blue ");
  textSize(20);
  text(ps, 20 , 150);
  
  fill("white");
  textSize(20);
  text (cs, 20, 250);
  
  
  for (var x = 0; x < 400; x=x+20)
  {
    stroke("white");
    
   line(x, 200, x+10, 200) ;
  }
  
  
  
 
  
  if (gameState === "serve") 
  {
    fill("white");
    textSize(15);
    text("Press Space to Serve",130,180);
  }
  
  playMallet.x = World.mouseX;
  
  compMallet.x = striker.x;
  

    
  
 if (keyDown("space") && gameState === "serve")
 {
    serve();
    gameState = "play";
  }
  
  
  if (striker.isTouching(Goal1) || striker.isTouching(Goal2))
  {
    
    if (striker.isTouching(Goal1)){
      cs = cs+1;
      
      reset();
      gameState = "serve";
    }
    
    if (striker.isTouching(Goal2)){
      ps = ps+1;
      
      reset();
      gameState = "serve";
    }
 
  }
  
  if (cs === 7 || ps === 7)
  {
    gameState = "over";
    
    fill("red");
    textSize(20);
    text("Game Over", 140,180);
    
    fill("white");
    textSize(15);
    text("press 'r' to reset", 140, 230);
    
  }
  
  if (keyDown("r") && gameState === "over"){
  
    gameState = "serve";
    
    cs = 0;
    ps = 0;
  }
  
  createEdgeSprites();
  
  striker.bounceOff(edges);
  
  striker.bounceOff(compMallet);
  striker.bounceOff(playMallet);
  striker.bounceOff(boundary);
  striker.bounceOff(boundary2);
  striker.bounceOff(boundary3);
  striker.bounceOff(boundary5);
  striker.bounceOff(boundary6);
  striker.bounceOff(boundary7);
  striker.bounceOff(boundary8);
  striker.bounceOff(boundary9);
  striker.bounceOff(boundary0);
  

  
  
  
  
  
  drawSprites();
  
}


function serve()
{
  striker.velocityX = 7;
  striker.velocityY = 7;
}

function reset()
{
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}

