//Global variables
var car;
var weight,speed;
var wall;



function setup() {
  createCanvas(400,400);
  
car=createSprite(50,200,20,20);
car.shapeColor="white";



wall=createSprite(350,200,10,70);


speed=random(60,95);
weight=random(400,1500);



  car.velocityX=speed;




}


function draw() {
  background("Black");  

  


var deformation=0.5*weight*speed*speed/22500;

if(deformation<80){
  car.shapeColor="blue";
}

if(deformation>80 && deformation<120){
  car.shapeColor="green";
}

if(deformation>120 && deformation<180){
  car.shapeColor="Red";
}

car.collide(wall);
 drawSprites();
}