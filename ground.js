class ground {
    constructor(x,y,w,h){

        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.body);
        this.w=w
        this.h=h
    } 
display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}
}