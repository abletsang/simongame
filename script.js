// var topLeft = document.querySelector(".tl");
// var topRight = document.querySelector(".tr");
// var bottomLeft = document.querySelector(".bl");
// var bottomRight = document.querySelector(".br");

var buttons = document.querySelectorAll(".play");
var playBtn = document.querySelector(".start");
var strictBtn = document.querySelector(".strict");
var countDisplay = document.querySelector(".count");
var messageDisplay = document.querySelector(".message");
var order = [];
var playerOrder = [];
var count = 1;
var play = false;
var strict = false;
var turn = false;

var sound = [
	new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
	new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
	new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
	new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
	];

playBtn.addEventListener("click", function() {
	playBtn.classList.toggle("on");
	messageDisplay.textContent = "";
	play = !play;
	if (play === false) {
		turn = false;
		order = [];
		countDisplay.textContent = "0";
		count = 0;
	} else {
		countDisplay.textContent = "0";
		count = 0;
		playNormal();
	}
});

strictBtn.addEventListener("click", function() {
	strictBtn.classList.toggle("on");
	strict = !strict;
});

function playNormal() {
	var random = Math.floor(Math.random() * 4);
	order.push(random);
	console.log(order);
	count++;
	countDisplay.textContent = count;
	showOrder();
}

function showOrder() {
	timeUp = 0;
	timeDown = 1000;
	for (var i = 0; i < order.length; i ++) {
		doLightUp(buttons[order[i]], timeUp, order[i]);
		doLightOut(buttons[order[i]], timeDown, i);
		timeUp += 1000;
		timeDown += 1000;
	}
}

function doLightUp(button, time, num) {
  setTimeout(function() {
  	setTimeout(function() {
  		button.classList.add("lightUp");
  		sound[num].play();
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
		if (turn === true) {
			playerOrder.push(Number(this.id));
			sound[Number(this.id)].play();
			console.log(this.id);
			if (playerOrder[i] !== order[i]) {
				if (strict) {
					playBtn.classList.toggle("on");
					play = false;
					order = [];
					messageDisplay.textContent = "You lost! Click the PLAY button to play again.";
					return;
				} else {
					turn = false;
					messageDisplay.textContent = "Watch and try again.";
					setTimeout(function() {
						messageDisplay.textContent = "";
						showOrder();
					}, 1000);
					return;
				}
			}
			} if (playerOrder.length == order.length) {
				turn = false;
				if (count === 20) {
					playBtn.classList.toggle("on");
					play = false;
					order = [];
					messageDisplay.textContent = "YOU WON! Click the PLAY button to play again.";
					return;
				}
				setTimeout(function() {
					playNormal();
				}, 1000);
				
			}
		// }
	});
}

