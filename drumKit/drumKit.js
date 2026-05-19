let btn = document.querySelectorAll(".set button");


//Adding event listener to all btns and Detecting button press.
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let btncontent = this.innerHTML;
    makesound(btncontent);
    buttonAnimation(btncontent);
  });
}

//Adding event listener to whole doc to capture any key press.
document.addEventListener("keydown", function (e) {
  makesound(e.key);
  buttonAnimation(e.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      alert(key + " key not recognised .");
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 120);
  }
}