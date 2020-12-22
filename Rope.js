class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB :pointB,
            stiffness :1.2,
            length : 380
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    };

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;

            push();
            stroke(255);
            strokeWeight(3);

            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }

}