
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var display;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restituition:0.3,
	friction:0,
	density:1.2
}

	Engine.run(engine);
  
}

//class ground
{
//	constructor(x, y, w, h)
{
	let options = {
		isStatic: true
	};

//this.body = Bodies.rectangle(x, y, h, w, options);
//this.w = w;
//this.h = h;
//World.add(world, this.body);
}

}

//show()
	 



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  
 // ground.display();
  //groundObj=new ground(width/2,670,width,20);
  //leftSide =new ground(1100,600,20,120);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce
	}
}



