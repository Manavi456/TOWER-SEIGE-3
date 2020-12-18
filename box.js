class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      
      if(this.body.speed<3){
        var position = this.body.position
        var angle = this.body.angle
       push()
       translate(position.x,position.y);
       rotate(angle)
       fill(0, 255, 255);
       strokeWeight(3);
       stroke("darkblue")
       rectMode(CENTER)
       rect(0,0,this.width,this.height);
      pop()
       }
      else{
  
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility)
        pop();
      }
    }

    Score(){
      if(this.Visibility<0 &&  this.Visibility> -205){
        score = score +1 ;
      }
    }
}