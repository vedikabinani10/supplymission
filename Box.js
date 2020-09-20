class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        Matter.Body.setStatic(this.body,false);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}
