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

// function getHumanChoice(choice) {
//   switch(choice){
//     case 'rock':
//       return
//   }
// }

function playRound(humanChoice, computerChoice) {
  switch (humanChoice.toLowerCase()) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          result.textContent = `Both picked rock`;
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
          result.textContent = `Both picked paper`;
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
          result.textContent = `Both picked scissors`;
          return;
      }
  }
}

const computerChoice = getComputerChoice();
let humanChoice = "";
let score = document.getElementById("score");
let result = document.getElementById("result");
let buttons = document.getElementsByClassName("btn");
let winner = document.getElementById("winner");
let humanScore = 0;
let aIScore = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    humanChoice = buttons[i].textContent.toLowerCase();
    result.textContent = "";
    playRound(humanChoice, computerChoice);
    score.textContent = `Score is Human: ${humanScore} vs Computer: ${aIScore}`;
    if (humanScore >= 5) {
      winner.textContent = `Human wins ${humanScore} to ${aIScore}`;
    } else if (aIScore >= 5) {
      winner.textContent = `Computer wins ${aIScore} to ${humanScore}`;
    }
  });
}
