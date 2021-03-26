class Rubber{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.r = 50;
      this.x=x
      this.y=y
       
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position
      
        push();
        translate(this.body.position.x, this.body.position.y);
       fill("white")
       ellipseMode(RADIUS);
       ellipse( 0, 0,50, 50);
        pop();
      }
}