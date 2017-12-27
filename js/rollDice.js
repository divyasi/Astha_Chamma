const rollDice = function() {
  let slideValue = [1,2,3,4,5,6];
  let randomNumber = Math.floor(Math.random()*6);
  return slideValue[randomNumber];
}

const printNumber = function() {
  let num = rollDice();
  document.getElementById('slide').innerHTML = num;
}

const onload = function() {
  document.getElementById('slide').addEventListener('click',printNumber);
}
window.onload = onload;
