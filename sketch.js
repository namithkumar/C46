const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var player1, player2, court, slinghshot, courtImg, ball, ground, basket;
var score = 0;

function preload(){
    courtImg = loadImage("bbcourt.png");
}

function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create(); 
    world = engine.world;

    player1 = new Player(displayWidth/2-50, displayHeight/2, 5, 5);
    player1.scale = 0.1;
    player2 = new Player(displayWidth/2+50, displayHeight/2, 10, 10);
    player2.scale = 0.1;

    basket = new Basket(1500, 1000);
    ball = new Ball(displayWidth/2-50, displayHeight/2, 50);
    slingshot = new SlingShot(ball.body,{x:displayWidth/2-50, y:displayHeight/2});
    ground = new Ground(900, height, 3000, 20);
    
  

}

function draw(){
    background(courtImg);
    Engine.update(engine);

    textSize(30);
    text("SCORE: "+score, displayWidth/2-50, 150);

    if(ball.body.position.x === basket.body.position.x){
        score = score+1;
        console.log("hi");
    }

    player1.display();
    //player1.run();
    //player1.jump();

    player2.display();
   // player2.run();
   // player2.opponentjump();

    ball.display();
    basket.display();
    ground.display();

}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
    //player2.opponentjump();
}