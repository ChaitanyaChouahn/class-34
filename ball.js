class Ball {
    constructor(x,y,width,height){
        var option ={
           restitution : 0.8,
           friction : 1,
           density : 0.05
                }
 this.body = Bodies.rectangle(x,y,width,height,option)
        this.width= width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push()
        translate(position.x,position.y)
        rotate(angle)
        fill("pink");
        ellipse(0,0,this.width,this.height);
        pop();
    }
 }