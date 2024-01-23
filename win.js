function win(){
//    let button4 = createButton("next");
//    button4.position(356,450);
  
// button4.mousePressed(() => {
//   stage= 4
//   button4.hide()
//   });
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

if (frameCount % 80 == 0 && timer > 0) { 
    timer --;
  }
  if (timer > 2) {
    text('Correct Answer:                                        The Jefferson Memorial', 10,350,400);
     image(g,65,10,300,300);
    image(c,x, 100,300,700);
  } else {if (timer == 0)
    image(c,6000, 200,300,200);
          image(g,6000,10,300,200);

  if (timer<3) {
    text('‘Jefferson Memorial’, is a black and white print, by visual artist Carrie Mae Weems. Weems is a renowned American artist whose extensive body of work investigates cultural identity, sexism, class, political systems, and the consequences of power.', 10,100,400);
  } 
   if (timer<2) {
    text('In this powerful image, Weems ascends the steps of the presidential monument. With her back to the camera, she leads the viewer in a slow procession to confront and contemplate America’s long history of political and social inequality. This piece serves as a great example of Weems’ lifelong exploration of injustice within our society. She, in collaboration with Lincoln Center Editions, released an 36 print edition of this powerful photograph. ', 10,270,400);
          textAlign(LEFT)
text('                                                               Check her,and the print,out on our Website!', 10,525,400);
  } 
 if (timer==0) {
   textSize(40);
     textAlign(CENTER)
    text('Thanks for Playing!', 10,600,400);
  } 
  
  
//   if(stage == 3){
// 		win();
//       //win ();
// 	}//close = 0
	
// 	if(stage == 4){
// 		first ();
 
//      removeElements();
// 	}//close = 1   

// 	if(stage == 5){
// 		second ();
//       //removeElements();
// 	}//close = 1   



  
//      let button5 = createButton("next.");
//    button5.position(156,450);
  
// button5.mousePressed(() => {
//   stage=5
//   button.hide()
//   });
//   fill(255);
// 	stroke(0);
// 	//strokeWeight(10);
// 	textSize(20);
//    textWrap(WORD);
//   textAlign(CENTER)
//    text(s, 10,300,400);

//   fill(255);
// 	stroke(0);
// 	//strokeWeight(10);
// 	textSize(20);
//    textWrap(WORD);
//   textAlign(CENTER)
//    text(s, 10,300,400);

//   fill(255);
// 	stroke(0);
// 	//strokeWeight(10);
// 	textSize(20);
//    textWrap(WORD);
//   textAlign(CENTER)
//    text('f', 10,300,400);
}
}