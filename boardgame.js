

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
   faceValue = dieRoll();
	
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
virtDie0.onclick=function(){
    faceValue = dieRoll();	
	displayDiceRoll(virtDie0,dieFace0,faceValue); 
	
	var r = 0;
	for(var p = 1; p < faceValue; p++){
		var cell = "#r" + r +"c" + p;
		$(cell).html(".play-mov");
	};
		
};




	
