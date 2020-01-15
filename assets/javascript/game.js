
// for guessing a letter the computer will need a full alaphabet. I give the option in this array
 var DaLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  var wins = 0;
  var losses = 0;
  var GuessesLeft = 9;
  var guessedLetters = [];
  var YourGuessesSoFar: 0;
  var WinCounter = 0;
  Var LossCounter = 0;

 

    
    var wins =  document.getElementsByTagName("P")[1].innerHTML = "0";
    var losses =  document.getElementsByTagName("P")[2].innerHTML = "0";
    var GuessesLeft =  document.getElementsByTagName("P")[3].innerHTML = "0";
    var guessedLetters = document.getElementsByTagName("P")[4].innerHTML = "0";
    var YourGuessesSoFar =  document.getElementsByTagName("P")[5].innerHTML = "0";
    var WinCounter =  document.getElementsByTagName("P")[6].innerHTML = "0";
    var LossCounter =  document.getElementsByTagName("P")[7].innerHTML = "0";

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = DaLetters[Math.floor(Math.random() * DaLetters.length)];

      
      if ((userGuess === computerGuess)){
        wins++
      }
     /*  The intended purpose of the code above is to interact with the index.html file via manipulating variables in p tag.
     This is very clearly *not finished* given poor planning and learning on my part. I will though sketch out a pseudocode 

       I created variables comperable to each part of the html that needs to be activly edited. The key.event should take input from the user's keyboard and then match up the user's selected  key to the computer.

        -the user guesses 1/26 letters. 
        - computer does as well

      if the user = computer's guess. wins variable should increse by 1, if the user is incorrect the letter they choose will be posted to the variable guessed letter which should be posted to the html's comperable p tag.

    the user should then have 9 guesses after which the losses will increse by one (and the letters on teh screen dissapear).
    -----
    once either the user or computer wins up to 9, the entire game resets 