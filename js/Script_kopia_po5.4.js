let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
  computerMove = 'papier';
}
else if (randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else (playerInput !== "1" || "2" || "3") {
  playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Ja wygrywam!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Ja wygrywam!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Ja wygrywam!');
} else if (computerMove == playerMove) {
  printMessage('Remis');
} else if (playerMove == 'nieznany ruch') {
  printMessage('nie wpisałeś prawidłowo numeru! Spróbuj od nowa.');
} else printMessage('Ty wygrywasz!')
}