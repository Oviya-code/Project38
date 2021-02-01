const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  engine=Engine.create();
  world=engine.world;

 ground = new Ground(10,795,950,10);
  
for (var k = 0; k<=width;k = k+80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}

for (var j=40;j <=width; j=j+50){

  plinkos.push(new Plinko(j,75));
}

for (var j=15;j <=width-10; j=j+50){

  plinkos.push(new Plinko(j,175));
}

for (var j=55;j <=width+10; j=j+50){

  plinkos.push(new Plinko(j,275));
}

for (var j=25;j <=width-30; j=j+50){

  plinkos.push(new Plinko(j,375));
}

}

function draw() {
  background(0);  
  Engine.update(engine);
  
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10,width/2+10),10,10));
}

for (var j=0;j<plinkos.length; j++){
  plinkos[j].display();
}

for (var k=0;k<divisions.length; k++){
 divisions[k].display();
}

for (var j=0;j<particles.length; j++){
  particles[j].display();
}



  
  ground.display();

 drawSprites();
}

