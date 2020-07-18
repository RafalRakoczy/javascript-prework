function playGame(ArgplayerInput) {
    clearMessages();
  function getMoveName(ArgmoveId) {
    if (ArgmoveId == 1) {
      return 'kamień';
    } if (ArgmoveId == 2) {
      return 'papier';
    } if (ArgmoveId == 3) {
      return 'nożyce';
    } else printMessage('Nie znam ruchu o id ' + ArgmoveId + '.');
      return 'nieznany ruch';
    }
  
    console.log(getMoveName('1', '2'));
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
  
    let computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
   
  
    let playerMove = getMoveName(ArgplayerInput);
    console.log('Gracz wtbrał: ' + ArgplayerInput);
    console.log('ruch gracza to: ' + playerMove);
  
  function displayResult(computerMove, playerMove) {
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