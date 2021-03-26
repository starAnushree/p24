
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var hammer
var rubber
var stone


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plane=new Plane(600,height,1200,20)
hammer=new Hammer(10,100)
rubber=new Rubber(900,450)
stone=new Stone (700,.320)
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  plane.display();
  hammer.display();
  rubber.display();
  stone.display();
  drawSprites();
 
}



