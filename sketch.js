var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,grnd
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	box1 = Bodies.rectangle(width/2, height-40, 160, 10);

	box2 = Bodies.rectangle(width/2+80, height-65, 10, 60);
	
	box3 = Bodies.rectangle(width/2-80, height-65, 10, 60);
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);


	grnd=new ground(400,680,800,40)


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  rectMode(CENTER);
rect(this.box1.position.x,this.box1.position.y,160,10);
rect(this.box2.position.x,this.box2.position.y,10,60);
rect(this.box3.position.x,this.box3.position.y,10,60);

grnd.display()

drawSprites()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageBody.restitution = 0.5
  }
}


 
 
