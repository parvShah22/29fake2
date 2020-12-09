const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	polygonimg = loadImage("sprites/polygon.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.    
    Polygon1 = new Polygon(200,399)
    
    box1 = new Box(390,299)
    box2 = new Box(410,299)
    box3 = new Box(430,299)
    box4 = new Box(450,299)
    box5 = new Box(470,299)
    box6 = new Box(490,299)
    box7 = new Box(510,299)

    box8 = new Box(410,256)
    box9 = new Box(430,256)
    box10 = new Box(450,256)
    box11 = new Box(470,256)
    box12 = new Box(490,256)

    box13 = new Box(430,204)
    box14 = new Box(450,204)
    box15 = new Box(470,204)

    box16 = new Box(450,146)

    box17 = new Box(770,160)
    box18 = new Box(410,256)
    box19 = new Box(430,256)
    box20 = new Box(450,256)
    box21 = new Box(470,256)
    box22 = new Box(490,256)
    box23 = new Box(490,256)
    box24 = new Box(490,256)
    box25 = new Box(490,256)

    Ground1=new Ground(450,650,900,10)
    Ground2=new Ground(450,350,180,10)
    Ground3=new Ground(690,250,180,10)
    Engine.run(engine);
}
function draw() {
    rectMode(CENTER);
    background("black");
Polygon1.display();
fill("red");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("pink")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill("#35ED28")
    box13.display();
    box14.display();
    box15.display();
    fill("#28EDE6")
    box16.display();

    box17.display();

Ground1.display();
Ground2.display();
Ground3.display();

}
/*function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
    elastic.fly();
    
  }  
*/
