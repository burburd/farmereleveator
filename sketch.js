var canvas;
var backgroundImg;
var farmer,farmerImg,elevatorImg,elevator,cow,cowImg,meat,meatImg;

function preload(){
    backgroundImg=loadImage("qwertyuiop.png");
    farmerImg=loadImage("farmer.png");
    elevatorImg=loadImage("elveator.jpg")
    cowImg=loadImage("cow.png")
    meatImg=loadImage("meat.png")
}

function setup(){
    createCanvas(1200,800)
   farmer=createSprite(400,600)
   farmer.addImage(farmerImg)
   farmer.scale = 0.5

   elevator=createSprite(100,600)
   elevator.addImage(elevatorImg)
   elevator.scale = 0.9

   meat=createSprite(farmer.x,farmer.y)
   meat.addImage(meatImg)
   meat.scale = 0.2
   
}

function draw(){
    background(backgroundImg)
    enemy()
   
    


    if(keyDown(RIGHT_ARROW)){
        farmer.x = farmer.x +3;      
     }
    if(keyDown(LEFT_ARROW)){
        farmer.x = farmer.x -3;
    }

     farmer.depth=elevator.depth
     farmer.depth = farmer.depth +1

     if(farmer.x == 139){
         elevator.velocityY= -6
         farmer.velocityY= -6
        console.log('bruh')
     }
     if(farmer.y==234){
         elevator.velocityY= 0
         farmer.velocityY= 0
     }
      
     //console.log(farmer.x)
     console.log(farmer.y)


     drawSprites()

    

}

function enemy(){
    if(frameCount%150==0){
    
    
    cow=createSprite(1000,500)
    cow.addImage(cowImg)
    cow.scale= 0.5
    cow.velocityX= -2
    cow.y=Math.round(random(600,600))


    }
}






















































