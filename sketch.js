  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var collideBar;


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  //collideBar = createSprite(300,590,600,10);

  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  //ghost.collide("collideBar");
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("left")){
      ghost.x = ghost.x-5;
    }
    if(keyDown("right")){
      ghost.x = ghost.x+5;
    }
    if(keyDown("space")){
     ghost.velocityY = -10;      
    }

   

  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
      if(tower.y>400){
        tower.y = 300;
      }

      spawnDoors();

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity

      if(climbersGroup.isTouching("ghost")){
        ghost.velocityY = 0;
      } 
      
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    climbersGroup.add(climber);
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    
     

    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block


    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
  }
}

