
// variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var intitialguesses = 10;
var guessesleft = intitialguesses;
var guessed = [];
// var guessedstart = [];

// creates event at key release
document.onkeyup = function(event) {
    
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    
    console.log(userguess);

    var computerguess = letters[Math.floor(Math.random()*letters.length)];
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var leftText = document.getElementById("left-text");
    var guessedText = document.getElementById("guessed-text")
    // if letter is guessed right you win and increases win column by 1
    if (userguess === computerguess) {
        alert("You Win!");
        wins ++;
        guessesleft = intitialguesses;
        guessed = [];
    }
    // adds 1 to loss column and resets stats if # of guesses runs out
    else if (guessesleft === 0) {
        alert("Game over!");
        losses ++;
        guessesleft = intitialguesses;
        guessed = [];
        
    }
    // if letter is not correct creates an alert to try again and subtracts 1 from # of guesses
    else {
        console.log("Try Again");
        guessesleft --;
        // pushes keys guessed by user into the empty guesses array
        guessed.push(userguess);
        console.log(guessesleft);
    }
    
    

    

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    leftText.textContent = "Guesses remaining: " + guessesleft;
    guessedText.textContent = "Your guesses: " + guessed;
    
}