var ball
var ground
var position
var quadrado

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
var plane_options={
	isStatic: true
  }

 var ball_options = {
	restitution: 0.95,
	frictionAir:0.01
 }

 var rock_options = {
	restution:0.85
 };

 var ground_options={
	restitution: 0.80
 }

 var quadrado_options ={
	restitution: 1,
	frictionAir: 2
 }

 rock = Bodies.circle(300,20,10,rock_options);
 World.add(world,rock);

 wall = Bodies.rectangle(300,200,200,20,ground_options);
 World.add(world,wall);





	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  background(51);
  Engine.update(engine);
  //ellipse(ball.position.x,ball.position.y,20);
 ellipse(rock.position.x,20);
 //rect(ground.position.x.ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,200,10);
  
  drawSprites();
}



