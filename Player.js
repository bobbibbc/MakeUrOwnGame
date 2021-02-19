class Player{
    constructor(x,y,width,height){
        var options={
          'isStatic': false,
          'restitution':0.8,
          'friction':3.0,
          'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("red");
      rectMode(CENTER);
      rect(0,0,this.width, this.height);

      if(keyIsDown(UP_ARROW )){
        this.body.position.y=this.body.position.y-1;
      }
      if(keyIsDown(RIGHT_ARROW )){
        this.body.position.x=this.body.position.x+1;
      }
      if(keyIsDown(LEFT_ARROW )){
        this.body.position.x=this.body.position.x-1;
      }
      pop();
    }
    
}  

