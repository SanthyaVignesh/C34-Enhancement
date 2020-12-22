const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box17,box18,box19,box20;
var ground,ball,rope,score=0;
var engine,world,bgimg;

function preload(){
  bgimg = loadImage("darkbg.jpeg")
}

function setup() {
  createCanvas(1500,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,570,1000,10);

  box1 =  new Blocks(800,550);
  box2 = new Blocks(800,480);
  box3 = new Blocks(800,400);
  box4 = new Blocks(800,330);
  box5 = new Blocks(800,280);
  box6 = new Blocks(800,200);
  box7 = new Blocks(800,130);
  box8 = new Blocks(800,80);
  box9 =  new Blocks(730,550);
  box10 = new Blocks(730,500);
  box11 = new Blocks(730,450);
  box12 = new Blocks(730,400);
  box13 = new Blocks(730,350);
  box14 = new Blocks(660,550);
  box15 = new Blocks(660,500);
  box16 = new Blocks(660,450);
  box17 = new Blocks(660,400);
  box18 = new Blocks(660,350);
  box19 = new Blocks(660,300);
  box20 = new Blocks(660,250);

  ball = new Ball(500,80);

  rope = new Rope(ball.body,{x: 500,y :0});
  
}

function draw() {
  background(bgimg);  

  Engine.update(engine);
  push();
  textSize(40);
  fill("Magenta");
  text("Score  : " +score,950,100);
  pop();
  
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
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();
  rope.display();

  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX ,y :mouseY});
}