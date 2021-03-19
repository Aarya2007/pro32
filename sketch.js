const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plank0,plank1,plank2,plank3
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  plank3 =  new Log(30,140,50, PI/2);
  plank2 = new Log(30,70,50,PI/2)
  plank0 = new Log(470,70,50,PI/2)
  plank1 =  new Log(470,140,50, PI/2);
}

function draw() {
  Engine.update(engine);
  plank3.display()

  background(255,255,255);  
  drawSprites();
}