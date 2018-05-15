//Business Logic
var firstplayer = "";
var secondplayer = "";

//Mathematics for throwing the dice
var throwdice = function () {
  return Math.floor(6 * Math.random()) +1;
}

//Dice is the object and all initial coounts to be 0
function Dice(spin) {
  this.roll = 0;
  this.initial = 0;
  this.final = 0;
  this.spin = spin;
  this.playerName;
}

//When the player rolls one (Cheked one).
Dice.prototype.rollone = function() {
  if (this.roll === 1) {
    this.initial = 0;
    alert ("Sorry!-" + this.playerName + "-You have rolled one!")
    //changing turns
  } else {
    this.initial += this.roll;
  }
}

//When you press hold button.
Dice.prototype.hold = function() {
  this.final += this.initial;
  this.initial = 0;
  //Changing turns on pressing Hold Button
  alert(this.playerName + "Sorry! It's opponent's turn");
}

//Check the winner.
Dice.prototype.winnerCheck = function(){
  if (this.final >= 30) {
    alert(this.playerName + ",, congrats you won")
  }
}

//New Game it empties
Dice.prototype.newGame = function() {
  this.roll = 0;
  this.initial = 0;
  this.final = 0;
  this.playerName = "";
}

//After pressing the New Game it empties.
var clearValues = function() {
  $(".firstplayerName").val("");
  $(".secondplayerName").val("");
}

//User Interface (Front-end Logic)

$(document).ready(function(){

//After clicking start Button,, and the containers to hide to leave space for the game.
  $("button#start").click(function(event){
    firstplayer = new Dice(true);
    secondplayer = new Dice(false);
    $(".container-fluid").show();
    $(".container").hide();

//collects input Name from Player 1
    var firstplayerName = $(".firstplayerName").val();
    $("#firstplayerName").text(firstplayerName);

//collects input Name from Player 2
    var secondplayerName = $ (".secondplayerName").val();
    $("#secondplayerName").text(secondplayerName);

//adding the names to the Game.
    firstplayer.playerName = firstplayerName;
    secondplayer.playerName = secondplayerName;
  });

//On clicking the new game button it empties everything.
  $("button#new-game").click(function(event){
    $(".container-fluid").hide();
    clearValues();
    firstplayer.newGame();
    secondplayer.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#round-total-2").empty();
    $("total-score-2").empty();

    $(".container").show();
  });

//firstplayer throws the dice
  $("button#firstplayer-roll").click(function(event){
    firstplayer.roll = throwdice();
    $("#die-roll-1").text(firstplayer.roll);
    firstplayer.rollone();
    $("#round-total-1").text(firstplayer.initial);
  });

//secondplayer throws the dice.
  $("button#secondplayer-roll").click(function(event){
    secondplayer.roll = throwdice ();
    $("#die-roll-2").text(secondplayer.roll);
    secondplayer.rollone();$("#round-total-2").text(secondplayer.initial);
  });

//firstplayerclicks the hold button
  $("button#firstplayer-hold").click(function(event){
    firstplayer.hold();
    $("total-score-1").text(firstplayer.final);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();

  
//secondplayer clicks the hold button.
  $("button#secondplayer-hold").click(function(event){
    secondplayer.hold();
    $("total-score-2").text(secondplayer.final);
    $("round-total-2").empty();
    $("#die-roll-2").empty();
  });

});
