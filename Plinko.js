class Plinko{
    constructor(x,y,r){

   var options = {
 
   isStatic : true
   }    

   this.r = r =10;

       this.body = Bodies.circle(x,y,this.r,options);
       this.color = "white";
       World.add(world,this.body);
}
        display() {
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
           translate(pos.x,pos.y);
           rotate(angle);
           strokeWeight(5);
           fill (this.color);
           ellipseMode(RADIUS);
           ellipse(0,0,this.r,this.r)
           pop();
        }
    };
  