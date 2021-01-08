let mySound;
let texting = '';

function setup() {
  let cnv = createCanvas(500, 100);
  cnv.mousePressed(canvasPressed);
  mySound = loadSound('assets/Damscray_-_Dancing_Tiger_01.mp3',soundReady, null, whileLoading);

  background(20,100,200);

}

function draw(){
  fill(255);
  text(texting, 10, 20);
}

function canvasPressed() {
  mySound.play();
}

function whileLoading(total) {
  print('loaded: ' + total);
}

function soundReady() {
  print('sound is ready');
  texting = 'click here to dance';
}
