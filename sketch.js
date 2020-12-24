const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
//var box11,box12,box13,box14,box15,box17,box18,box19,box20;
var boxes1 = [],boxes2=[],boxes3=[];
var ground,ball,rope,score=0;
var engine,world,bgimg;

function preload(){
  bgimg = loadImage("darkbg.jpeg")
}

function setup() {
  createCanvas(1500,600);

  engine = Engine. create();
  world = engine.world;

  ground = new Ground(500,570,1000,10);

  for(var i=0; i<=7; i++){
    boxes1[i] = new Blocks(700,100+i*70,70,70);
  }

  for(var i=0; i<=7; i++){
    boxes2[i] = new Blocks(800,100+i*70,70,70);
  }

  for(var i=0; i<=7; i++){
    boxes3[i] = new Blocks(900,100+i*70,70,70);
  }

  ball = new Ball(570,80);

  rope = new Rope(ball.body,{x: 570,y :0});
  
}

function draw() {
  background(bgimg);  

  Engine.update(engine);
  push();
  textSize(40);
  fill("Magenta");
  text("Score  : " +score,950,100);
  pop();
  for(var i = 0; i < boxes1.length;i++){
    boxes1[i].display();
  }


  for(var i = 0; i < boxes2.length;i++){
    boxes2[i].display();
  }

  for(var i = 0; i < boxes3.length;i++){
    boxes3[i].display();
  }
  ball.display();
  rope.display();

  ground.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX ,y :mouseY});
}