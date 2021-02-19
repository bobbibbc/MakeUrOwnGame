class Coin{
    constructor(x,y,w,h){
        var options={
            'isStatic':true,
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}