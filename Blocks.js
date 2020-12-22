class Blocks{
    constructor(x,y){
        var options = {
            restitution : 0.44,
            friction : 1.0,
            density : 0.5,
            frictionAir : 0.15

        }   
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("blockimg.jpeg");
        World.add(world,this.body);
        this.visibility = 255;
       
        
    }

    display(){

        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;
            //console.log(this.body.angle);
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            strokeWeight(4);
            stroke("blue");
            fill("white");
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility -= 2;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
            if(this.visibility< 230 && this.visibility>220){
                score++;
            }
            
        }
        
    }
}