var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var gameState="play";

var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle){
     particle.display();

     if(particle.body.position.y>760){
       if(particle.body.position.x<400){
         score=score+500;
         particle=null;
       }
     }
   }
   if(particle){
    particle.display();

    if(particle.body.position.y>760){
      if(particle.body.position.x>400){
        score=score+200;
        particle=null;
      }
    }
  }

   

  
  
   
   fill("aqua")
   text("SCORE: "+score,20,20)
    textSize(25)
   text("200",415,520)
   text("500",340,520)
   text("500",260,520)
   text("500",180,520)
   text("500",100,520)
   text("500",20,520)
   text("200",500,520)
   text("200",580,520)
   text("200",660,520)
   text("200",740,520)


   if(gameState==="end"){
     textSize(35)
     text("GAME OVER",300,230)
   }

   if(count===5){
     gameState="end"
   }
}






function mousePressed(){

  if(gameState==="play"){
    if(particle=new Particle(mouseX,10,10,10)){
      count=count+1;
    }
  }

}