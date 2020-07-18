{
const playGame = function (ArgplayerInput) {
  clearMessages();
const moveName = function (ArgmoveId) {
  if (ArgmoveId == 1) {
    return 'kamień';
  } if (ArgmoveId == 2) {
    return 'papier';
  } if (ArgmoveId == 3) {
    return 'nożyce';
  } else printMessage('Nie znam ruchu o id ' + ArgmoveId + '.');
    return 'nieznany ruch';
  }

  console.log(moveName('1', '2'));

  const randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = moveName(randomNumber);
    playerMove = moveName(ArgplayerInput);
  
  console.log('Wylosowana liczba to: ' + randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  console.log('Gracz wtbrał: ' + ArgplayerInput);
  console.log('ruch gracza to: ' + playerMove);


const displayResult = function (computerMove, playerMove) {
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  
  if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Ja wygrywam!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Ja wygrywam!');
  } else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Ja wygrywam!');
  } else if (computerMove == playerMove) {
    printMessage('Remis');
  } else if (playerMove == 'nieznany ruch') {
    printMessage('nieznany ruch');
  } else {
    printMessage('Ty wygrywasz!');
    }
  }
  displayResult(computerMove, playerMove);
}
  document.getElementById('play-rock').addEventListener('click', function() {
  printMessage('Guzik został kliknięty');
  playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function() {
  printMessage('kliknąłeś guzik Papier');
  playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
  printMessage('kliknąłeś guzik Nożyce');
  playGame(3);
  });
}