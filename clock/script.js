const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date(); //This sets the time in the first place
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec)

	let hrPosition = (hr*360/12)+(min*(360/60)/12); //as below
	let minPosition = (min*360/60)+(sec*(360/60)/60); //as below; then also makes it move along with the seconds by adding the positional value of the second hand to the minute hand
	let secPosition = sec*360/60; //360 = degrees in a circle, 60 = seconds in a minute; divide 360 by 60 and multiply by sec value to get accurate positions

function runTheClock() { //The function is run every second, updating the hrPosition anyway.
	hrPosition = hrPosition+(3/360)
	minPosition = minPosition+(6/60)
	secPosition = secPosition+6; //6 is the number of degrees per second a second hand moves
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; //spins the hour hand
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"; //spins the minute hand
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"; //spins the second hand
}

var interval = setInterval(runTheClock, 1000);