var bg_garden, bg_bath, bg_kitchen, bg_livingroom, bg_room;
var girlImg, girl;
var sleep_girl, sleep_girl;
var girl_walking;
var water, waterImg, waterSound;
var banco, bancoImg;
var gameState = "start"
var basuraImg;

function preload(){
  bg_garden = loadImage("assets/background_garden.webp");
  bg_bath = loadImage("assets/background_bathroom.jpg");
  bg_livingroom = loadImage("assets/background_room.jpg");
  bg_kitchen= loadImage("assets/background_kitchen.jpg");
  bg_room = loadImage("assets/background_room2.jpg")

  girlImg = loadAnimation("assets/pinky_girl_1.png");
  girl_walking = loadAnimation( "assets/girl_run1.png",
                                "assets/girl_run2.png", "assets/girl_run3.png", 
                                "assets/girl_run4.png", "assets/girl_run5.png",
                                "assets/girl_run6.png");
  sleep_girl = loadAnimation("assets/pinky_girl_sleep.png");
  water_girl = loadAnimation("assets/girl_run4.png", "assets/girl_run3.png")
  waterImg = loadImage("assets/agua.png");
  waterSound = loadSound("assets/water.mp4");
  bancoImg = loadImage("assets/banco.png");
  basuraImg = loadImage("assets/trash.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  girl = createSprite( width-1300, height-360, 50,100);
  girl.addAnimation("sleeping", sleep_girl);
  girl.addAnimation("girl", girlImg);
  girl.addAnimation("walking", girl_walking);
  girl.addAnimation("water", water_girl);
  girl.scale=2

}

function draw() {
  if(gameState === "start"){
    background(bg_room);
    textStyle(BOLD);
    textSize(28);
    fill("black")
    text("Presiona espacio para despertar",730,400);
    
    if (keyDown("space")){
      girl.changeAnimation("walking",girl_walking);
      girl.x= width-1550
      girl.y = height-250
      girl.velocityX=girl.velocityX+5
    }
  }
  if(girl.x > 1550){
    gameState = "room"
    console.log(gameState);
  }
  if(gameState === "room"){
    background(bg_bath)
    girl.changeAnimation("girl", girlImg)
    girl.velocityX= 0;


    banco=createSprite(width-680,height-320,50,50);
    banco.addImage(bancoImg)
    banco.scale= 0.7

    //trash = createSprite(width-125,height-150,50,50)
    //trash.addImage(basuraImg);
    //trash.scale=0.5
    //trash.setCollider("rectangle",10,10,40,20);
    //trash.debug=true;
    textStyle(BOLD);
    textSize(30);
    fill("black")
    text("Muevete con las flechas izquierda, derecha abajo y arriba", 700,100);
    text("Sube al banco y presiona la tecla M para lavarte las manos", 700,160);
 
    
    if(keyDown("m")){
    girl.changeAnimation("water", water_girl)
    water = createSprite( width-580, height-500, 50,100)
    water.addImage(waterImg)
    water.scale=0.3;
    waterSound.play();
    }
    if(keyDown(LEFT_ARROW)){
      girl.x=girl.x-8;
    }
    if(keyDown(RIGHT_ARROW)){
      girl.x=girl.x+8;
    }
    if(keyDown(UP_ARROW)){
      girl.y=girl.y-8;
    }
    if(keyDown(DOWN_ARROW)){
      girl.y=girl.y+8;
    }   
    if(girl.x > 1750){
      gameState="kitchen"
     
    }
  }

  if(gameState==="kitchen"){
   
      background(bg_kitchen)
      
      girl.changeAnimation("girl", girlImg)
      girl.velocityX= 0;
      girl.x= width-700;
      girl.y= height -600;
      
      if(keyDown(LEFT_ARROW)){
        girl.x=girl.x-8;
      }
      if(keyDown(RIGHT_ARROW)){
        girl.x=girl.x+8;
      }
      if(keyDown(UP_ARROW)){
        girl.y=girl.y-8;
      }
      if(keyDown(DOWN_ARROW)){
        girl.y=girl.y+8;
      }  
   
  }


  drawSprites();

}

