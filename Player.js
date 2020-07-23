class Player{
    constructor(x, y, width, height){
        var options = {
            density : 0.1,
            velocity : 5
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.image = loadImage("curry.png");
        this.image1 = loadImage("lebron.png");
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);

        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        image(this.image, displayWidth/2-150, displayHeight/2-50);
        image(this.image1, displayWidth/2+50, displayHeight/2-75);
        pop()
        }

       /* run(){
            if(keyCode === UP_ARROW){
                Matter.Body.applyForce(this.body, this.body.position, {x:0,y:-5});
            }

            if(keyCode === DOWN_ARROW){
                Matter.Body.applyForce(this.body, this.body.position, {x:0,y:5});
            }

            if(keyCode === LEFT_ARROW){
                Matter.Body.applyForce(this.body, this.body.position, {x:5,y:0});
            }

            if(keyCode === RIGHT_ARROW){
                Matter.Body.applyForce(this.body, this.body.position, {x:-5,y:0});
            }
        }

        jump(){
            if(keyCode === 'j'){
                Matter.Body.applyForce(this.body, this.body.position, {x:5,y:-5});
            }
        }

        opponentjump(){
            Matter.Body.applyForce(this.body, this.body.position, {x:5,y:-5});
        }*/
    }
