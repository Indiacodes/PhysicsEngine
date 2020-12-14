const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, fallingBody, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true , 
        friction : 0.5
    }

    var fallingBody_options ={
        restitution : 1 ,
        friction : 1
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    fallingBody = Bodies.rectangle(200,200,30,30,fallingBody_options);
    World.add(world,fallingBody);
    ball = Bodies.circle(250,200,20);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(fallingBody.position.x,fallingBody.position.y,30,30);
    circle(ball.position.x,ball.position.y,40);
}