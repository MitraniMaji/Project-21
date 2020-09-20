var bullet, wall, thickness, speed, light;

function setup() {
  createCanvas(1600,400);

  bullet =  createSprite(50, 200, 40, 20);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255);
}

function draw() {
  background(0);  
  
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  
  car.velcityX = speed;
  
  if (hasCollided(bullet, wall)){

  bullet.velocityX = 0;
  var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  if(damage< 10){

     wall.shapeColor = color(0, 255, 0);
  }

  if(deformation > 10){

     wall.shapeColor = color(255, 0, 0);
  }

  }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;

  wallLeftEdge = wall.x;
  
  if(bulletRightEdge >= wallLeftEdge){
     return true;
  }
  else {
    return false;
  }
}