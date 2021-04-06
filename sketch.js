const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,20,600,20);

bob1 = new Bob(100,100,25);
bob2 = new Bob(50,100,25);
bob3 = new Bob(0,100,25);
bob4 = new Bob(-50,100,25);
bob5 = new Bob(-100,100,25);

rope1 = new Rope(bob1.body,roof.body,(bob5.body.position.x * (-1) +200),0)
rope2 = new Rope(bob2.body,roof.body,(bob5.body.position.x * (-1) +150),0)
rope3 = new Rope(bob3.body,roof.body,(bob5.body.position.x * (-1) +100),0)
rope4 = new Rope(bob4.body,roof.body,(bob5.body.position.x * (-1) +50),0)
rope5 = new Rope(bob5.body,roof.body,(bob5.body.position.x * (-1) +0),0)



	Engine.run(engine);
  
}

function keyPressed(){
if(keyCode===32){
  Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-200,y:0})

}

}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  
  bob5.display();
  
  roof.display();
  rope1.display();
 rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

