"use strict";
function getComputerChoice() {
  let choice = Math.floor(Math.random() * (4 - 1) + 1);
  switch (choice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
}
let humanScore = 0;
let aIScore = 0;

function getHumanChoice() {
  return prompt("Pick Rock / Paper / Scissors");
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return;
        case "paper":
          aIScore++;
          return;
        case "scissors":
          humanScore++;
          return;
      }

    case "paper":
      switch (computerChoice) {
        case "rock":
          humanScore++;
          return;
        case "paper":
          return;
        case "scissors":
          aIScore++;
          return;
      }

    case "scissors":
      switch (computerChoice) {
        case "rock":
          aIScore++;
          return;
        case "paper":
          humanScore++;
          return;
        case "scissors":
          return;
      }
  }
}

function playGame() {
  for (let iter = 0; iter < 5; iter++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
}

playGame();
console.log(`Score is Human: ${humanScore} vs Computer: ${aIScore}`);
