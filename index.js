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
const eventFeed = document.getElementById("eventFeed");

let player1Val = 0;
let player2Val = 0;
let player1Status = false;
let player2Status = false;
let foulShow2 = false;
let foulShow1 = false;
let playerBreak = 0;
let player1 = true;
let player2 = false;
let player1Name = "";
let player2Name = "";

const addEvent = (player, playerName, ball, other) => {
  if (other == "missed1") {
    eventFeed.insertAdjacentHTML(
      "afterbegin",
      `<div class="player1Event"><p>${
        playerName + " missed their shot"
      }</p></div>
    <div><p class="break">End of Break</p></div>
    <div></div>`
    );
  } else if (other == "missed2") {
    eventFeed.insertAdjacentHTML(
      "afterbegin",
      `<div></div>
    <div><p class="break">End of Break</p></div>
    <div class="player2Event"><p>${playerName + " missed their shot"}</p></div>`
    );
  } else if (other == "foul1") {
    eventFeed.insertAdjacentHTML(
      "afterbegin",
      `<div class="player1Event"><p>${
        playerName + " committed a foul on the " + ball
      }</p></div>
    <div><p class="break">End of Break</p></div>
    <div></div>`
    );
  } else if (other == "foul2") {
    eventFeed.insertAdjacentHTML(
      "afterbegin",
      `<div></div>
    <div><p class="break">End of Break</p></div>
    <div class="player2Event"><p>${
      playerName + " committed a foul on the " + ball
    }</p></div>`
    );
  } else if (player) {
    eventFeed.insertAdjacentHTML(
      "afterbegin",
      `<div class="player1Event"><p>${playerName + " potted " + ball}</p></div>
    <div><p class="break">Break: ${playerBreak}</p></div>
    <div></div>`
    );
  } else if (!player) {
    eventFeed.insertAdjacentHTML(
      "afterbegin",
      `<div></div>
    <div><p class="break">Break: ${playerBreak}</p></div>
    <div class="player2Event"><p>${playerName + " potted " + ball}</p></div>`
    );
  }
};

document.addEventListener("click", function (e) {
  switch (e.target.id) {
    case "player1NameSubmit":
      player1Name = player1NameInput.value;
      player1Btns.hidden = false;
      player1NameDisplay.innerHTML = player1NameInput.value;
      player1NameInput.hidden = true;
      player1NameSubmit.style.visibility = "hidden";
      break;
    case "player2NameSubmit":
      player2Name = player2NameInput.value;
      player2Btns.hidden = false;
      player2NameDisplay.innerHTML = player2NameInput.value;
      player2NameInput.hidden = true;
      player2NameSubmit.style.visibility = "hidden";
      break;

    case "red1":
      player1Val++;
      player1Points.textContent = player1Val;
      playerBreak++;
      addEvent(player1, player1Name, "red");
      break;
    case "red2":
      player2Val++;
      player2Points.textContent = player2Val;
      playerBreak++;
      addEvent(player2, player2Name, "red");
      break;

    case "yellow1":
      player1Val += 2;
      player1Points.textContent = player1Val;
      playerBreak += 2;
      addEvent(player1, player1Name, "yellow");
      break;
    case "yellow2":
      player2Val += 2;
      player2Points.textContent = player2Val;
      playerBreak += 2;
      addEvent(player2, player2Name, "yellow");
      break;

    case "green1":
      player1Val += 3;
      player1Points.textContent = player1Val;
      playerBreak += 3;
      addEvent(player1, player1Name, "green");
      break;
    case "green2":
      player2Val += 3;
      player2Points.textContent = player2Val;
      playerBreak += 3;
      addEvent(player2, player2Name, "green");
      break;

    case "brown1":
      player1Val += 4;
      player1Points.textContent = player1Val;
      playerBreak += 4;
      addEvent(player1, player1Name, "brown");
      break;
    case "brown2":
      player2Val += 4;
      player2Points.textContent = player2Val;
      playerBreak += 4;
      addEvent(player2, player2Name, "brown");
      break;

    case "blue1":
      player1Val += 5;
      player1Points.textContent = player1Val;
      playerBreak += 5;
      addEvent(player1, player1Name, "blue");
      break;
    case "blue2":
      player2Val += 5;
      player2Points.textContent = player2Val;
      playerBreak += 5;
      addEvent(player2, player2Name, "blue");
      break;

    case "pink1":
      player1Val += 6;
      player1Points.textContent = player1Val;
      playerBreak += 6;
      addEvent(player1, player1Name, "pink");
      break;
    case "pink2":
      player2Val += 6;
      player2Points.textContent = player2Val;
      playerBreak += 6;
      addEvent(player2, player2Name, "pink");
      break;

    case "black1":
      player1Val += 7;
      player1Points.textContent = player1Val;
      playerBreak += 7;
      addEvent(player1, player1Name, "black");
      break;
    case "black2":
      player2Val += 7;
      player2Points.textContent = player2Val;
      playerBreak += 7;
      addEvent(player2, player2Name, "black");
      break;

    case "foul1":
      if (foulShow1) {
        foul1Options.hidden = true;
        foulShow1 = false;
      } else if (!foulShow1) {
        foul1Options.hidden = false;
        foulShow1 = true;
      }
      break;
    case "foul2":
      if (foulShow2) {
        foul2Options.hidden = true;
        foulShow2 = false;
      } else if (!foulShow2) {
        foul2Options.hidden = false;
        foulShow2 = true;
      }
      break;

    case "miss1":
      playerBreak = 0;
      addEvent(player1, player1Name, "N/A", "missed1");
      break;
    case "miss2":
      playerBreak = 0;
      addEvent(player2, player2Name, "N/A", "missed2");
      break;

    case "foulRed1":
      player2Val += 4;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "red", "foul1");
      break;
    case "foulYellow1":
      player2Val += 4;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "yellow", "foul1");
      break;
    case "foulGreen1":
      player2Val += 4;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "green", "foul1");
      break;
    case "foulBrown1":
      player2Val += 4;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "brown", "foul1");
      break;
    case "foulMiss1":
      player2Val += 4;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "table", "foul1");
      break;

    case "foulRed2":
      player1Val += 4;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "red", "foul2");
      break;
    case "foulYellow2":
      player1Val += 4;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "yellow", "foul2");
      break;
    case "foulGreen2":
      player1Val += 4;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "green", "foul2");
      break;
    case "foulBrown2":
      player1Val += 4;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "brown", "foul2");
      break;
    case "foulMiss2":
      player1Val += 4;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "table", "foul2");
      break;

    case "foulBlue1":
      player2Val += 5;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "blue", "foul1");
      break;
    case "foulBlue2":
      player1Val += 5;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "blue", "foul2");
      break;

    case "foulPink1":
      player2Val += 6;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "pink", "foul1");
      break;
    case "foulPink2":
      player1Val += 6;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "pink", "foul2");
      break;

    case "foulBlack1":
      player2Val += 7;
      player2Points.textContent = player2Val;
      playerBreak = 0;
      addEvent(player1, player1Name, "black", "foul1");
      break;
    case "foulBlack2":
      player1Val += 7;
      player1Points.textContent = player1Val;
      playerBreak = 0;
      addEvent(player2, player2Name, "black", "foul2");
      break;
  }
});
