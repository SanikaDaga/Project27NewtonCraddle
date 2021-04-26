
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(width/2,height/6,width/4,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/10+300;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-50});
	}

	else if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-50});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-55,y:-50});
	}

	else if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-50});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-55,y:-50});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-55,y:-50});
	}

	else if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-50});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-55,y:-50});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-55,y:-50});
		Matter.Body.applyForce(bobObject4.body,bobObject3.body.position,{x:-55,y:-50});
	}
}

