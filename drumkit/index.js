var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("/drumkit/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("/drumkit/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var kickBass = new Audio("/drumkit/sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "f":
      var crash = new Audio("/drumkit/sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var tom3 = new Audio("/drumkit/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio("/drumkit/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var snare = new Audio("/drumkit/sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonClass);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
