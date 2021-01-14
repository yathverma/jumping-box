var canvas;
var music;
var box;
var platform1,platform2,platform3,platform4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    platform1=createSprite(120,580,170,30);
    platform1.shapeColor="blue";

    platform2=createSprite(300,580,170,30);
    platform2.shapeColor="orange";

    platform3=createSprite(480,580,170,30);
    platform3.shapeColor="red";

    platform4=createSprite(660,580,170,30);
    platform4.shapeColor="green";

    //create box sprite and give velocity

    box=createSprite(random(20,750),100,50,50);
    box.shapeColor="white";
    box.velocityX=2;
    box.velocityY=3;

    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //add condition to check if box touching surface and make it box

    if(box.isTouching(platform1) || box.isTouching(platform2) || box.isTouching(platform3) 
    || box.isTouching(platform4)){
    music.play();
    }
    
    if(box.isTouching(platform1) && box.bounceOff(platform1)){
        box.shapeColor="blue";
    }

    if(box.isTouching(platform3) && box.bounceOff(platform3)){
        box.shapeColor="red";
    }

    if(box.isTouching(platform4) && box.bounceOff(platform4)){
        box.shapeColor="green";
    }
    
    if(box.isTouching(platform2) && box.bounceOff(platform2)){
        music.stop();
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
    }

    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[3]);

    box.bounceOff(platform1);
    box.bounceOff(platform2);
    box.bounceOff(platform3);
    box.bounceOff(platform4);
    
   

   




    drawSprites();
}
