let player1 = choose();
let player2 = chooseLeft();
let currentPlayer = player1;
let span1 = document.getElementById("1").textContent;
let span2 = document.getElementById("2").textContent;
let span3 = document.getElementById("3").textContent;
let span4 = document.getElementById("4").textContent;
let span5 = document.getElementById("5").textContent;
let span6 = document.getElementById("6").textContent;
let span7 = document.getElementById("7").textContent;
let span8 = document.getElementById("8").textContent;
let span9 = document.getElementById("9").textContent;

document.querySelector(".grid-container").onclick = (e) => {
  e.target.firstElementChild.textContent = `${currentPlayer}`;
  controller();
  nextPlayer();
};

function controller(x, y, z) {
  if (control(span1, span2, span3)) {
    won();
  } else if (control(span4, span5, span6)) {
    won();
  } else if (control(span7, span8, span9)) {
    won();
  }
}
function won() {
  console.log("you won");
}
function choose() {
  if (confirm("X or O") == true) {
    return "X";
  } else {
    return "O";
  }
}

function nextPlayer() {
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}
function chooseLeft() {
  if (player1 == "X") {
    return "O";
  } else {
    return "X";
  }
}

function control(x, y, z) {
  if (x != "") {
    if (x === y && x === z) {
      return true;
    } else {
      return false;
    }
  }
}
