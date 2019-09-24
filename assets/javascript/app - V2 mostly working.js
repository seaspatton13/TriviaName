// // timer
// // var x = setInterval(function() {

// // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// // document.getElementById("timer").innerHTML = seconds + "s ";

// // if (distance < 0) {
// //     clearInterval(x);
// //     document.getElementById("timer").innerHTML = "EXPIRED";
// //   }
// // },1000);

// // document.getElementById('timer').innerHTML =
// //   03 + ":" + 00;
// // startTimer();

// // function startTimer() {
// //   var presentTime = document.getElementById('timer').innerHTML;
// //   var timeArray = presentTime.split(/[:]+/);
// //   var m = timeArray[0];
// //   var s = checkSecond((timeArray[1] - 1));
// //   if(s==59){m=m-1}
// //   //if(m<0){alert('timer completed')}
  
// //   document.getElementById('timer').innerHTML =
// //     m + ":" + s;
// //   setTimeout(startTimer, 1000);
// // }

// // function checkSecond(sec) {
// //   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
// //   if (sec < 0) {sec = "59"};
// //   return sec;
// // }

// var timeleft = 60;
// var downloadTimer = setInterval(function(){
//   document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("timer").innerHTML = "Finished"
//   }
// }, 1000);

// // declare variables
// var correctCount = 0;
// var wrongCount = 0;  
// var unanswered = 0;

// // hide the questions until the game starts 
// $(document).ready(funcion(){
// $('#timer').hide();
// $('.trivia-quest').hide();
// $('.results').hide();
// }
$(document).ready(function() {
  // when the page is loaded first, the timer, questions and summary must be hidden.
  
      $('#countdown').hide();
      $('.triviaQuest').hide();
      $('.results').hide();
  
      // Declare Variables
      var number = 90; //number of seconds
      var intervalId;
      var correctCount = 0;
      var wrongCount = 0;
      var unanswered = 0;
  
  //ALL FUNCTIONS
  
      // function to show questions
      function showQuestions(){
          $('#countdown').show();
          $('.triviaQuest').show();
          $('#gameDone').show();
      }
  
      // function for timer
      function countdownTimer(){
              intervalId = setInterval(decrement, 1000);
      }
     
          // function to decrement timer
      function decrement(){
          number--;
          $('#timer').html(" " + number + " " + "seconds");
          if (number ===1){
              $('#timer').html(" " + number + " " + "second");
          }
          else if(number ===0) {
              stop();
              hide();
              displaySummary();
          }
      }
  
          //function to clear timer
      function stop() {
          clearInterval(intervalId);
      }
  
          //function to hide text after questions are answered or timer out
      function hide(){
          $('#countdown').hide();
          $('.triviaQuest').hide();
          $('#gameDone').hide();
      }
  
      // function to display summary of game
      function displaySummary(){
          $('.results').show();
          unanswered = (8-(correctCount+wrongCount));
          $('#correctScore').text("Correct Answers:" + " " + correctCount); 
          $('#wrongScore').text("Wrong Answers:" + " " + wrongCount); 
          $('#unanswered').text("Unanswered:" + " " + unanswered); 
      }
  
  // CLICK EVENTS
  
      //Clicking Start Button
      $('#gameStart').on('click', function(){
          $('#gameStart').hide();
          showQuestions();
          countdownTimer();
      }); 
  
      //Clicking Done Button
      $('#gameDone').on('click', function(){
          $('#gameStart').hide(); 
          displaySummary();
      });
     
  
  });