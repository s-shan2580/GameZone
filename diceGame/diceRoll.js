let btn = document.querySelector(".playBtn");

btn.addEventListener("click", playGame);

function playGame() {

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");

  img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

  img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  let h1 = document.querySelector(".container h1");

  if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩 Player 1 Wins!";
  }

  else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins! 🚩";
  }

  else {
    h1.innerHTML = "Draw!";
  }
}





//---------METHOD 2 when we used refreshing page to start game -----------//
// if (window.performance.navigation.type === 1) {
//   rollDice();
// }

// function rollDice() {
//   var randomNumber1 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
//   var randomNumber2 = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;

//   document.querySelector(".img1").setAttribute("src", randomNumber1);
//   document.querySelector(".img2").setAttribute("src", randomNumber2);

//   changeTitle(randomNumber1, randomNumber2);
// }

// function changeTitle(num1, num2) {
//   if (num1 === num2) {
//     document.querySelector("h1").innerHTML = "Draw!";
//   } else if (num1 > num2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
//   } else {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
// }
