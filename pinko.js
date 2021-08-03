class Pinko{
    constructor(x,y,radius){
      var options={
       isStatic:true
        }
        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        //this.height=height;
        World.add(world,this.body);
    }
    display(){
      var loc=this.body.position;
      fill("white");
      circle(loc.x,loc.y,this.radius);
    }
  }