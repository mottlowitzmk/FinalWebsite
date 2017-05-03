var cnv;

var x = 50,
  y = 50,
  angle1 = 0.0,
  segLength = 50;


function setup() {
cnv = createCanvas(2000,100);
cnv.position(20, 25);
cnv.style("z-index", -1);

  strokeWeight(20.0);
  stroke(255, 100);

}

function draw() {
  background(20,20,10,0);


  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  ellipse(x, y, 25, 25);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
