const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,310,200,150);
    box2 = new Box(60,310,85,200);
    box3 = new Box(340,310,85,200);
    box4 = new Box(21,180,25,15);
    box5 = new Box(56,180,25,15);
    box6 = new Box(92,180,25,15);
    box7 = new Box(308,180,25,15);
    box8 = new Box(344,180,25,15);
    box9 = new Box(379,180,25,15);
    box10 = new Box(200,160,120,150);
    box11 = new Box(147,80,25,15);
    box12 = new Box(182,80,25,15);
    box13 = new Box(218,80,25,15);
    box14 = new Box(252,80,25,15);

    ground = new Ground(200,390,400,20);
}

function draw(){
    background(255);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    ground.display();
}