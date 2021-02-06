var lastDayOfSchool = new Date ("Jun 4, 2021 3:15:00").getTime();

var dateEquation = setInterval(function() {

  var timeNow = new Date().getTime();

  var timeLeft = lastDayOfSchool - timeNow;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  var daysGrammar = (days != 1) ? " Days " : " Day "
  var hoursGrammar = (hours != 1) ? " Hours " : " Hour "
  var minutesGrammar = (minutes != 1) ? " Minutes " : " Minute "
  var secondsGrammar = (seconds != 1) ? " Seconds " : " Second "
  var isAreGrammar = (days!= 1) ? "are ":"is "

  document.getElementById("time").innerHTML = "Percisely " + days + daysGrammar + hours + hoursGrammar
  + minutes + minutesGrammar + seconds + secondsGrammar;

  document.getElementById("days").innerHTML = "There " + isAreGrammar + days + daysGrammar +  " of School Left"

  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "FINALLY SUMMER IS HERE!";
  }
}, 1000);

