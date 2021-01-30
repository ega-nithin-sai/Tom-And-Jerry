var garden, backgroundImg;
var tom, tomWalkingImg, tomSittingImg, tomSitting;
var jerry, jerryCheeseImg, jerryHaHaImg;

function preload(){
    //load the images here
    backgroundImg = loadImage("images/garden.png");

    tomSitting = loadAnimation("images/cat4.png");
    tomWalkingImg = loadAnimation("images/cat2.png");
    tomSleepingImg = loadAnimation("images/cat1.png");

    jerrySearching = loadAnimation("images/mouse4.png");
    jerryCheeseImg = loadAnimation("images/mouse1.png");
    jerryHaHaImg = loadAnimation("images/mouse2.png");
}

function setup(){
    createCanvas(975,705);
    // create tom and jerry sprites here
    garden = createSprite(487.5,352.5,10,10);
    garden.addImage("garden Image", backgroundImg);

    tom = createSprite(800,600,20,20);
    tom.addAnimation("Tom Sitting",tomSitting);
    tom.addAnimation("Tom Walking",tomWalkingImg);
    tom.addAnimation("Tom Sleeping",tomSleepingImg);
    tom.scale = 0.2;
    tom.debug = false;
    tom.setCollider("rectangle",0,0,650,850);
    tom.width = 150;

    jerry = createSprite(80,600,20,20);
    jerry.addAnimation("Jerry Searching",jerrySearching);
    jerry.addAnimation("Jerry With Cheese Image",jerryCheeseImg);
    jerry.addAnimation("Jerry Ha Ha Image",jerryHaHaImg);
    jerry.scale = 0.1;
    jerry.debug = false;
    jerry.setCollider("rectangle",0,0,850,950);
    jerry.width = 150;
}

function draw() {
    background(0);

    keyPressed();

    // Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2){
        tom.velocityX = 0;
        tom.changeAnimation("Tom Sleeping");
        tom.scale = 0.15;
        jerry.changeAnimation("Jerry Ha Ha Image");
    }

    drawSprites();
}


function keyPressed(){
    if(frameCount > 100){
        jerry.changeAnimation("Jerry With Cheese Image");
        if(keyDown("left") && tom.x > 220){
          tom.x -= 5;
          tom.changeAnimation("Tom Walking");
        }
        if(keyDown("right") && tom.x < 800){
          tom.x += 5;
          tom.changeAnimation("Tom Walking");
        }
    }
}
