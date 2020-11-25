var player , playerImg;
var backgroundS , backgroundImg;
var magicBall , MGImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	playerImg = loadImage("fairy.png");
	backgroundImg = loadImage("bg.jpg");
	MGImg = loadImage("magicBall.gif");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	backgroundS = createSprite(400,350,800,700);
	backgroundS.addImage("bg",backgroundImg);

	player = createSprite(400,580,30,30);
	player.addImage("pl",playerImg);
	player.scale = 0.45;

	magicBallGroup = new Group(magicBall);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyIsDown(LEFT_ARROW)){
	  player.velocityX = -4;
  }

  if(keyIsDown(RIGHT_ARROW)){
	  player.velocityX = 4;
  }

  if(keyDown("space")){
    magicBall = createSprite(player.x , player.y ,10,5);
    magicBall.velocityX = 0;
    magicBall.velocityY = -4;
    magicBall.addImage("bl",MGImg);
    magicBall.scale = 0.05;
    magicBallGroup.add(magicBall);
  }
  
  drawSprites();
 
}



