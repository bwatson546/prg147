let clickers = 15;
let startTime = Date.now();
document.getElementById("score").innerHTML = (clickers) + " Ricks Rickmaining!";

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
		alert('De-rick-ed in ${taken} seconds!') //tells you your time
	}
}

for (var i=0; i < clickers; i++) {
	addClicker(); //puts a beautiful ginger boy in there
}