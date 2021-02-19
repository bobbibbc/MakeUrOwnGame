

var ground, platform, edge1, edge2, finalEdge;

var groundIMG, healthbarIMG1, enemyIMG1, enemyIMG2, enemyIMG3, playerIMG, chipIMG;
var healthbarIMG2,healthbarIMG3,healthbarIMG4,healthbarIMG5,healthbarIMG6;

var enemy2, enemy3, enemy4, enemy5;

var player, coin, coin1;

var gameState, score, chip;

score=0;

function preload(){
  groundIMG=loadImage('Images/GreyTexture.jpeg');
  healthbarIMG1=loadImage('Images/Healthbar1.jpg');
  healthbarIMG2=loadImage('Images/Healthbar2.jpg');
  healthbarIMG3=loadImage('Images/Healthbar3.jpg');
  healthbarIMG4=loadImage('Images/Healthbar4.jpg');
  healthbarIMG5=loadImage('Images/Healthbar5.jpg');
  healthbarIMG6=loadImage('Images/Healthbar6.jpg');
  coin=loadAnimation('Images/Coin1.jpg','Images/Coin2.jpg','Images/Coin3.jpg','Images/Coin4.jpg');
  enemyIMG1=loadImage('Images/Robot1-1.jpg');
  enemyIMG2=loadImage('Images/Robot2-1.jpg');
  enemyIMG3=loadImage('Images/Robot3-1.png');
  chipIMG=loadImage('Images/Microchip.png')
  
}


function setup() {
  createCanvas(3000,700);

  gameState="UnpressedLvl1";

 // engine = Engine.create();
 // world = engine.world;
  ground= createSprite(1500,2175,3000,200);

  wall=createSprite(1600,350,50,700);
  wall2=createSprite(650,212.5,50,500);

  ledge=createSprite(650,650,50,100);
  ledge2=createSprite(1600,650,50,100);

  finalEdge=createSprite(3000,350,50,700);
  edge1= createSprite(0,350,50,700);
  edge2= createSprite(1500,0,3000,50);

  platform=createSprite(1000,450,700,25);
  platform2=createSprite(1525,600,100,25);

  ground.addImage("Grey",groundIMG)
  ground.scale=10;

  player= createSprite(375,370,50,70);

  coin1=createSprite(850,350,50,50);
  coin1.addAnimation("coins",coin);
  coin2=createSprite(850,600,50,50);
  coin2.addAnimation("coins",coin);
  coin3=createSprite(400,500,50,50);
  coin3.addAnimation("coins",coin);
  coin4=createSprite(950,350,50,50);
  coin4.addAnimation("coins",coin);

  //chip.addImage("chipImage",chipIMG);

  healthbar=createSprite(375,370,50,70);
  healthbar.addImage(healthbarIMG6);
  healthbar.scale=0.2;

  enemy2=createSprite(800,250,50,70);
  enemy3=createSprite(950,250,70,100);
  enemy4=createSprite(600,250,70,100);
  enemy5=createSprite(1400,400,110,140);

  enemy2.shapeColor="red";
  enemy3.shapeColor="green";
  enemy4.shapeColor="yellow";
  enemy5.shapeColor="purple";

  coin1.shapeColor="yellow";

  player.shapeColor="red";

  door = createSprite(1600,600,50,50);
  door.shapeColor="black";

  button = createSprite(750,425,100,25);
  button.shapeColor="black";
  
  var block=createSprite(400, 200, 50, 50);

  enemy2.velocityX =(5);
  enemy3.velocityX =(-5);
  enemy4.velocityX =(5);
  enemy5.velocityX =(-5);
  
}

function draw() {
  background(50,50,50);  
  fill(255,255,255)
  textSize(20);
  text("Coins: "+score,player.x+25,player.y)
  healthbar.x=player.x;
  healthbar.y=player.y-50;

  if(keyIsDown(87)){
    player.y=player.y-8;
  }
  if(keyIsDown(68)){
    player.x=player.x+15;
  }
  if(keyIsDown(65))
    player.x=player.x-15;
  }

  if(coin1.isTouching(player)){
    coin1.destroy();
    score=score+1;
  }
  if(coin2.isTouching(player)){
    coin2.destroy();
    score=score+1;
  }
  if(coin3.isTouching(player)){
    coin3.destroy();
    score=score+1;
  }
  if(coin4.isTouching(player)){
    coin4.destroy();
    score=score+1;
  }

  player.velocityY = player.velocityY + 0.3

  enemy2.velocityY = enemy2.velocityY + 0.2
  enemy3.velocityY = enemy3.velocityY + 0.2
  enemy4.velocityY = enemy4.velocityY + 0.2
  enemy5.velocityY = enemy5.velocityY + 0.2

  player.collide(ground);
  player.collide(platform);
  player.collide(platform2);
  player.bounceOff(wall);
  player.bounceOff(wall2);;
  player.collide(ledge);
  player.bounceOff(enemy2);
  player.bounceOff(enemy3);
  player.bounceOff(enemy4);
  player.bounceOff(enemy5);
  player.collide(edge1);
  player.collide(edge2);

  enemy2.collide(ground);
  enemy2.collide(platform);
  enemy2.bounceOff(platform2);
  enemy2.bounceOff(wall);
  enemy2.bounceOff(wall2);;
  enemy2.bounceOff(ledge);
  enemy2.bounceOff(ledge2);
  enemy2.bounceOff(edge1);
  enemy2.bounceOff(edge2);

  enemy3.collide(ground);
  enemy3.collide(platform);
  enemy3.bounceOff(platform2);
  enemy3.bounceOff(wall);
  enemy3.bounceOff(wall2);;
  enemy3.bounceOff(ledge);
  enemy3.bounceOff(ledge2);
  enemy3.bounceOff(edge1);
  enemy3.bounceOff(edge2);

  enemy4.collide(ground);
  enemy4.collide(platform);
  enemy4.bounceOff(platform2);
  enemy4.bounceOff(wall);
  enemy4.bounceOff(wall2);;
  enemy4.bounceOff(ledge);
  enemy4.bounceOff(ledge2);
  enemy4.bounceOff(edge1);
  enemy4.bounceOff(edge2);

  enemy5.collide(ground);
  enemy5.collide(platform);
  enemy5.bounceOff(platform2);
  enemy5.bounceOff(wall);
  enemy5.bounceOff(wall2);;
  enemy5.bounceOff(ledge);
  enemy5.bounceOff(ledge2);
  enemy5.bounceOff(edge1);
  enemy5.bounceOff(edge2);

  enemy2.bounceOff(enemy3);
  enemy2.bounceOff(enemy4);
  enemy2.bounceOff(enemy5);

  enemy3.bounceOff(enemy4);
  enemy3.bounceOff(enemy5);

  enemy4.bounceOff(enemy5);

  if(player.isTouching(button)){
    gameState="UnpressedLvl2";
    button.shapeColor="green";
    player.x=1700;
    player.y=600
    enemy6=createSprite(1800,250,110,140);
    enemy6.shapeColor="blue";
    enemy7=createSprite(1800,250,110,140);
    enemy7.shapeColor="blue";
  }

  if(gameState==="UnpressedLvl2"){
    button.shapeColor="green";

    enemy6.collide(ground);
    enemy6.collide(platform);
    enemy6.collide(platform2);
    player.bounceOff(enemy6);
    enemy6.bounceOff(wall);
    enemy6.bounceOff(wall2);
    enemy6.bounceOff(ledge);
    enemy6.bounceOff(ledge2);
    enemy6.bounceOff(finalEdge);
    enemy6.velocityX =(5);

    enemy6.velocityY = enemy6.velocityY + 0.2

    enemy7.collide(ground);
    enemy7.collide(enemy6);
    enemy7.collide(platform);
    enemy7.collide(platform2);
    player.bounceOff(enemy7);
    enemy7.bounceOff(wall);
    enemy7.bounceOff(wall2);;
    enemy7.bounceOff(ledge);
    enemy7.bounceOff(ledge2);
    enemy7.bounceOff(finalEdge);
    enemy7.velocityX =(5);

    enemy7.velocityY = enemy7.velocityY + 0.2
  }

  drawSprites();
  
};