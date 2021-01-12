

let audio1,sample1;
let image1,draw1;

function setup(){
  createCanvas(windowWidth,windowHeight);
  loadStrings("assets/dhPreload.txt",fileParser);
  loadFont('assets/Philosopher-Bold.ttf', drawText);
  
}



function draw(){
  
}


function fileParser(textfile){
    for(let i = 0; i < textfile.length; i++){
      let tekken = splitTokens(textfile[i], ' ');
     
      if(tekken[0] == "audio"){
        audio1 = math.randomInt(tekken[1],tekken[2]);
        sample1 = loadSound('assets/'+str(audio1)+'.wav',soundReady, null, whileLoading);
        console.log(audio1);
      }
      if(tekken[0] == "image"){
        image1 = math.randomInt(tekken[1],tekken[2]);
        draw1 = loadImage('assets/'+image1+'.png',
      imagesLoad);
    }
  
}
}

function whileLoading(total) {
  print('loaded: ' + total);
}

function soundReady() {
  print('sound is ready');
  sample1.loop();
}

function imagesLoad() {
  scale(0.5);
  image(draw1, width/2, height/2);
}

function drawText(font) {
  fill('#ED225D');
  textFont(font, 36);
  text('p5*js', 10, 50);
}