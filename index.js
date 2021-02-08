// PLAYER ONE

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // GET RNDM NR BETWEEN 1 AND 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //DICE 1.png to 6.png

var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png



var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);



// PLAYER TWO

var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;


var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// ANNOUNCE WINNER

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏳️‍ Player 1 Wins!";
} else if (randomNumber1 < randomNumber2 ) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏳️‍";
} else {
  document.querySelector("h1").innerHTML = "DRAW!!!"
}
