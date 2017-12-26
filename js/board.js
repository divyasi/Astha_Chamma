const generateRow = function(lines) {
  let row;
  let elementName;
  for (var count = 0; count < lines; count++) {
    row = document.createElement("tr");
    row.id = count+1;
    console.log(row.id);
    elementName = document.getElementById("board");
    generateCols(lines,row);
    elementName.appendChild(row);
  }
}

const generateCols = function(lines,row) {
  let col;
  let elementName; countCols = 6;
  for (var count = 0; count < lines; count++) {
    col = document.createElement("td");
    row.appendChild(col);
  }
}

const board = function() {
  generateRow(5);
}

window.onload = board;
