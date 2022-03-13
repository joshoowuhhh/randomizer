let mood = ['gigantic', 'dancing', 'hopping', 'wiggling', 'groovy', 'moonwalking', 'jolly', 'rapturous'];
let geo = ['hairy', 'bald', 'gentle', 'sharp', 'shaky', 'hungry', 'elegant', 'cruel', 'cynical', 'filthy'];
let being = ['zombie', 'old lady', 'dinosaur', 'Transformer', 'Hobit', 'gremlin', 'robot', 'Stormtrooper'];

let mr;
let gr;
let br;
let sr;

let rc = 20;
let gc = 100;
let bc = 250;

let wrds;

function setup() {
  createCanvas(600, 600);
  background(0);
  frameRate(60);
  intText();
  fortSmiley();
  console.log(mood[int(random(mood.length))]);
  console.log(being.length);

}

function draw() {
}

function mousePressed() {
  mr = int(random(mood.length));
  gr = int(random(geo.length));
  br = int(random(being.length));
  wrds = mood[mr] + ' ' + geo[gr] + ' ' + being[br] + '.';
  rc = random(255);
  gc = random(255);
  bc = random(255);
  fortText();
  console.log(wrds);
}

function fortSmiley() {
  fill(rc, gc, bc);
  //smileyface
  ellipse(300, 295, 170, 170);
  
 //smileyface mouth
  push();
  fill(255, 255, 255);
  arc(300, 311, 110, 85, radians(0), 
  radians(180));
  pop();
  
//smileyface top outline
  push();
  c = color(255, 255, 255)
  fill(255, 255, 255);
  line(245, 311, 355, 311);
  pop();
  
//smileyface eyes
  push();
  fill(5, 5, 0);
  ellipse(264, 275, 37, 37);
  ellipse(335, 275, 37, 37);
  pop();
}


//function fortRect() {
  //fill(rc, gc, bc);
  //rect(width*0.5,height*0.5, 100);
//}

function fortSmiley2() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 50, 150);
}

function intText() {
  fill(255);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('Click Mr. Smiley to see what he saw today!', width*0.5, height*0.3);
}

function fortText() {
  background(0);
  intText();
  fortSmiley();
  fill(255);
  textAlign(CENTER);
  text('Mr. Smiley saw a', width*0.5, height*0.7);
  text(wrds, width*0.5, height*0.75)
}