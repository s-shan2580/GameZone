


let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).keydown(function () {

  if (!started) {
    started = true;
    nextSequence();
  }

});


function nextSequence() {

  level++;
  $("#level-title").text(`Level ${level}`);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  console.log(gamePattern);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}


$(".btn").on("click", function () {

  if (!started) return;

  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  console.log(userClickedPattern);

  checkAnswer(userClickedPattern.length - 1);

});


function checkAnswer(currentLevel) {

  if (
    userClickedPattern[currentLevel] ===
    gamePattern[currentLevel]
  ) {

    if (
      userClickedPattern.length ===
      gamePattern.length
    ) {

      userClickedPattern = [];

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text(
      "Game Over, Press Any Key to Restart"
    );

    startOver();

  }

}



function startOver() {

  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;

}


function playSound(name) {

  let audio = new Audio("sounds/" + name + ".mp3");

  audio.play();

}


function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}





































































// let buttonColours = ["red", "blue", "green", "yellow"];
// let gamePattern = [];
// let userClickedPattern = [];
// let level = 0;

// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text(`Level ${level}`);

//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   console.log(gamePattern);

//   $("#" + randomChosenColour)
//     .fadeOut(100)
//     .fadeIn(100);

//   playSound(randomChosenColour);
// }

// $(".btn").on("click", function () {
//   let userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//   console.log(userClickedPattern);
// });

// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");

//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// let started = false;
// $(document).keypress(function () {
//   if (!started) {
//     started = true;
//     nextSequence();
//   }
// });


