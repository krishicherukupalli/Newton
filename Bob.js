class Bob{
  constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.2,
          'density':1.0,
          isStatic:false
        
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(this.x, this.y, this.radius, options);
      
      World.add(world, this.body);
    }
    display(){
     
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("black");
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius);
     pop();
    }
}