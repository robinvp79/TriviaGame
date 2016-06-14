var pos = 0, game, questionNumber, answer, chA, chB, chC, chD, ans, correct = 0;
var incorrect = 0, unanswered = 0, number = 30;
var questions = [
    ["What animal is the symbol of the United States democratic party?","The hawk","The donkey","The eagle","The leopard","2"],
    ["Who was the Spanish surrealist painter best known for his work 'The Persistence of Memory'?","Pablo Picasso","Francisco Goya","Salvador Dalí","Joan Miro","3"],
	["In what year did the Titanic sink?","1912","1907","1909","1914","1"],
	["In what country did table tennis originate?","Russia","China","Japan","England" ,"4"],
	["Which liquor is made from the blue agave plant?","Vodka","Whisky","Tequila","Rum","3"],
	["In what year was the movie 'Grease' released?","1974","1976","1978","1979","3"],
	["Who Invented the Telephone?","Alexander G. Bell","Alexander H. Bell","Antonio Meucci","Elisha Gray","3"],
	["How many Olympic Games have been hosted in Africa?","Zero","One","Two","Three","1"],
	["In the United States which breed of dog is commonly known as a firehouse dog?","Poodle","German Shepherd","Doberman","Dalmatian","4"],
	["Who was at the top of Forbes 2015 list of the richest people in the world?","Bill Gates","Amancio Ortega","Carlos Slim","Warren Buffet","1"]
];
var images = ["assets/images/donkey.gif","assets/images/salvador.gif",
			"assets/images/1912.gif","assets/images/england.gif",
			"assets/images/tequila.gif","assets/images/1978.gif",
			"assets/images/antonio.gif","assets/images/zero.gif",
			"assets/images/dalmatian.gif","assets/images/gates.gif"];

function openGame(){
	$('#game').html('<button id="start">Start</button>');
}
openGame();

$('#start').click(showQuestions);

function showQuestions(){
	number = 30;
	timer();
	$('#questionNumber').html("Question "+(pos+1)+" of "+questions.length);
	game = $('#game');
	if(pos >= questions.length){
		$('#questionNumber').html("All done, heres how you did!");
		$('#game').html("Correct Answers: "+correct+"<br>");
		$('#game').append("Incorrect Answers: "+incorrect+"<br>");
		$('#game').append("Unanswered: "+unanswered+"<br>");
		$('#game').append('<button id="startOver">Start Over?</button>');
		clearInterval(counter);
		$('#startOver').click(resetGame);
		function resetGame(){
			pos = 0;
			correct = 0;
			incorrect = 0;
			unanswered = 0;
			showQuestions();
		}
	} else {
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	ans = questions[pos][5];
	answer = questions[pos][ans];
	$('#game').html("<h3>"+question+"</h3>");
	$('#game').append('<button id="chA" class="choices" value="1">'+chA+'</button>'+"<br><br>");
	$('#game').append('<button id="chB" class="choices" value="2">'+chB+'</button>'+"<br><br>");
	$('#game').append('<button id="chC" class="choices" value="3">'+chC+'</button>'+"<br><br>");
	$('#game').append('<button id="chD" class="choices" value="4">'+chD+'</button>'+"<br><br>");
	$('#chA').click(checkAnswer1);
	$('#chB').click(checkAnswer2);
	$('#chC').click(checkAnswer3);
	$('#chD').click(checkAnswer4);
	}
}

function checkAnswer1(){
	var x=1;
	checkAnswer(x);
}

function checkAnswer2(){
	var x=2;
	checkAnswer(x);
}

function checkAnswer3(){
	var x=3;
	checkAnswer(x);
}

function checkAnswer4(){
	var x=4;
	checkAnswer(x);
}

function checkAnswer(x){
		if(x == ans){
			correct++;
			$('#questionNumber').html("Correct!");
			$('#game').html('<img src='+images[pos]+ ' width="400px">');
			pos++;
			clearInterval(counter);
			setTimeout(showQuestions,5000);
		} else{
			incorrect++;
			$('#questionNumber').html("Nope!"+"<br>");
			$('#questionNumber').append("The Correct Answer was: "+answer);
			$('#game').html('<img src='+images[pos]+ ' width="400px">');
			pos++;
			clearInterval(counter);
			setTimeout(showQuestions,5000);
		}
}

function timer(){

	function run(){
		counter = setInterval(decrement, 1000);
	}

	function decrement(){
		number--;
		$('#timeStatus').html('<h2>Time Remaining: '+number+' seconds</h2>');
		if (number === 0){
			unanswered++;
			stop();
			$('#questionNumber').html("Out of Time!"+"<br>");
			$('#questionNumber').append("The Correct Answer was: "+answer);
			$('#game').html('<img src='+images[pos]+ ' width="400px">');
			pos++;
			setTimeout(showQuestions,5000);
		}
	}

	function stop(){
            clearInterval(counter);
    }

	run();
}