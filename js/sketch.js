var INNER_WIDTH   = window.innerWidth;
var INNER_HEIGHT  = window.innerHeight;

var img;



function setup() {
  createCanvas(INNER_WIDTH,INNER_HEIGHT);
  background(0);
  img = loadImage("images/2016_06-jaylab_03-2709.svg");
}


function draw(){
  image(img,0,0,INNER_WIDTH, INNER_HEIGHT);
  
}

function mousePressed(){
   window.open("http://jaylab.io/noc-js-1/02_forces/02_02_history_lines/", "_self");
}
