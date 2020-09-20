function physical_object(x, y, s, b, gx, gy, ar) {
  this.msx = 0;
  this.msy = 0;
  this.xp = x;
  this.yp = y;
  this.xv = 0;
  this.yv = 0;
  this.xa = gx;
  this.ya = gy;
  this.s = s;
  this.b = b;
  this.update = function() {
    if(mouseIsPressed) { 
      this.xp = mouseX;
      this.yp = mouseY;
      this.xv = mouseX-this.msx;
      this.yv = mouseY-this.msy;
      this.msx = mouseX;
      this.msy = mouseY;
      
    } else {
      this.xv += this.xa;
      this.yv += this.ya;
      this.xp += this.xv;
      this.yp += this.yv;
      this.xv *=ar;
      this.yv *=ar;
      if(this.yp >= height-this.s/2) {
        this.yv *=-b;
        this.yp = height-this.s/2;
      }
      if(this.xp >= width-this.s/2) {
        this.xv *=-b;
        this.xp = width-this.s/2;
      }
      if(this.xp <= 0+this.s/2) {
        this.xv *=-b;
        this.xp = 0+this.s/2;
      }
      if(this.yp <= 0+this.s/2) {
        this.yv *=-b;
        this.yp = 0+this.s/2;
      }
    }
  }
  this.show = function() {
    ellipse(this.xp, this.yp, this.s);
  }
  
}
var ball;
function setup() {
  createCanvas(400, 400);
  ball = new physical_object(200, 100, 50, 0.75, 0, 1, 0.99);
}

function draw() {
  ball.xa = 0;
  ball.ya = 1;
  if (keyIsPressed) {
    if(keyCode===RIGHT_ARROW){
      ball.xa = 0.5;
    }
    if(keyCode===LEFT_ARROW){
      ball.xa = -0.5;
    }
    if(keyCode===UP_ARROW){
      ball.yv = -20;
    }
    if(keyCode===DOWN_ARROW){
      ball.ya = 0;
    }
  }
  background(0);
  ball.update();
  ball.show();
  
}

