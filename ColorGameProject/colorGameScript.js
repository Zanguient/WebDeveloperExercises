//List of Colors
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
//Display the pickedColor
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//Starting Function that adds event listeners to each element
initialize();

function initialize(){
    //Difficulty Mode Button - Event Listener
    setModeButtons();
    //Squares Button - Event Listener and Logic
    setSquares();
    reset();
}

//Change the color of ALL squares
function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//Pick a random color
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generate array of random colors
function generateRandomColors(number){
    var array = [];
    for(var i = 0; i < number; i++){
        //get random color and push into array
        array.push(randomColor());
    }
    return array;
}

//Generates an RGB value of 0 - 255
function randomColor(){
    var r = Math.floor(Math.random() * 256); //r = Red
    var g = Math.floor(Math.random() * 256); //g = Green
    var b = Math.floor(Math.random() * 256); //b = Blue
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Generate Random Colors,
//  Pick a new random color from array
//  change colors of squares
resetButton.addEventListener("click", function(){
    reset();
});

//Reset Squares Colors
//If square has a color, then display it. Else hide it
function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i ++){
        squares[i].style.background = colors[i];
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } 
        else{
            squares[i].style.display = "none";
        }
    }
}
//Difficulty Mode Button - Event Listener
//Sets number of squares on screen according to mode selected
function setModeButtons(){
    for(var i = 0; i <modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent == "Easy"){
                numSquares = 3;
            } else if (this.textContent =="Medium"){
                numSquares = 6;
            } else{
                numSquares = 9;
            }
            reset();
        });
    }
}
function setSquares(){
    //Loop though each square 
    //      assign it a color from the colors array
    //      add a click event listener
    for(var i = 0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);             //Changes all squares to the clickedColor
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}
/**Refactored Code - This is the old method
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } 
        else{
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
});
mediumBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    mediumBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } 
        else{
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
});
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
});
    **/