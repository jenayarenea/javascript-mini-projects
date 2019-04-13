 window.onload = function () {

          var minutes = 00; 
          var seconds = 00; 
          var displaySeconds = document.getElementById("seconds")
          var displayMinutes = document.getElementById("minutes")
          var startButton = document.getElementById('startTimer');
          var stopButton = document.getElementById('stopTimer');
          var resetButton = document.getElementById('resetTimer');
          var Interval ;

          startButton.onclick = function() {

             clearInterval(Interval);
             Interval = setInterval(startTimer, 1000);
          }

            stopButton.onclick = function() {
               clearInterval(Interval);
          }


          resetButton.onclick = function() {
             clearInterval(Interval);
            seconds = "00";
            minutes = "00";
            displaySeconds.innerHTML = seconds;
            displayMinutes.innerHTML = minutes;
          }



          function startTimer () {
            seconds++; 

            if(seconds <= 9){
              displaySeconds.innerHTML = "0" + seconds;
            }

            if (seconds > 9){
              displaySeconds.innerHTML = seconds;

            }

            if (seconds > 59) {
              console.log("minutes");
              minutes++;
              displayMinutes.innerHTML = "0" + minutes;
              seconds = 0;
              displaySeconds.innerHTML = "0" + 0;
            }

            if (minutes > 9){
              displayMinutes.innerHTML = minutes;
            }

          }


        }    