
var gameState = 0;
var playerCount;
var database;
var player;
var game;

var harry;
var ron;
var hermoine;

var harryImg;
var ronImg;
var hermoineImg;

var spriteBg;



function preload()
{
  bg= loadImage("pics/bg.jpeg");
  harryImg = loadImage("pics/harry.png");
  ronImg = loadImage("pics/ron.png");
  hermoineImg = loadImage("pics/hermoine.png");

}


function setup() {
  createCanvas(1300, 800);
  spriteBg = createSprite(600,600,1200,800);
  spriteBg.addImage(bg);
  spriteBg.scale = 2
  
  

  harry = createSprite(330,displayHeight-160);
  harry.addImage(harryImg)
  harry.scale=0.26
  ron = createSprite(730,displayHeight-120); 
  ron.addImage(ronImg)
  ron.scale=0.35
  hermoine = createSprite(1150,displayHeight-120);
  hermoine.addImage(hermoineImg)
  hermoine.scale=0.2




   
 
}

function draw() {
  spriteBg.velocityY = 3

  if (spriteBg.y<100)
  {
    spriteBg.y = 200;
  }
  background("white");

  if (keyDown("UP_ARROW"))
  {
    harry.y = harry.y -2
  }

  if (keyDown("DOWN_ARROW"))
  {
    harry.y = harry.y +2
  }

  if (keyDown("LEFT_ARROW"))
  {
    harry.x = harry.x-2
  }

  if (keyDown("RIGHT_ARROW"))
  {
    harry.x = harry.x+2
  }

drawSprites()
}

