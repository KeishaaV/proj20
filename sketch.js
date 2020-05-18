var car, wall;
var speed, weight; 

function setup() {
  createCanvas(1600,400);
  car= createSprite(100, 200, 20, 20);
  
  wall= createSprite(1200, 200, 20, height/2); 
  
  speed= random(55,90);  
  car.velocityX= speed; 
  weight= random (400,1500); 
}

function draw() {
  background(0);

 

  if (wall.x-car.x<(wall.width+car.width)/2){ 
    car.velocityX=0; 
    var deform= (0.5 * weight * speed * speed)/22509; 
    if (deform<100){
      car.shapeColor(0,255,0); 
    }
    if (deform>=100 && deform<=180){
      car.shapeColor(230,230,0); 
    }
    if (deform>180){
      car.shapeColor(255,0,0); 
    }
  }



  drawSprites();
}