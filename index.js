

for(var i=0 ; i< document.querySelectorAll(".drum").length; i++) 
{
document.querySelectorAll(".drum")[i].addEventListener(
  "click",
  function handelClick() {

    var buttonInnerHtml = this.innerHTML;
    buttonAnimation(buttonInnerHtml);

  switch(buttonInnerHtml)
  {
    case 'w' :
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case 'a' :
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case 's' :
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case 'd' :
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case 'j' :
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case 'k' :
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
    break;

    case 'l' :
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.log(buttonInnerHtml);
  }
  }
);
}



document,addEventListener("keydown", function (event){
  makesound(event.key);
  buttonAnimation(event.key);
});
function makesound (key) {
 
  switch(key)
  {
    case 'w' :
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
  //    alert(key);
    break;

    case 'a' :
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
  //    alert(key);
    break;

    case 's' :
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case 'd' :
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case 'j' :
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case 'k' :
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
    break;

    case 'l' :
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.log(key);
  }
  }



  function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function (){
      activeButton.classList.remove("pressed");
    }, 240);

  };