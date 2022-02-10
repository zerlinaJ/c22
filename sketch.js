//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world1 = engine.world;

  //JSON Object
  ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 400, 400, 50, ground_options);
  World.add(world1, ground);

  console.log(ground)
}

function draw() {
  background(0, 0, 0);

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50);
}