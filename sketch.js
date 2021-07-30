
var seaImg
var ship,ship1,ship2,ship3,ship4


function preload(){
 ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
 seaImg=loadImage("sea.png")


}

function setup(){
  createCanvas(600,600);
  
  sea=createSprite(200,200,200,200)
  sea.addImage(seaImg)
  sea.scale=0.50
  

  ship=createSprite(220,200,20,20)
  ship.addAnimation("running",ship_running)
  ship.scale=0.30

  
 
}

function draw() {
  background("blue");
  sea.velocityX=4
  
  
  if (sea.x > 600){
    sea.x=width/2
  }
  




  drawSprites()
}