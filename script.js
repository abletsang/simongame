// var topLeft = document.querySelector(".tl");
// var topRight = document.querySelector(".tr");
// var bottomLeft = document.querySelector(".bl");
// var bottomRight = document.querySelector(".br");

var buttons = document.querySelectorAll(".play");
var playBtn = document.querySelector(".start");
var strictBtn = document.querySelector(".strict");
var scoreDisplay = document.querySelector(".score");
var messageDisplay = document.querySelector(".message");
var order = [];
var playerOrder = [];
var score = 0;
var play = false;
var strict = false;
var turn = false;

playBtn.addEventListener("click", function() {
	playBtn.classList.toggle("on");
	messageDisplay.textContent = "";
	play = !play;
	if (play === false) {
		turn = false;
		order = [];
	} else {
		playNormal();
	}
});

strictBtn.addEventListener("click", function() {
	strictBtn.classList.toggle("on");
	strict = !strict;
});

var i = 0;
function playNormal() {
	var random = Math.floor(Math.random() * 4);
	order.push(random);
	console.log(order);
	showOrder();
}

function showOrder() {
	timeUp = 0;
	timeDown = 1000;
	for (var i = 0; i < order.length; i ++) {
		doLightUp(buttons[order[i]], timeUp);
		doLightOut(buttons[order[i]], timeDown, i);
		timeUp += 1000;
		timeDown += 1000;
	}
}

function doLightUp(button, time) {
  setTimeout(function() {
  	setTimeout(function() {
  		button.classList.add("lightUp");
  	}, 300);
  }, time);
}

function doLightOut(button, time, num) {
  setTimeout(function() {
  	button.classList.remove("lightUp");
  	if (num === order.length - 1) {
  		turn = true;
  		playerOrder = [];
  	}
  }, time);
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
	var i = 0;
		if (turn === true) {
			playerOrder.push(Number(this.id));
			console.log(this.id);
			if (playerOrder[i] !== order[i]) {
				if (strict) {
					playBtn.classList.toggle("on");
					play = false;
					order = [];
					messageDisplay.textContent = "You lost! Click the PLAY button to play again.";
				} else {
					turn = false;
					messageDisplay.textContent = "Watch and try again.";
					setTimeout(function() {
						messageDisplay.textContent = "";
						showOrder();
					}, 1000)
					
				}
				return;
			} else if (playerOrder.length == order.length) {
				turn = false;
				console.log("all right!");
				score++;
				scoreDisplay.textContent = score;
				playNormal();
			}
			i++;
		}
	});
}

