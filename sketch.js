var ball;
var vx = 2; //velocidade na direção x

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);

  if(ball.position.x<=0 || ball.position.x>=width)
  {
    //tornar a velocidade negativa para mudar a direção
    vx= -vx;
  }

  //definir a velocidade da bola para vx
  ball.velocity.x = vx;

  drawSprites();
}

