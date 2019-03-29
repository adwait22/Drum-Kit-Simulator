for( var i=0; i < document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" , playSound);
}

function playSound ()
{
  var soundArray = [ "crash.mp3" , "kick-bass.mp3" , "snare.mp3" , "tom-1.mp3" , "tom-2.mp3" , "tom-3.mp3" , "tom-4.mp3"];
  var audio = new Audio("sounds/" + soundArray[i]);
  audio.play();
}
