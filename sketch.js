const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particle=[];
var score=0;
var particle;

function setup() {
  createCanvas(displayWidth-975,displayHeight-115);
  engine=Engine.create();
  world=engine.world;
  p10=new Pinko(50,100,20);
  p11=new Pinko(100,100,20);
  p12=new Pinko(150,100,20);
  p13=new Pinko(200,100,20);
  p14=new Pinko(250,100,20);
  p15=new Pinko(300,100,20);
  p16=new Pinko(350,100,20);
  p17=new Pinko(400,100,20);
  p18=new Pinko(450,100,20);
  p19=new Pinko(500,100,20);
  p20=new Pinko(25,200,20);
  p21=new Pinko(75,200,20);
  p22=new Pinko(125,200,20);
  p23=new Pinko(175,200,20);
  p24=new Pinko(225,200,20);
  p25=new Pinko(275,200,20);
  p26=new Pinko(325,200,20);
  p27=new Pinko(375,200,20);
  p28=new Pinko(425,200,20);
  p29=new Pinko(475,200,20);
  p210=new Pinko(525,200,20);
  p30=new Pinko(50,300,20);
  p31=new Pinko(100,300,20);
  p32=new Pinko(150,300,20);
  p33=new Pinko(200,300,20);
  p34=new Pinko(250,300,20);
  p35=new Pinko(300,300,20);
  p36=new Pinko(350,300,20);
  p37=new Pinko(400,300,20);
  p38=new Pinko(450,300,20);
  p39=new Pinko(500,300,20);
  p40=new Pinko(25,400,20);
  p41=new Pinko(75,400,20);
  p42=new Pinko(125,400,20);
  p43=new Pinko(175,400,20);
  p44=new Pinko(225,400,20);
  p45=new Pinko(275,400,20);
  p46=new Pinko(325,400,20);
  p47=new Pinko(375,400,20);
  p48=new Pinko(425,400,20);
  p49=new Pinko(475,400,20);
  p410=new Pinko(525,400,20);
  w1=new Wall(-12,610,20,1000);
  w2=new Wall(65,605,20,250);
  w3=new Wall(160,605,20,250);
  w4=new Wall(255,605,20,250);
  w5=new Wall(350,605,20,250);
  w6=new Wall(455,605,20,250);
  w7=new Wall(565,605,20,1000);
  ground=new Wall(000,735,1200,20);
}

function draw() {
  background(355,155,55);
  Engine.update(engine);
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();
  p210.display();
  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p37.display();
  p38.display();
  p39.display();
  p40.display();
  p41.display();
  p42.display();
  p43.display();
  p44.display();
  p45.display();
  p46.display();
  p47.display();
  p48.display();
  p49.display();
  p410.display();
  w1.display();
  w2.display();
  w3.display();
  w4.display();
  w5.display();
  w6.display();
  w7.display();
  ground.display();
  textSize(20);
  text("500",10,500);
  text("100",90,500);
  text("400",190,500);
  text("600",290,500);
  text("200",390,500);
  text("300",490,500);
  text("Score:"+score,100,100);
  mparticle();
  for(var i=0;i<particle.length;i++){
    particle[i].display();
  }
}

function mparticle(){
  if(frameCount % 50 === 0){
   var x=Math.round(random(25,560));
   particle.push(new Particle(x,-100,15));
  }
  if(particle.speed<2){
    score=score+100
  }
  particle.lifeTime=500;
}