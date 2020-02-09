var backgroundImg, bg;
var spaceshp1, space1, spaceship2, space2, spaceship3, space3, spaceship4, space4, meteorite, obstacle, coinImage;
var gameState="select";
var coin=[];
var coinsGroup=new Group();  

var coin1=[];

var coin2=[];



function preload(){
  backgroundImg=loadImage('sprites/bg.png');
  spaceship1=loadImage('sprites/space1.png');
  spaceship2=loadImage('sprites/space2.png');
  spaceship3=loadImage('sprites/space3.png');
  spaceship4=loadImage('sprites/space4.png');
  meteorite=loadImage('sprites/meteor.png');
  obstacle=loadImage('sprites/ufo.png');
  coinImage=loadImage('sprites/coin.png');
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
  spawnMeteors();
  spawnCoins();
}
if(gameState==="play1"){
  bg.velocityY=4;
  space2.x=400;
  space2.y=600;
  space1.destroy();
  space3.destroy();
  space4.destroy();
  spawnMeteors();
  spawnCoins();
  if(keyDown(LEFT_ARROW)){
    space2.x=space2.x-5;
  }
  
}
if(gameState==="play2"){
  bg.velocityY=4;
  space3.x=400;
  space3.y=600;
  space2.destroy();
  space1.destroy();
  space4.destroy();
  spawnMeteors();
  spawnCoins();
}
if(gameState==="play3"){
  bg.velocityY=4;
  space4.x=400;
  space4.y=600;
  space2.destroy();
  space3.destroy();
  space1.destroy();
  spawnMeteors();
  spawnCoins();
}





  drawSprites();
}
function spawnMeteors(){
  if(World.frameCount%80===0 ){
    var meteor=createSprite(random(20, 800), -20, 10, 10 );
    var ufo=createSprite(random(300, 700), -20, 10, 10);
    ufo.addImage("ufos", obstacle);
    ufo.scale=0.3;
    ufo.velocityY=15;
    meteor.addImage("meteorite", meteorite);
    meteor.scale=0.4;
    meteor.velocityY=10;

    meteor.lifetime=80;
    ufo.lifetime=65;
  }
  
}
function spawnCoins(){
  if(World.frameCount%100===0){
    for(var i=0;i<5;i++){
      coin[i]=createSprite(random(0, 200), random(-100, -10), 10, 10);
      coin[i].addImage("coins", coinImage);
      coin[i].scale=0.05;
      coin[i].velocityY=5;

    coinsGroup.add(coin[i]);
     
    }
  }
  
}