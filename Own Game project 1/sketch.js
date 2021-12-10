var net;
var resources;
var ground;
var GameState = 0; 
var score = 0;
var ResourceGroup

function preload() {


}


function setup() {
  createCanvas(800,800);

  net = createSprite(mouseX,500, 50, 50);
 
  ResourceGroup = newGroup
}

function draw() {
  background("Images/Background image.jpg ");  
  text("score:" +score, 500,30)

  spawnResource();

  if(net.isTouching(ResourceGroup)){
    score: +1
    resources.visible=false
  }
    
  net.x=mouseX
  




  drawSprites();
}

function spawnResource(){
  if(frameCount%40===0){
    var resource=createSprite(400,800,20,20);
    resource.addImage(ResourceImage)
    resource.velocityY=-10
    resource.x=rand 
    var rand=Math.round(random(25,775))
  }

}












/* Game Story:
Many space companys and orgnizations set out to claim resources 
through out the solor system. Your company joins the race, your job is to collect 
resources on the planet so you can reach the next planet and beat the competeters  

   Pc and NPC 
the character collecting the resources is the Pc, the other companys are the NPC's.*/
