let arr = [
  `${document.getElementById(1).textContent}`,
  `${document.getElementById(2).textContent}`,
  `${document.getElementById(3).textContent}`,
  `${document.getElementById(4).textContent}`,
  `${document.getElementById(5).textContent}`,
  `${document.getElementById(6).textContent}`,
  `${document.getElementById(7).textContent}`,
  `${document.getElementById(8).textContent}`,
  `${document.getElementById(9).textContent}`,
];
let winningArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [3, 6, 9],
  [2, 5, 8],
];

// Player codes

let currentPlayer;
let player1 = "X";
let player2 = "O";
currentPlayer = player2;

// Event Listeners
document.addEventListener("DOMContentLoaded", selection);

document.querySelector(".grid-container").addEventListener("click", (e) => {
  if (e.target.className == "grid-item") {
    e.target.firstElementChild.textContent = currentPlayer;
    attach();
    controller();
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
});

// functions

function selection() {
  if (confirm("Press Ok for X, cancel for O.")) {
    currentPlayer = player1;
  } else {
    currentPlayer = player2;
  }
}

function attach() {
  for (let i = 1; i < 10; i++) {
    arr[i - 1] = document.getElementById(`${i}`).textContent;
  }
}

function controller() {
  for (let i = 0; i < winningArr.length; i++) {
    if (control(winningArr[i])) {
      alert(`'${currentPlayer}' has WON!!`);
      reset();
    }
  }
}
function control(arg) {
  if (arr[arg[0] - 1] != "" && arr[arg[2] - 1] != "" && arr[arg[1] - 1] != "") {
    if (
      arr[arg[0] - 1] == arr[arg[1] - 1] &&
      arr[arg[0] - 1] == arr[arg[2] - 1]
    ) {
      return true;
    }
  }
}

function reset() {
  arr = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 10; i++) {
    arr[i] = "";
    document.getElementById(`${i + 1}`).textContent = "";
  }
}
