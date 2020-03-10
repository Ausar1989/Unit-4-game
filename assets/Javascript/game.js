$(document).ready(function(){


	var counter = 0;
	var wins = 0;
	var losses = 0;

	

	function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;

	}

	var targetNumber = randomNum(19,120);
	$("#counter-total").html(targetNumber);
	console.log(targetNumber)

	var crystalOne= randomNum(1, 12);
	var crystalTwo= randomNum(1, 12);
	var crystalThree= randomNum(1, 12);
	var crystalFour= randomNum(1, 12);


	function reset(){
		counter = 0;
		$("#counter-total").html(targetNumber);
		targetNumber = randomNum(19,120);
		$("#counter-total").text(counter);
		crystalOne= randomNum(1, 12);
		crystalTwo= randomNum(1, 12);
		crystalThree= randomNum(1, 12);
		crystalFour= randomNum(1, 12);


	}

	
	$("#image1").on("click", function(){
		counter += crystalOne;
		WinLoose();
		$("#counter-total").text(counter);
		
	});

	$("#image2").on("click", function(){
		counter += crystalTwo;
		WinLoose();
		$("#counter-total").text(counter);
		

	});

	$("#image3").on("click", function(){
		counter += crystalThree;
		WinLoose();
		$("#counter-total").text(counter);
		

	});

	$("#image4").on("click", function(){
		counter += crystalFour;
		WinLoose();
		$("#counter-total").text(counter);
		

	});

	function WinLoose (){

	if (counter === targetNumber){
		wins += 1;
		alert("Winner!");
		$("#wins").text(wins);
		reset();

	} else if(counter > targetNumber){
		losses += 1;
		alert("step your game up!");
		$("#losses").text(losses);
		reset();
	}
	
}
	
});