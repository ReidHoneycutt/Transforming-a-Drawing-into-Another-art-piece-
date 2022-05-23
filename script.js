//see description for details
let W = window.innerWidth;
let H = window.innerHeight;
let mouseClick;
let flag;
let r = 10;
let FC;
let thresh = 10;
let meta;
let arr = [];


function setup() {
  createCanvas(W, H);
  background(0);
  mouseClick = 0;
  flag = 0
  meta = new Meta(shiva, 1);
  reSize(woman);
  reSize(words);
  reSize(fourth);
  reSize(fifth);
}

function draw() { 
  FC = frameCount;
  fill(100, FC % 100, FC % 105);
  background(0);
  if (mouseClick == 0) {
    meta.free_fall();
  }
  else {
    //B has vector compatible objects
    meta.restore();
  }
  meta.show();
}

function mousePressed() {
  mouseClick++;
  flag++;
}

function mouseReleased() {
  mouseClick = 0;
}

function reSize(array) {
  let temp_x = [];
  let temp_y = [];
  let x;
  let y;

  // Scale original points first from image
  for (let i = 0; i < array.length; i++) {
      temp_x[i] = array[i][0];
      temp_y[i] = array[i][1];
  }
  let w = max(temp_x) - min(temp_x);
  let h = max(temp_y) - min(temp_y);

  // Create array of particle objects
  for (let i = 0; i < array.length; i++) {
      x = array[i][0] * (W/w);
      y = array[i][1] * (H/h);
      array[i][0] = x;
      array[i][1] = y;
  }
}