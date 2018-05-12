//Business Logic
var player1 = "";
var player2 = "";
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
  $(".player1Name").val("");
  $(".player2Name").val("");
}
//User Interface (Front-end Logic)

$(document).ready(function(){
//After clicking start Button,, and the containers to hide to leave space for the game.
  $("button#start").click(function(event){
    player1 = new Dice(true);
    player2 = new Dice(false);
    $(".container-fluid").show();
    $(".container").hide();
//collects input Name from Player 1
    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);
//collects input Name from Player 2
    var player2Name = $ (".player2Name").val();
    $("#player2Name").text(player2Name);
//adding the names to the Game.
    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });
//On clicking the new game button it empties everything.
  $("button#new-game").click(function(event){
    $(".container-fluid").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#round-total-2").empty();
    $("total-score-2").empty();

    $(".container").show();
  });
//player1 throws the dice
  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.initial);
  });
//player2 throws the dice.
  $("button#player2-roll").click(function(event){
    player2.roll = throwdice ();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();$("#round-total-2").text(player2.initial);
  });
//player1clicks the hold button
  $("button#player1-hold").click(function(event){
    player1.hold();
    $("total-score-1").text(player1.final);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
  });
//player2 clicks the hold button.
  $("button#player2-hold").click(function(event){
    player2.hold();
    $("total-score-2").text(player2.final);
    $("round-total-2").empty();
    $("#die-roll-2").empty();
  });

});
