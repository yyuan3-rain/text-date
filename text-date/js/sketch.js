let canvas;

let namesArray;
let nameButton;
let nameP;

function preload(){
  namesArray=loadstrings("txtFiles/names.txt");
}

function setup() {
  canvas = createCanvas(windowWidth; windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  nameP = createP("");
  nameP.position (30,200);
  nameButton = createButton ("Random Name");

}

function draw() {
  // put drawing code here

  backgroud(0);
}
