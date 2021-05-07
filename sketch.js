const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,600,1200,20);
   box1 = new Box(900,300,70,70);
   box2 = new Box(900,300,70,70);
   box3 = new Box(900,300,70,70);
   box4 = new Box(900,300,70,70);
   box5 = new Box(900,300,70,70);
   box6 = new Box(900,300,70,70);
   
   ball1 = new Ball(200,200,80,80);

   rope1 = new Rope(ball1.body,{x:600,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
   ground1.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()

   ball1.display();

   rope1.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x : mouseX , y: mouseY}) 
}