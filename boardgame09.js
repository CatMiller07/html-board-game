

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

function movePlayer(iPlayer, inPos){
	var base = 60; 
	var iPosition = inPos;
	var playerId = "#player"+iPlayer;
	
	if ( iPosition <= 11 ) {
		
		$(playerId).css("transform", "translateX(" + (iPosition * base) + "px)" );
	}
	else if (iPosition <= 22 ) {
			$(playerId).css("transform", "translate(660px, " + ((iPosition - 11 ) * base) + "px)" );
	}
	else if (iPosition <= 33){
		var transformStr = "translate(" +  ( -(iPosition - 33) )* base + "px, 660px)";
		//console.log("position1: "+position1);
		//console.log(transformStr);
		$(playerId).css("transform", transformStr );
	}
	else{
		
		if ( iPosition >= 44 ) iPosition = 44;
		
		//console.log("position1: "+position1);
		var newpos =  Math.abs( (44-iPosition) * base );
		
	    transformStr = "translate(0px," +  newpos + "px)";
		console.log(transformStr);
		$("#player1").css("transform", transformStr );
	} 
}

var faceValue = 0;
var virtDie0 = document.getElementById("anim-die0");
var dieFace0 = document.getElementById("roll-val0");
// for start

var position1 = 0;
var position2 = 0;
var playerTurn = 1;
virtDie0.onclick=function(){
    faceValue = dieRoll();	
	displayDiceRoll(virtDie0,dieFace0,faceValue); 
	//console.log(faceValue);
	
	switch (playerTurn) {
		case 1:
		    position1 = position1 + faceValue;
			movePlayer(playerTurn,position1);
			playerTurn  = 2;
		 break;
		case 2:
		    position2 = position2 + faceValue;
			movePlayer(playerTurn,position2);
			playerTurn  = 1;
		 break;	
			
	}
	
   	
		
	
	
	
};




	
