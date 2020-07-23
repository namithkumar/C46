class Basket {
    constructor(x, y) {
      var options = {
          isStatic: true
      }

      this.image = loadImage("basket.png");
      this.body = Bodies.rectangle(x,y,1700,70,options);
      World.add(world, this.body);
    }
    
    display(){
      imageMode(CENTER);
      image(this.image, 1700, 400);
    }
  };