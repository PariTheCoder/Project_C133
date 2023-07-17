x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = empty;
speak_data = "";
to_number = "";
draw_apple = "set";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);
    If(Number.isInteger(to_number))
    "Started drawing apple"

}

function setup() {
 screen_width = window.InnerWidth
 screen_height = window_InnerHeight
 createCanvas()
 canvas.position
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload() {

}

function loadImage() {

}