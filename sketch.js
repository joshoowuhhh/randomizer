let renaissanceImg = []
let frame;
let phase = 'cover;'
let myFont;
let coverSize;
let studySize;
let listSize;
let retrySize;
let img = 0;
let yD = 0;
let leaf = 0;
let flow = 0;
let fate = 0;
let wrds1 = '';
let wrds2 = '';

let yourDay = ['your day will consist of', 'dancing', 'hopping', 'wiggling', 'groovy', 'moonwalking', 'jolly', 'rapturous'];

let geo = ['hairy', 'bald', 'gentle', 'sharp', 'shaky', 'hungry', 'elegant', 'cruel', 'cynical', 'filthy'];

let being = ['zombie', 'old lady', 'dinosaur', 'Transformer', 'Hobit', 'gremlin', 'robot', 'Stormtrooper'];

function preload() {
  for (i = 0; i <= 20; i++) {
    plantImg[i] = loadImage('renaissanceImg/' + [i] + '.jpg');
  }
  frame = loadImage('renaissanceImg/frame2.jpg');
  myFont = loadFont('renaissanceImg/fonts/DancingScript-Regular.ttf');
}

function setup() {
   let canvas = createCanvas(windowWidth*0.5, (windowWidth*0.5)*1.25);
  canvas.parent('myCanvas');
  let button = createButton('Click here to see what your day will consist of.');
  button.parent('button-holder');
  button.mousePressed(divination);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(myFont);
  textSize(20);
  textResize();
  coverDisplay();
}

function draw() {
}

function divination() {
  phase = 'playing';
  img = int(random(renaissanceImg.length));
  rS = int(random(yourDay.length));
  leaf = int(random(leaves.length));
  flow = int(random(flowers.length));
  fort = int(random(fortunes.length));
  fort2 = int(random(fortunes2.length));
  fort3 = int(random(fortunes3.length));
  wrds1 = 'Your day will ' + yourDay[yD] + ' ' + fortunes[fort];
  wrds2 = 'If it has ' + leaves[leaf] + ' ' + fortunes2[fort2];
  wrds3 = 'If it has ' + flowers[flow] + ' ' + fortunes3[fort3];
  console.log(wrds1);
  console.log(wrds2);
  console.log(wrds3);
  divImage();
  divText();
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

function coverDisplay() {
  //background(220);
  image(frame, width*0.5,height*0.5, width, height);
  textSize(coverSize);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to see what your day holds before you.', width * 0.5, height * 0.5);
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
