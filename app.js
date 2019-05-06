// user input *******************************************************
let playX = true;

document.getElementById("cell11").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell11").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell12").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell12").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell13").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell13").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell21").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  console.log('player:', player);
  document.getElementById("cell21").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell22").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell22").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell23").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell23").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell31").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell31").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell32").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell32").innerHTML = player;
  playX = !playX;
});
document.getElementById("cell33").addEventListener("click", () => {
  let player = playX ? 'X' : 'O';
  document.getElementById("cell33").innerHTML = player;
  playX = !playX;
});
// rendering views **************************************************


// app state ********************************************************
