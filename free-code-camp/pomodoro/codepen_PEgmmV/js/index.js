

   

    function setTimer() {
      var setMin = document.getElementById('setMin').value;
      var sessions = document.getElementById("session").innerHTML;
      var min = document.getElementById("breaktime").value;
      document.getElementById('session').innerHTML = sessions;
      document.getElementById('timer').innerHTML = parseInt(setMin) + ":" + "00";
      document.getElementById('btime').innerHTML = min + ":" + "00";
    }

    function startBreakTime(func, arr) {
      if (arr[0] === "0" && arr[1] === "00") {
        breakTime(arr);
      }
    }


    function breakTime() {
      var currentSession = document.getElementById("session").innerHTML;
      var cTime = document.getElementById('btime').innerHTML;
      var tArray = cTime.split(/[:]+/);
      console.log(tArray);
      var m = parseInt(tArray[0]);
    
      var s = checkSecond((tArray[1] - 1));
      var session = parseInt(currentSession);

      if (s == 59) {
        m--;
      };

      document.getElementById('btime').innerHTML = m + ":" + s;
      var btimer = setTimeout(breakTime, 1000);
      session= session+1;

      if (tArray[0] === "0" && tArray[1] === "00") {
        var min = "0";
        var sec = "00";
        console.log("time has stopped");
        document.getElementById('btime').innerHTML = min + ":" + sec;
        clearTimeout(btimer);
        document.getElementById('session').innerHTML = session;
        notify();
      }
      

    }

    var audio = new Audio('/home/skywalker/workspace/Assignments/free-code-camp/pomodoro/codepen_PEgmmV/js/Loud_Alarm_Clock_Buzzer-Muk1984-493547174.mp3
');
    function notify() {
      audio.play();
      console.log("The notify tone is on");
    }


    function stopTimer(func, arr) {

      if (arr[0] === "0" && arr[1] === "00") {
        var min = "0";
        var sec = "00";
        console.log("time has stopped");
        document.getElementById('timer').innerHTML = min + ":" + sec;
        clearTimeout(func);
        notify();
        //breakTime(arr);
      }
    }


    function stopAlarm() {
      audio.pause();
    }


    function countdown() {
      var presentTime = document.getElementById('timer').innerHTML;
      var timeArray = presentTime.split(/[:]+/);
      console.log(timeArray);

      var m = timeArray[0];
      var s = checkSecond((timeArray[1] - 1));
      if (s == 59) {
        m--;

      };

      document.getElementById('timer').innerHTML = m + ":" + s;
      var timer = setTimeout(countdown, 1000);


      stopTimer(timer, timeArray);
      startBreakTime(timer, timeArray);
    }


    function checkSecond(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec
      };
      if (sec < 0) {
        sec = "59"
      };
      return sec;
    }

 function resetAll(){
     window.location.href=window.location.href
    }
