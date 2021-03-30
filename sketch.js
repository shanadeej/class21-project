const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bullet,wall;
var speed,weight;
var thikness;

function setup() {
  var canvas = createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83);

  //car=createSprite(50,200,50,50);
  bullet    .velocityX = speed;



  wall=createSprite(1200,200,thikness,height/2);
  bullet=createSprite(x,y,20,40);


} 

function draw() {
  background(105,105,105);  

  bullet.colide(wall);

  //destruction=(0.5*weight*speed*speed)/

  /*if(Destruction>100){
    set.color=0,255,0;
  }
  else if(Destruction<180){
    set.color = 255,0,0;
  }
  else if(Destruction^100,180){
    set.color = 230,230,0;
  }*/

  drawSprites();
}