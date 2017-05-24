// var topLeft = document.querySelector(".tl");
// var topRight = document.querySelector(".tr");
// var bottomLeft = document.querySelector(".bl");
// var bottomRight = document.querySelector(".br");

var buttons = document.querySelectorAll(".play");
var playBtn = document.querySelector(".start");
var strictBtn = document.querySelector(".strict");
var scoreDisplay = document.querySelector(".score");
var order = [];
var score = 0;
var play = false;
var strict = false;
var turn = false;

playBtn.addEventListener("click", function() {
	if (play === false) {

	} else {
		play = false;
		turn = false;
	}
});

strictBtn.addEventListener("click", function() {
	strict = !strict;
});

var i = 0;
function playNormal() {
	var random = Math.floor(Math.random() * 4);
	order.push(random);
	console.log(order);
	timeUp = 0;
	timeDown = 1000;
	for (var i = 0; i < order.length; i ++) {
		doLightUp(buttons[order[i]], timeUp);
		doLightOut(buttons[order[i]], timeDown);
		timeUp += 1000;
		timeDown += 1000;
	}
}

function doLightUp(button, time) {
  setTimeout(function() {
  	button.classList.add("lightUp");
  }, time);
}

function doLightOut(button, time) {
  setTimeout(function() {
  	button.classList.remove("lightUp");
  }, time);
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		if (turn === true) {

		}
	});
}

