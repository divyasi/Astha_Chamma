let idCounter = 1;
const generateRow = function(noOfCells) {
  let row = document.createElement("tr");
  for (var count = 0; count < noOfCells; count++)
    row.appendChild(generateCell());
  return row;
};

const generateCell = function(){
  let cell = document.createElement('td');
  cell.id = idCounter++;
  return cell;
};

const generateTable = function(noOfRows,noOfCols){
  let board = document.getElementById('board');
  for(let count = 0; count < noOfRows; count++){
    board.appendChild(generateRow(noOfCols));
  }
};

const updateCell = function(id,value){
  document.getElementById(id).innerHTML = value;
};

const changeClass = function(id,className,value=''){
  document.getElementById(id).className = className;
  document.getElementById(id).innerText = value;
};

const startGame = function(){
  generateTable(5,5);
  changeClass('3','safePlace');
  changeClass('11','safePlace');
  changeClass('13','home','home');
  changeClass('15','safePlace');
  changeClass('23','safePlace');
  insertCoins(3,'player1');
  insertCoins(23,'player2');
};

const insertCoins = function(id,player){
  let safePlace = document.getElementById(id);
  for(let count = 0; count < 4; count++){
    let coin = document.createElement('button');
    coin.className = player;
    safePlace.appendChild(coin);
  }
};



window.onload = startGame;
