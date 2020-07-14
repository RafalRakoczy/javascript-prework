function playGame(playerInput) {
  clearMessages();
function getMoveName(MoveId) {
  if (MoveId == 1) {
    return 'kamień';
  } if (MoveId == 2) {
    return 'papier';
  } if (MoveId == 3) {
    return 'nożyce';
  } else printMessage('Nie znam ruchu o id ' + MoveId + '.');
    return 'nieznany ruch';
  }

  console.log(getMoveName('1', '2'));
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  let ComputerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + ComputerMove);
  console.log('Gracz wpisał: ' + playerInput);

  let PlayerMove = getMoveName(playerInput);
  console.log('ruch gracza to: ' + PlayerMove);

function displayResult(ComputerMove, PlayerMove) {
  printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
  if (ComputerMove == 'papier' && PlayerMove == 'kamień') {
    printMessage('Ja wygrywam!');
  } else if (ComputerMove == 'kamień' && PlayerMove == 'nożyce') {
    printMessage('Ja wygrywam!');
  } else if (ComputerMove == 'nożyce' && PlayerMove == 'papier') {
    printMessage('Ja wygrywam!');
  } else if (ComputerMove == PlayerMove) {
    printMessage('Remis');
  } else if (PlayerMove == 'nieznany ruch') {
    printMessage('nieznany ruch');
  } else {
    printMessage('Ty wygrywasz!');
    }
  }
  printMessage(displayResult(ComputerMove, PlayerMove));
}
  document.getElementById('play-rock').addEventListener('click', function() {
  printMessage('Guzik został kliknięty')(playGame(1));
  });
  document.getElementById('play-paper').addEventListener('click', function() {
  printMessage('kliknąłeś guzik Papier')(playGame(2));
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
  printMessage('kliknąłeś guzik Nożyce')(playGame(3));
  });
  
  /*
  document.getElementById('play-rock').addEventListener('click', function() {
  (playGame(1))('Kliknąłeś guzik Kamień');
  });
  document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2)('kliknąłeś guzik Papier');
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3)('kliknąłeś guzik Nożyce');
  });*/