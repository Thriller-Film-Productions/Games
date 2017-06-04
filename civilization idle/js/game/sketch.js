var back;
var gridSnapPlaces = [];
var count;
var scl = 1;
var buildings = [];
var placing = true;
var cnv;
function setup() {
  getData();
  setInterval('saveData()', 5000);
  newVari('money', 100);
  newVari('food', 1000);
  newVari('moneyType', 'skekels');
  newVari('gems', 10);
  newVari('XP', 0);
  cnv = createCanvas(windowWidth*0.98, windowHeight*0.98);
  background(0);
  for (var i = 0; i<7680; i+=128) {
  	for (var j = 0; j<4320; j+=128) {
  		gridSnapPlaces.push(createVector(i, j));
  	}
  }
  var thinga = document.getElementById('game');
  cnv.parent(thinga);
}

function draw() {
	moveBackground();
	scale(scl);
	translate(transX, transY);
	image(back, 0, 0, 3840, 2160);
	fill(255, 0, 0);
	textSize(24);
	text('you have '+vari('money')+' '+vari('moneyType'), 30-transX, 30-transY);
  text('you have '+vari('gems')+' gems!', 30-transX, 60-transY);
  text('you have '+vari('XP')+' XP!')
  for (var i = buildings.length - 1; i >= 0; i--) {
    buildings[i].show();
  }
  if (placing) {
    placeThing.show();
  }
}

function preload() {
	back = loadImage('assets/grass.gif');
}

function windowResized() {
  resizeCanvas(windowWidth*0.98, windowHeight*0.98);
}
