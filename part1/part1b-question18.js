
function printTime(){
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}

window.setInterval(printTime, 1000);

