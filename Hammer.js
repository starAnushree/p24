class Hammer{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, 150, 50, options);
        this.width = 150;
        this.height = 50;
       
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position
          pos.x=mouseX
          pos.y=mouseY
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}