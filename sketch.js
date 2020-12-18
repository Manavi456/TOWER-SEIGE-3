const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;

var gameState = "onSling";

function preload(){
  polygon_img=loadImage("H1.png");

  setBackground();
}

function setup() {

   createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);

  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
  //Engine.update(engine);
  
  textSize(20);
  fill("gainsboro");
  text("SCORE : " + score, width-150, 50)

  textSize(20);
  fill("gainsboro");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",80,30);

  textSize(20);
  fill("gainsboro");
  text("Press 'SPACE' for second chance",80,350);

  ground.display();

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block13.Score();
  block14.Score();
  block15.Score();

  fill("grey");
  block16.display();
  block16.Score();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks1.Score();
  blocks2.Score();
  blocks3.Score();
  blocks4.Score();
  blocks5.Score();

  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks6.Score();
  blocks7.Score();
  blocks8.Score();

  fill("pink")
  blocks9.display();
  blocks9.Score();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}

function mouseDragged(){
   if(gameState==="launched"){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
 
}

function mouseReleased(){
  slingShot.fly();
  gameState="launched";
}

async function setBackground(){

  var response = await fetch("http://worldclockapi.com/api/json/est/now");

  var responseJSON = await response.json();

  var dateTime = responseJSON.currentDateTime;

  var hour = dateTime.slice(11,13);

  if(hour >= 06 && hour <= 18){
      background("lightyellow");
  }
  else{
      background("black");
  }
  

}


