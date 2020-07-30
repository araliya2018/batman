var bg;
var rand;
var batman,batmanidle, batmankick;
var joker;
var batman_idle;
var batman_run;
var batman_duck;
var batman_kick;
var batman_punch;

var joker_running;
var joker_idle;
function preload(){
  //bg=loadImage("background.png");
 // batmanIdle=loadAnimation("pics/batman1.png");
 // batmankick=loadAnimation("pics/batman3.png","pics/batman1.png");
 // batmankick=loadAnimation("pics/batman3.png","pics/batman3.png","pics/batman3.png","pics/batman1.png");
  batman_idle=loadAnimation("batman-duck3.png");
  batman_run=loadAnimation("batmanrun1.png","batmanrun2.png","batmanrun3.png","batmanrun4.png","batmanrun5.png","batmanrun6.png");
  batman_duck=loadAnimation("batman-duck1.png","batman-duck2.png","batman-duck4.png");
  batman_kick=loadAnimation("batman-kick1.png","batman-kick2.png","batman-kick3.png","batman-kick4.png","batman-kick5.png")
  
  batman_punch=loadAnimation("batman-punch1.png","batman-punch2.png","batman-punch3.png")
  joker_idle=loadAnimation("joker-running10.png")
  joker_running=loadAnimation("joker-running9.png","joker-running8.png","joker-running7.png","joker-running6.png","joker-running5.png")
}
function setup() {
  createCanvas(displayWidth,640);
  rand=Math.round(random(1,2));
  if(rand===1){
    bg=loadImage("pics/gothambackground.png");

  }

  else {
    bg=loadImage("pics/gothambackground3.jpg");
  }
  batman = createSprite(200, 580, 50, 80);
  batman.addAnimation("batman1", batman_idle)
  batman.addAnimation("batman2", batman_run)
  batman.addAnimation("batman3", batman_duck)
  batman.addAnimation("batman4", batman_kick)
  batman.addAnimation("batman5", batman_punch)
  batman.scale=3;


  joker=createSprite(1000, 580, 50, 80);
  joker.addAnimation("joker1",joker_idle);
  joker.addAnimation("joker2",joker_running);
  joker.scale=3;
}

function draw() {
  background(bg);
  if(keyWentDown(RIGHT_ARROW)){
    batman.changeAnimation("batman2");
   
    batman.velocityX=2;
  }
  if(keyWentUp(RIGHT_ARROW)){
    batman.changeAnimation("batman1");
   

    batman.velocityX=0;
  }
  if(keyWentDown("s")){
    batman.changeAnimation("batman3");
   
   
  }
  if(keyWentUp("s")){
    batman.changeAnimation("batman1");
   

    
  }
  if(keyWentDown(LEFT_ARROW)){
    batman.changeAnimation("batman2");
   
    batman.velocityX=-2;
  }
  if(keyWentUp(LEFT_ARROW)){
    batman.changeAnimation("batman1");
   

    batman.velocityX=0;
  }

  if(keyWentDown("d")){
    batman.changeAnimation("batman4");
   
  }
  if(keyWentUp("d")){
    batman.changeAnimation("batman1");
   
  }
  if(keyWentDown("w")){
    batman.changeAnimation("batman5");
   
  }
  if(keyWentUp("w")){
    batman.changeAnimation("batman1");
   
  }
  /*joker---------------------------------------*/
  if(keyWentDown("p")){
    joker.changeAnimation("joker2");
   joker.velocityX=-2;
  }
  if(keyWentUp("p")){
  joker.changeAnimation("joker1");
  joker.velocityX=0; 
  }
  drawSprites();
}