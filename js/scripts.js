//Business Logic
var player1 = "";
var player2 = "";

var throwdice = function () {
  return Math.floor(6 * Math.random()) +1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert ("Sorry!" + this.playerName) + "You have rolled one!")
  } else {
    this.tempscore += this.roll;
  }
}
