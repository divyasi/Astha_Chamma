const Player = function(playerName, symbol) {
  this.playerName = playerName;
  this.symbol = symbol;
  this.currentPosition = 0;
};

Player.prototype.hasWon = function () {
};
module.exports = Player;
