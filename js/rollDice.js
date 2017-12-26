const rollDice = function() {
  let diceNumber = [1,2,3,4,5,6];
  let integerValue = Math.floor(Math.random()*6);
  return diceNumber[integerValue];
}
