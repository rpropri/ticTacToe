// app state ********************************************************
let playX = true;
let playCount = 0;
const plays = ['', '', '', '', '', '', '', '', ''];

const checkForWin = (player, cell) => {
  if (playCount >= 5) {
    // first column
    if (plays[0] === player && plays[3] === player && plays[6] === player) {
      return true;
    }
    // second column
    if (plays[1] === player && plays[4] === player && plays[7] === player) {
      return true;
    }
    // third column
    if (plays[2] === player && plays[5] === player && plays[8] === player) {
      return true;
    }

    if (plays[0] === player && plays[1] === player && plays[2] === player) {
      return true;
    }
    if (plays[3] === player && plays[4] === player && plays[5] === player) {
      return true;
    }
    if (plays[6] === player && plays[7] === player && plays[8] === player) {
      return true;
    }

    // check diag
    if (plays[0] === player && plays[4] === player && plays[8] === player) {
      return true;
    }
    if (plays[2] === player && plays[4] === player && plays[6] === player) {
      return true;
    }
  }
  return false;
};

// user input *******************************************************
for (let i = 1; i <= 9; i++) {
  document.getElementById(`cell${i}`).addEventListener("click", () => {
    let player = playX ? 'X' : 'O';
    if (document.getElementById(`cell${i}`).innerHTML === "") {
      document.getElementById(`cell${i}`).innerHTML = player;
      plays[i-1] = player;
      playCount++;
      if (checkForWin(player, i)) {
        alert(`Player ${player} wins!`);
      } else {
        if (playCount === 9) {
          alert(`Game ended in a scratch. Nobody wins.`);
        } else {
          playX = !playX;

        }
      }
    }
  });    
}

const init = () => {
  playX = true;
  playCount = 0;
  for (let j = 1; j <= 9; j++) {
    plays[j-1] = "";
    document.getElementById(`cell${j}`).innerHTML = "";
  }
}

document.getElementById("reset").addEventListener("click", init);

// rendering views **************************************************


