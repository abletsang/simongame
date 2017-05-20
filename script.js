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

playBtn.addEventListener("click", function() {
	if (play === false) {
		play = true;
	} else {
		play = false;
	}
});

strictBtn.addEventListener("click", function() {
	if (strict === false) {
		strict = true;
	} else {
		strict = false;
	}
});

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		console.log("connect");
	});
}

