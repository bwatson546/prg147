let clickers = 20;
let clickersRestart = clickers;
let startTime = Date.now();
let victoryTime = 10;
let next_difficulty = "Try again on HARD mode!";
let difficulty = "normal";
document.getElementById("score").innerHTML = (clickers) + " Ricks Rickmaining!";

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'res/data.xml');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var items = request.responseXML.getElementsByTagName('rule');
		var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';
		document.getElementById('rules').innerHTML = output;
	}
}
request.send();

var request2;
if (window.XMLHttpRequest) {
	request2 = new XMLHttpRequest();
} else {
	request2 = new ActiveXObject("Microsoft.XMLHTTP");
}
request2.open('GET', 'res/data2.json');
request2.onreadystatechange = function() {
	if ((request2.readyState===4) && (request2.status===200)) {
		var items = JSON.parse(request.responseText);
		var output2 = '<ul>';
		for (var key in items) {
			output2 += '<li>' + items[key].note + '</li>';
		}
		output += '</ul>';
		document.getElementById('note').innerHTML = output2;
	}
}
request2.send();

function sync(dom, pos) {
	dom.style.left = `${pos.x}px`; //takes the value of pos.x and assigns it to a random x value, measured in pixels, within the game board
	dom.style.top = `${pos.y}px`; //takes the value of pos.y and assigns it to a random y value, measured in pixels, within the game board
}

function addClicker() {
	const pos = {
			x: Math.random() * 500, //sets the value of pos.x
			y: Math.random() * 300 //sets the value of pos.y
		};
		const img = new Image();
		img.src = "res/images/rick.png"; //A man who will never give you up
		img.style.position = "absolute"; //makes sure that the CSS tells Rick to stay RIGHT there
		img.addEventListener("click", removeClicker, false); //makes the page watch for a click on the "clicker"; set to false by default so they don't just immediately disappear
	  
		document.querySelector("#board").appendChild(img); //selects the valid area for the image to appear
		sync(img, pos); //syncs the location of the image onto the board
}

function removeClicker(e) { //the function to do the unthinkable and make him run around and desert you
	document.getElementById("score").innerHTML = (clickers - 1) + " Ricks Rickmaining!";
	e.target.parentNode.removeChild(e.target); //triggers the event to remove the target clicker when clicked on
	clickers--; //reduces the clickers variable by 1
	checkGameOver(); //checks if the clickers variable is 0; when it is, ends game
}

function checkGameOver() {
	if (clickers === 0) {
		const taken = Math.round((Date.now() - startTime) / 1000); //takes the current time, subtracts the start time, that's how long it took
		if (taken <= victoryTime) {
			alert(`De-rick-ed in ${taken} seconds!\n\nYou won!\n\n${next_difficulty}`); //tells you your time
			if (difficulty == "normal") {
			document.getElementById('message').innerHTML = "Rick claps in light amusement.";
			}
			if (difficulty == "hard") {
				document.getElementById('message').innerHTML = "Rick narrows his eyes.";
			}
			if (difficulty == "demon") {
				document.getElementById('message').innerHTML = "Rick is impressed! He prepares to deal with you.";
			}
			if (difficulty == "rick") {
				document.getElementById('message').innerHTML = "Rick lies defeated on the ground.\nYou never gave him up, or let him down.\nNow, in his final moments, he can say you certainly never deserted him.\nSatisfied at his equal, he rests.\n\n\nTHE END";
			}
			document.getElementById('scold').innerHTML = "";			
		} else {
			alert(`De-rick-ed in ${taken} seconds!\n\nLittle too slow!`)
		}
	}
}

var x = document.getElementById("theme"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

for (var i=0; i < clickers; i++) {
	addClicker(); //puts a beautiful ginger boy in there
}

function restart() {
	if (clickers === 0) {
		clickers = clickersRestart;
		victoryTime = 10;
		startTime = Date.now();
		next_difficulty = "Try again on HARD mode!";
		difficulty = "normal";
		document.getElementById('message').innerHTML = "Rick smirks at you... mockingly.";
		document.getElementById('objective').innerHTML = "De-Rick the board in 10 seconds!"
		for (var i=0; i < clickers; i++) {
			addClicker(); //puts a beautiful ginger boy in there
		}
	} else {
			document.getElementById('scold').innerHTML = "You gotta finish the game first!"
	}
}

function hardMode() {
	if (clickers === 0) {
		clickers = 30;
		victoryTime = 12;
		startTime = Date.now();
		next_difficulty = "Try again on DEMON mode!";
		difficulty = "hard";
		document.getElementById('message').innerHTML = "Rick observes with slight interest.";
		document.getElementById('objective').innerHTML = "De-Rick the board in 12 seconds!"
		for (var i=0; i < clickers; i++) {
			addClicker(); //puts a beautiful ginger boy in there
		}
	}
}

function demonMode() {
	if (clickers === 0) {
		clickers = 40;
		victoryTime = 15;
		startTime = Date.now();
		next_difficulty = "Try again on ULTI-RICK mode!";
		difficulty = "demon";
		document.getElementById('message').innerHTML = "Rick gives you his full attention.";
		document.getElementById('objective').innerHTML = "De-Rick the board in 15 seconds!";
		for (var i=0; i < clickers; i++) {
			addClicker(); //puts a beautiful ginger boy in there
		}
	}
}

function rickMode() {
	if (clickers === 0) {
		clickers = 100;
		victoryTime = 25;
		startTime = Date.now();
		next_difficulty = "There is nothing more for you to click.\nYou are truly the master of clicking on jpeg men.";
		difficulty = "rick";
		document.getElementById('message').innerHTML = "Rick stands before you in his full glory.\nThis is your moment!";
		document.getElementById('objective').innerHTML = "De-Rick the board in 30 seconds!\nDon't get carpal tunnel!";
		for (var i=0; i < clickers; i++) {
			addClicker(); //puts a beautiful ginger boy in there
		}
	}
}