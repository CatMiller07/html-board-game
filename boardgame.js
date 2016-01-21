

function dieRoll(){
	 //rolls a die and returns a number bet 1 and 12
   var die0 = Math.random() * 11;  	
   var  roll = Math.round( die0 ) + 1; 	 
	 
   return roll;
	 
 }  

function displayDiceRoll(iDice,iDieFace,iRollVal){
	
   	iDieFace.innerHTML = "";
	
    //console.log("here i am");
	
   iDice.src = "Dodecahedron.gif";
   //faceValue = dieRoll();
	
   setTimeout(function(){
	    iDice.src = "dodecahedron-frame1.png";
    	iDieFace.innerHTML = iRollVal;     			
		},1000);
   
   //console.log("die roll1: "+faceValue);
       	
}

var faceValue = 0;

var virtDie0 = document.getElementById("anim-die0");
var dieFace0 = document.getElementById("roll-val0");
// for start

var position1 = 0;
virtDie0.onclick=function(){
    faceValue = dieRoll();	
	displayDiceRoll(virtDie0,dieFace0,faceValue); 
	//console.log(faceValue);
	
	var base = 60;
	
    position1 = position1 + faceValue;
	if ( position1 <= 11 ) {
		
		$("#player1").css("transform", "translateX(" + (position1 * base) + "px)" );
	}
	else if (position1 <= 22 ) {
			$("#player1").css("transform", "translate(660px, " + ((position1- 11 ) * base) + "px)" );
	}
	else if (position1 <= 33){
		var transformStr = "translate(" +  ( -(position1-33) )* base + "px, 660px)";
		console.log("position1: "+position1);
		console.log(transformStr);
		$("#player1").css("transform", transformStr );
	}
	else{
		//var transformStr = "translate(0px," +  Math.ceil(660-position1-43) + "px)";
		var newpos = Math.abs(660-( Math.abs(position1-44) * base) );
		var transformStr = "translate(0px," +  newpos + "px)";
		console.log(transformStr);
		$("#player1").css("transform", transformStr );
	} 	
		
	
	
	
};




	
