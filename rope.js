class Rope {
    constructor(bodyA,pointB){
        var option ={
            bodyA : bodyA,
            pointB : pointB,
            stiffnesss : 1,
            length : 350
                }
 this.rope =Matter.Constraint.create(option)
        this.pointB= pointB;
        World.add(world,this.rope);
     
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
       
        fill("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
 }