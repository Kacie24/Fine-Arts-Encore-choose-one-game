//let frameCount
let x;
let timer = 5
let stage;
let button;
function setup() {
  createCanvas(420, 900);
  
}
 function preload(){
 bg = loadImage("Weems.jpg");
    g = loadImage("giphy.gif");
     c = loadImage("yay.gif");
    b = loadImage("incorrect.gif");
    a = loadImage("fail.gif");
 }

function draw() {
  background(26, 36, 33);
  splash()
  //lose()
  //win ();
  
  
        let button = createButton("Jefferson Memorial");
   button.position(156,500);


button.mousePressed(() => {
  stage=1
  button.hide()
  });
 
  //  if (mouseIsClicked){
  //   
  // }
  let button2 = createButton("Washington Memorial");
  button2.position(150,600);
   
     let button3 = createButton("Frankenstien Memorial");
  button3.position(146,550);
   
 
  button2.mousePressed(() => {
     stage=2
  });
  
    button3.mousePressed(() => {
     stage=2
  });
  
	if(stage == 0){
		splash();
      //win ();
	}//close = 0
	
	if(stage == 1){
		win ();

      removeElements();
	}//close = 1   

	if(stage == 2){
		lose ();
      removeElements();
	}//close = 1   

}
function splash(){
   rect(0,10,450,450)
  image(bg, 10,30,400,400);
  fill(255);
	stroke(0);
	strokeWeight(2);
	textSize(18);
	text('What Monument is in the background of this print?', 10, 480)

}

function lose(){
  loop()
  
      background(26, 36, 33);
  //title
	fill(255);
	stroke(0);
	//strokeWeight(10);
	textSize(20);
   textWrap(WORD);
  textAlign(CENTER)
  //text(timer, width/2, height/2);
 
	//text('CORRECT', width/4.2, height/1.4);
 
// let s= 'Carrie Mae Weems is a renowned American artist whose extensive body of work investigates cultural identity, sexism, class, political systems, and the consequences of power.';
//   let d='Like the name of the print, the monument in the Background is the Jefferson Memorial!'
 x = 60  
  //image(g,65,10,300,200);

if (frameCount % 90 == 0 && timer > 0) { 
    timer --;
  }
  if (timer > 2) {
     image(b,65,10,300,300);
    text('Correct Answer:                                        The Jefferson Memorial', 10,350,400);
    image(a,x, 400,300,300);
  } else {if (timer == 0)
    image(c,6000, 200,300,200);
          image(g,6000,10,300,200);
  }
  if (timer<3) {
    text(' ‘Jefferson Memorial’, is a black and white print, by visual artist Carrie Mae Weems. Weems is a renowned American artist whose extensive body of work investigates cultural identity, sexism, class, political systems, and the consequences of power.', 10,100,400);
  }  
 
   if (timer<2) {
       //textAlign(RIGHT)
  
    text('In this powerful image, Weems ascends the steps of the presidential monument. With her back to the camera, she leads the viewer in a slow procession to confront and contemplate America’s long history of political and social inequality. This piece serves as a great example of Weems’ lifelong exploration of injustice within our society. She, in collaboration with Lincoln Center Editions, released an 36 print edition of this powerful photograph. ', 10,270,400);
     textAlign(LEFT)
text('                                                               Check her,and the print,out on our Website!', 10,525,400);
  } 
  
  
 if (timer==0) {
   textSize(40);
   textAlign(CENTER)
    text('Thanks for Playing!', 10,600,400);
}
}
function touchStarted() {
if(button){
		splash();
	}//close = 0
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}