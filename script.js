const score = {
  computerWins: 0,
  playerWins: 0,
  draw: 0,
};
updateScoreAnnouncement();

playerMoveEmojiUpdate();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Computer Wins";
    } else if (computerMove === "Paper") {
      result = "Player Wins";
    } else if (computerMove === "Scissors") {
      result = "Draw";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Draw";
    } else if (computerMove === "Paper") {
      result = "Computer Wins";
    } else if (computerMove === "Scissors") {
      result = "Player Wins";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "Player Wins";
    } else if (computerMove === "Paper") {
      result = "Draw";
    } else if (computerMove === "Scissors") {
      result = "Computer Wins";
    }
  }

  if (result === "Player Wins") {
    score.playerWins += 1;
  } else if (result === "Computer Wins") {
    score.computerWins += 1;
  } else if (result === "Draw") {
    score.draw += 1;
  }

  function updateScoreAnnouncement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Computer ${score.computerWins} ${score.playerWins} Player`;

    document.querySelector(
      ".js-winner-announcement"
    ).innerHTML = `${result}`;
  }

  updateScoreAnnouncement();

  function computerMoveEmojiUpdate() {
    if (computerMove === "Rock") {
      document.querySelector(".js-computer-choice").innerHTML = "✊";
    } else if (computerMove === "Paper") {
      document.querySelector(".js-computer-choice").innerHTML = "✋";
    } else if (computerMove === "Scissors") {
      document.querySelector(".js-computer-choice").innerHTML = "✌️";
    }
  }

  computerMoveEmojiUpdate();

  function playerMoveEmojiUpdate() {
    if (playerMove === "Rock") {
      document.querySelector(".js-player-choice").innerHTML = "✊";
    } else if (playerMove === "Paper") {
      document.querySelector(".js-player-choice").innerHTML = "✋";
    } else if (playerMove === "Scissors") {
      document.querySelector(".js-player-choice").innerHTML = "✌️";
    }
  }

  playerMoveEmojiUpdate();

 /* alert(
    `You Picked ${playerMove}, the computer picked ${computerMove}. ${result}.
Player: ${score.playerWins}  ${score.computerWins} Computer`
  );*/
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 1 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}