const gameBoard = (() => {
  let score = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const printScore = () => {
    console.log(score);
  }

  const startOver = () => {
    score = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  const _reducer = (accumulator, curr) => accumulator + curr;
  
  function _whoWins() {
    if (score[0] == 1 && score[1] == 1 && score[2] == 1) {
      _winnerModal();
    } else if (score[0] == 1 && score[4] == 1 && score[8] == 1) {
      _winnerModal();
    } else if (score[6] == 1 && score[4] == 1 && score[2] == 1) {
      _winnerModal();
    } else if (score[3] == 1 && score[4] == 1 && score[5] == 1) {
      _winnerModal();
    } else if (score[6] == 1 && score[7] == 1 && score[8] == 1) {
      _winnerModal();
    } else if (score[0] == 1 && score[3] == 1 && score[6] == 1) {
      _winnerModal();
    } else if (score[1] == 1 && score[4] == 1 && score[7] == 1) {
      _winnerModal();
    } else if (score[2] == 1 && score[5] == 1 && score[8] == 1) {
      _winnerModal();
    } else if (score[0] == -1 && score[1] == -1 && score[2] == -1) {
      _tie();
    } else if (score[0] == -1 && score[4] == -1 && score[8] == -1) {
      _tie();
    } else if (score[6] == -1 && score[4] == -1 && score[2] == -1) {
      _tie();
    } else if (score[3] == -1 && score[4] == -1 && score[5] == -1) {
      _tie()
    } else if (score[6] == -1 && score[7] == -1 && score[8] == -1) {
      _tie();
    } else if (score[0] == -1 && score[3] == -1 && score[6] == -1) {
      _tie();
    } else if (score[1] == -1 && score[4] == -1 && score[7] == -1) {
      _tie();
    } else if (score[2] == -1 && score[5] == -1 && score[8] == -1) {
      _tie();
    } else {
      return;
    }
  }

  // When the user wins, open the modal
  const _winnerModal = () => {
    document.getElementsByTagName('p')[0].innerHTML = playerX +" wins";
    displayModal();
  }

  function _tie() {
    document.getElementsByTagName('p')[0].innerHTML = playerO +" wins";
    displayModal();
  }

  
  const _addToScore = (id, num) => {
    score[id-1] = num;
  }

  const renderGameBoard = (id, ele, num) => {
    let div = document.getElementById(id);
    if (div.innerHTML.length === 0) {
      div.innerHTML = "";
      div.innerHTML += ele;
    } else {
      nextPlayer();
    }
    _addToScore(id, num)
    _whoWins();
  }

  window.oncontextmenu = (e) => {
    e.preventDefault();
  }

  return {
    renderGameBoard,
    printScore,
    startOver
  }

})();

let playerO = "";
let playerX = "";

// Get the modal
var modal = document.getElementById("myModal");
const modal2 = document.getElementById("opening-dialogue");
const button = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const displayModal = () => {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    for (i=1; i<10; i++) {
      let div = document.getElementById(i);
      div.innerHTML = "";
    }
    gameBoard.startOver();
  }
}

const storeValues = () => {
  playerO = document.getElementById("playerO").value;
  playerX = document.getElementById("playerX").value;
}

const openingDialogue = () => {
  modal2.style.display = "block";
}

button.onclick = function() {
  storeValues();
  modal2.style.display = "none";
  document.getElementsByTagName('p')[0].innerHTML = "";
}

openingDialogue();