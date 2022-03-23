let yourDay = ['isolation,', 'fear,', 'hope,', 'discovery,', 'happiness,', 'friendship,', 'forgiveness,','conquer,', 'thinking,','knowledge,','unity,'];
let aspect = ['along with smiles,', 'along with hugs,', 'along with laughs,', 'along with yells,', 'along with dances,', 'along with cries,', 'along with high-fives,', 'along with conversations,', 'along with discussions,', 'along with fights,'];
let opportunities = ['ending with a new friend', 'ending with a new found skill', 'ending with a new sense of determination', 'ending with a new sense of life', 'ending with a new favorite hobby', 'ending with a new sense of worth', 'ending with shame', 'ending with being content', 'ending with being in love', 'ending with being alone','ending with finding your true self'];

let yD;
let aP;
let oP;

let rc = 216;
let gc = 230;
let bc = 190;

let wrds1;


function setup() {
  createCanvas(600, 600);
  background(232, 189, 132);
  frameRate(60);
  intText();
  textStyle(BOLDITALIC);
  mySmiley();
 // fortCirc1();
 // fortCirc2();
  console.log(yourDay[int(random(yourDay.length))]);
  console.log(opportunities.length);

  button = createButton("Click for reading");
  button.mousePressed(buttonPressed);

}

function draw() {
}


function buttonPressed() {
  push();
  yD = int(random(yourDay.length));
  aP = int(random(aspect.length));
  oP = int(random(opportunities.length));
  wrds1 = yourDay[yD] + ' ' + aspect[aP] + ' ' + opportunities[oP] + '.';
  textSize(20);
  rc = random(600);
  gc = random(600);
  bc = random(600);
  myText();
  console.log(wrds1);
  pop();
}

function mySmiley() {
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


//function fortCirc1() {
  //fill(rc, gc, bc);
  //circle(30, 30, 20);
//}

//function fortCirc2() {
 // fill(rc, gc, bc);
 // circle(width*0.8, height*0.5);
//}

function mySmiley2() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 50, 150);
}

function intText() {
  push();
  fill(51, 33, 8);
  textAlign(CENTER);
  textStyle(BOLDITALIC);
  textSize(19);
  text('Click the button to see what your day today will consist of.', width*0.5, height*0.13);
  text('There are THREE shapes that can appear within this randomizer.', width*0.5, height*0.18);
  pop();
}

function myText() {
  push();
  background(232, 189, 132);
  circle(rc, gc, bc);
  fill(rc, gc, bc);
  rect(gc, bc, rc);
  fill(gc, rc, bc);
  square(bc, rc, gc);
  fill(bc, rc, gc);
  intText();
  mySmiley();
  fill(bc, gc, rc);
  //fortCirc1();
  //fortCirc2();
  fill(51, 33, 8);
  textAlign(CENTER);
  textSize(14.2);
  text('Your day will consist of', width*0.5, height*0.26);
  text(wrds1, width*0.5, height*0.3);
  text("If only one shape matches smileyface's color, only the first description will come true!", width*0.5, height*0.7);
  text("If two shapes match the smiley smileyface's color, only the first", width*0.5, height*0.75);
  text("and second description will come true!", width*0.5, height*0.78);
  text("If all THREE shapes appear and two shapes match the smiley smileyface's color,", width*0.5, height*0.83);
  text("the whole reading will come true! ", width*0.5, height*0.86);
  text('Click again to see what your day tomorrow will consist of!', width*0.5, height*0.9);
  pop();
}
