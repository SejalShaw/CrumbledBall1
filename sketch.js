
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  trash= new Paper(600,400)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 trash.display();
}


