class Paper {
    constructor(x,y){  
       var options={
        isStatic : false,
        restitution : 0.3,
        friction :0.5,
        density : 1.2
        }
    this.paper= Bodies.circle(500,300,50,options);
    World.add(world,this.paper);
    }
    display(){
        var pos = this.paper.position;
        push();
        translate(pos.x,pos.y);
        circle(pos.x,pos.y);
        pop ();

    }
};