class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.t = -4;
    this.v_x = 0;
    this.v_y = 0;
    this.flag = 0;
    this.eps = 0;
    this.test = 0.1;
  }
  show() {
    ellipse(this.x, this.y, r, r);
    this.test = 1-Math.exp(-frameCount);
  }
  down() {
    this.y = this.y+this.t; 
    this.t += this.test;
  }
  up() {
    this.y = this.y-this.t;
    this.t -= 2*this.test;
  }
  flagOn() {
    this.flag = 1;
  }
  flagOff() {
    this.flag = 0;
  }
  restore(x_dest, y_dest) {
    this.x -= (1/20) * (this.x - x_dest);
    this.y -= (1/20) * (this.y - y_dest); 
  }
}