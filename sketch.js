var canvas;
var music;
var sYellow, sRed, sGreen, sBlue, box, top, left, right;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(805,600);

    //create 4 different surfaces
    sBlue = createSprite(101,585,200,30);
    sGreen = createSprite(704,585,200,30);
    sYellow = createSprite(302,585,200,30);
    sRed = createSprite(503,585,200,30);
    left = createSprite(0,1,1,1);
    right = createSprite(804,1,1,1);
    sRed.shapeColor = "red";
    sYellow.shapeColor = "yellow";
    sGreen.shapeColor = "green";
    sBlue.shapeColor = "blue";
    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40)
    box.shapeColor = "white"
    box.velocityX = 6;
    box.velocityY = 7;
}

function draw() {
    background("grey");
    bottomEdge(box,sGreen);
    rightEdge(box,right);
    leftEdge(box,left);
    topEdge(box);
    if(sGreen.isTouching(box)){box.shapeColor = "green";}
    if(sYellow.isTouching(box)){box.shapeColor = "yellow";}
    if(sRed.isTouching(box)){box.shapeColor = "red";}
    if(sBlue.isTouching(box)){box.shapeColor = "blue";}
    drawSprites();
}
function bottomEdge(object1,object2){
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }
  function topEdge(object5){
    if (object5.y < 20) {
        object5.velocityY = object5.velocityY * (-1);
    } 
  }
function rightEdge(object3,object4){if (object3.x - object4.x < object4.width/2 + object3.width/2
  && object4.x - object3.x < object4.width/2 + object3.width/2) {
  object3.velocityX = object3.velocityX * (-1);
  object4.velocityX = object4.velocityX * (-1);
}}
function leftEdge(object7,object8){if (object7.x - object8.x < object7.width/2 + object8.width/2
  && object8.x - object7.x < object8.width/2 + object7.width/2) {
  object7.velocityX = object7.velocityX * (-1);
  object8.velocityX = object8.velocityX * (-1);
}}