// app state ********************************************************
let playX = true;
let playCount = 0;
let hasWon = false;
let ties = 0;
let winsForX = 0;
let winsForO = 0;
const plays = ['', '', '', '', '', '', '', '', ''];

const checkForWin = (player) => {
  if (playCount >= 5) {
    // first column
    if (plays[0] === player && plays[3] === player && plays[6] === player) {
      highlight(0, 3, 6);
      return true;
    }
    // second column
    if (plays[1] === player && plays[4] === player && plays[7] === player) {
      highlight(1, 4, 7);
      return true;
    }
    // third column
    if (plays[2] === player && plays[5] === player && plays[8] === player) {
      highlight(2, 5, 8);
      return true;
    }

    // row 1
    if (plays[0] === player && plays[1] === player && plays[2] === player) {
      highlight(0, 1, 2);
      return true;
    }
    // row 2
    if (plays[3] === player && plays[4] === player && plays[5] === player) {
      highlight(3, 4, 5);
      return true;
    }
    // row 3
    if (plays[6] === player && plays[7] === player && plays[8] === player) {
      highlight(6, 7, 8);
      return true;
    }

    // check diags
    if (plays[0] === player && plays[4] === player && plays[8] === player) {
      highlight(0, 4, 8);
      return true;
    }
    if (plays[2] === player && plays[4] === player && plays[6] === player) {
      highlight(2, 4, 6);
      return true;
    }
  }
  return false;
};

const highlight = (a, b, c) => {
  document.getElementById(`${a + 1}`).style.backgroundColor = 'lime';
  document.getElementById(`${b + 1}`).style.backgroundColor = 'lime';
  document.getElementById(`${c + 1}`).style.backgroundColor = 'lime';
};

const endGame = (won, player) => {
  if (won) {
    player === 'X' && winsForX++ || winsForO++;
    updateScore(player);
    document.getElementById("message").innerHTML = `Player ${player} won this game!`;
  } else {
    ties++;
    updateScore(null);
    document.getElementById("message").innerHTML = `You both lose, suckaz.`;
  }
  hasWon = true;
}

// rendering views **************************************************
const playTurn = (e) => {
  let player = playX ? 'X': 'O';
  if (plays[e.target.id - 1] === "" && !hasWon) {
    e.target.innerHTML = player;
    plays[e.target.id - 1] = player;
    playCount++;
    if (checkForWin(player) === true) {
      endGame(true, player);
    } else {
      if (playCount === 9) {
        endGame(false, null);
      } else {
        playX = !playX;
      }
    }
  }
};

const updateScore = (player) => {
  if (player) {
    document.getElementById(`${player}-score`).innerHTML = player ? winsForX: winsForO;
  } else {
    document.getElementById(`ties`).innerHTML = ties;
  }
}

// user input *******************************************************
document.getElementById("board").addEventListener("click", function(e) {
  playTurn(e);
});

const init = () => {
  playX = true;
  playCount = 0;
  hasWon = false;
  document.getElementById("message").innerHTML = ``;
  for (let j = 1; j <= 9; j++) {
    plays[j-1] = "";
    document.getElementById(`${j}`).innerHTML = "";
    document.getElementById(`${j}`).style.backgroundColor = "white";
  }
}

document.getElementById("reset").addEventListener("click", init);