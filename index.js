const player1Points = document.getElementById("p1Points");
const player2Points = document.getElementById("p2Points");
const player1NameSubmit = document.getElementById("nameAndBtn1");
const player2NameSubmit = document.getElementById("nameAndBtn2");
const player1NameDisplay = document.getElementById("name1");
const player2NameDisplay = document.getElementById("name2");
const player1NameInput = document.getElementById("player1NameInput");
const player2NameInput = document.getElementById("player2NameInput");
const player1Btns = document.getElementById("player1Btns");
const player2Btns = document.getElementById("player2Btns");
const foul2Options = document.getElementById("foul2Options");

let player1Val = 0;
let player2Val = 0;
let player1Status = false;
let player2Status = false;
let foulShow2 = false;
let foulShow1 = false;

document.addEventListener("click", function (e) {
  switch (e.target.id) {
    case "player1NameSubmit":
      player1Btns.hidden = false;
      player1NameDisplay.innerHTML = `${player1NameInput.value}`;
      player1NameInput.hidden = true;
      player1NameSubmit.style.visibility = "hidden";
      break;
    case "player2NameSubmit":
      player2Btns.hidden = false;
      player2NameDisplay.innerHTML = `${player2NameInput.value}`;
      player2NameInput.hidden = true;
      player2NameSubmit.style.visibility = "hidden";
      break;

    case "red1":
      player1Val++;
      player1Points.textContent = player1Val;
      break;
    case "red2":
      player2Val++;
      player2Points.textContent = player2Val;
      break;

    case "yellow1":
      player1Val += 2;
      player1Points.textContent = player1Val;
      break;
    case "yellow2":
      player2Val += 2;
      player2Points.textContent = player2Val;
      break;

    case "green1":
      player1Val += 3;
      player1Points.textContent = player1Val;
      break;
    case "green2":
      player2Val += 3;
      player2Points.textContent = player2Val;
      break;

    case "brown1":
      player1Val += 4;
      player1Points.textContent = player1Val;
      break;
    case "brown2":
      player2Val += 4;
      player2Points.textContent = player2Val;
      break;

    case "blue1":
      player1Val += 5;
      player1Points.textContent = player1Val;
      break;
    case "blue2":
      player2Val += 5;
      player2Points.textContent = player2Val;
      break;

    case "pink1":
      player1Val += 6;
      player1Points.textContent = player1Val;
      break;
    case "pink2":
      player2Val += 6;
      player2Points.textContent = player2Val;
      break;

    case "black1":
      player1Val += 7;
      player1Points.textContent = player1Val;
      break;
    case "black2":
      player2Val += 7;
      player2Points.textContent = player2Val;
      break;

    case "foul1":
      if (foulShow1) {
        foul1Options.hidden = false;
        foulShow1 = false;
      } else if (!foulShow1) {
        foul1Options.hidden = true;
      }
      //player2Val += 4;
      //player2Points.textContent = player2Val;
      break;
    case "foul2":
      if (foulShow2) {
        foul2Options.hidden = true;
        foulShow2 = false;
      } else if (!foulShow2) {
        foul2Options.hidden = false;
        foulShow2 = true;
      }
      //player1Val += 4;
      //player1Points.textContent = player1Val;
      break;
  }
});
