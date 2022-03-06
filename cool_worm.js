//thought test 
//how would I Implement limit? 
// i would normalize it ( that is, find its magnitude and divide its parts by it) and then multiply it by the desired limit 


//force = mass * acceleration 
//motion 101 algorithm
class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.acc  = p5.Vector.random2D(); 
  //  this.acc.setMag(random(-2,2)) 
  
  }

  update() {
   
    this.acc.add(p5.Vector.random2D())
    this.acc.limit(10)
    this.vel.add(this.acc)
    this.pos.add(this.vel);
 
   
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(0,30);
    ellipse(this.pos.x, this.pos.y, width/10);
  }
}

function setup() {
  background(255); 
  createCanvas(1000, 800);
  mover = new Mover(width/10, 0);
}

function draw() {
  
  mover.update();
  mover.show();
}
