var backgroundImg, bg;
var spaceshp1, space1, spaceship2, space2, spaceship3, space3, spaceship4, space4, meteorite;
var gameState="select";



function preload(){
  backgroundImg=loadImage('sprites/bg.png');
  spaceship1=loadImage('sprites/space1.png');
  spaceship2=loadImage('sprites/space2.png');
  spaceship3=loadImage('sprites/space3.png');
  spaceship4=loadImage('sprites/space4.png');
  meteorite=loadImage('sprites/meteor.png');
}



function setup() {
  createCanvas(800, 800);
   bg=createSprite(400, 400, 100, 1200);
  bg.addImage("background", backgroundImg);
  bg.y=bg.height/4;
  console.log(bg);
  bg.velocityY=0;

  space1=createSprite(200, 200, 10, 10);
  space1.addImage("spaceship1", spaceship1);
  space1.scale=0.3;

  space2=createSprite(500, 240, 10, 10);
  space2.addImage("spaceship2", spaceship2);
  space2.scale=0.2;

  space3=createSprite(200, 500, 10, 10);
  space3.addImage("spaceship3", spaceship3);
  space3.scale=0.1;

  space4=createSprite(500, 540, 10, 10);
  space4.addImage("spaceshp4", spaceship4);
  space4.scale=0.1;
}

function draw() {
  background(0); 
  
  if(bg.y>800){
    bg.y=bg.height/4;
  }

if(gameState==="select"){
 }
if(mousePressedOver(space1)){
  gameState="play";
}
if(mousePressedOver(space2)){
  gameState="play1";
}
if(mousePressedOver(space3)){
  gameState="play2";
}
if(mousePressedOver(space4)){
  gameState="play3";
}
if(gameState==="play"){
  bg.velocityY=4;
  space1.x=400;
  space1.y=600;
  space2.destroy();
  space3.destroy();
  space4.destroy();

}
if(gameState==="play1"){
  bg.velocityY=4;
  space2.x=400;
  space2.y=600;
  space1.destroy();
  space3.destroy();
  space4.destroy();

}
spawnMeteors();
if(gameState==="play2"){
  bg.velocityY=4;
  space3.x=400;
  space3.y=600;
  space2.destroy();
  space1.destroy();
  space4.destroy();

}
if(gameState==="play3"){
  bg.velocityY=4;
  space4.x=400;
  space4.y=600;
  space2.destroy();
  space3.destroy();
  space1.destroy();

}





  drawSprites();
}
function spawnMeteors(){
  if(World.frameCount%120===0 ){
    var meteor=createSprite(400, -20, 10, 10 );
    meteor.addImage("meteorite", meteorite);
    meteor.scale=0.3;
    meteor.velocity=4;
  }
}