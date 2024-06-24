function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let userInput = prompt("Please enter rock, paper, or scissors:");
  userInput = userInput.toLowerCase();
  if (choices.includes(userInput)) {
    return userInput;
  } else {
    alert("Invalid choice");
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const userChoice = getHumanChoice();
  const compChoice = getComputerChoice();

  if (userChoice === compChoice) {
    console.log("it's a tie, try again");
  } else if (userChoice === "rock" && compChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (userChoice === "scissors" && compChoice === "paper") {
    console.log("You Win! Scissors cuts Paper");
    humanScore++;
  } else if (userChoice === "paper" && compChoice === "rock") {
    console.log("You Win! Paper folds Rock");
    humanScore++;
  } else {
    console.log("You lose, Sorry");
    computerScore++;
  }
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (humanScore > computerScore) {
    console.log("Congratulations! You have won all sets");
  } else if (humanScore === computerScore) {
    console.log("it's an overall tie");
  } else {
    console.log("Awwn, You lose the set");
  }
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}
