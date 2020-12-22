class Ball{
    constructor(x,y){
        var options = {
            density : 1,
            frictionAir : 0.005
        }
        this.body = Bodies.circle(x,y,60,options);
        this.radius  = 60;
        this.image = loadImage("Rock.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}