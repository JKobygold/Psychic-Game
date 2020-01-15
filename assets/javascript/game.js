
// for guessing a letter the computer will need a full alaphabet. I give the option in this array
 var DaLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  var wins = 0;
  var losses = 0;
  var GuessesLeft = 9;
  var guessedLetters = [];
  var YourGuessesSoFar: 0;
  var WinCounter = 0;
  Var LossCounter = 0;

 

    
    var wins =  document.getElementsByTagName("P")[0].innerHTML = "0";
    var losses =  document.getElementsByTagName("P")[0].innerHTML = "0";
    var GuessesLeft =  document.getElementsByTagName("P")[0].innerHTML = "0";
    var guessedLetters = document.getElementsByTagName("P")[0].innerHTML = "0";
    var YourGuessesSoFar =  document.getElementsByTagName("P")[0].innerHTML = "0";
    var WinCounter =  document.getElementsByTagName("P")[0].innerHTML = "0";
    var LossCounter =  document.getElementsByTagName("P")[0].innerHTML = "0";

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = DaLetters[Math.floor(Math.random() * DaLetters.length)];

      
      if ((userGuess === computerGuess)){
        wins++
      }
     


       /* if ((userGuess === "r" && computerGuess === "s") ||
         /* (userGuess === "s" && computerGuess === "p") || 
          (userGuess === "p" && computerGuess === "r")) {
          wins++;
        } else if (userGuess === computerGuess) {
          ties++;
        } else {
          losses++;
        }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
      }
    };
  </script>

</body>

</html>
