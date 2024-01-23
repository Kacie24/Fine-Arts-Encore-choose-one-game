function first(){
  
     let button5 = createButton("next");
   button5.position(156,450);
  
button5.mousePressed(() => {
  stage=5
  button.hide()
  });
  fill(255);
	stroke(0);
	//strokeWeight(10);
	textSize(20);
   textWrap(WORD);
  textAlign(CENTER)
   text(s, 10,300,400);
}