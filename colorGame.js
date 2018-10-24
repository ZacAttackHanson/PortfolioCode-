var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var resetButton= document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn")
var hardBtn = document.querySelector("#hardbtn")







easyBtn.addEventListener("click", function(){
	numberOfSquares=3;
    hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor;
	
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];}
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		else{squares[i].style.display = "none";
	}
	}
});

hardBtn.addEventListener("click", function(){
	numberOfSquares=6;
easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor;

	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];}
		

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}

});






function fetty() {
	Math.floor(Math.random()* 500)
	// body...
}


for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.background;

		if (clickedColor === pickedColor) {
			messageDisplay.textContent= "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.background = "black";
			messageDisplay.textContent= "Try Again"
		}
		// body...
	})
}

function changeColors(color) {

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
	// body...
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors [random];
}


function generateRandomColors(num){

	var arr = []

    for (var i = 0; i < num; i++) {

arr.unshift(randomColor())

    	 }

	return arr;
}




function randomColor(){ 

var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

 return "rgb(" + r + ", " + g + ", " + b + ")";

}

/*reset button is down here because for some unknown reason it wont work up top*/

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

h1.style.background = "steelblue"
})