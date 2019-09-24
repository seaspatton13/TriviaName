// timer
// var x = setInterval(function() {

// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// document.getElementById("timer").innerHTML = seconds + "s ";

// if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "EXPIRED";
//   }
// },1000);

// document.getElementById('timer').innerHTML =
//   03 + ":" + 00;
// startTimer();

// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}
  
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }

var timeleft = 60;
var downloadTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished"
  }
}, 1000);

// declare variables
var correctCount = 0;
var wrongCount = 0;  
var unanswered = 0;


$(document).ready(function () {
    // hide the questions until the game starts 
    $('#timer').hide();
    $('.triviaquest').hide();
    $('.results').hide();

// show questions when game starts
   function showQustions(){
       $('#timer').show();
       $('.triviaQuest').show();
       $('#gameDone')
   }
    


}() 


