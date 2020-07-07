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

console.log(getMoveName('1','2' ));
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + ComputerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let PlayerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + PlayerMove);

function displayResult(ComputerMove, PlayerMove) {
  printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
} if (ComputerMove == 'papier' && PlayerMove == 'kamień') {
  printMessage('Ja wygrywam!');
} else if (ComputerMove == 'kamień' && PlayerMove == 'nożyce') {
  printMessage('Ja wygrywam!');
} else if (ComputerMove == 'nożyce' && PlayerMove == 'papier') {
  printMessage('Ja wygrywam!');
} else if (ComputerMove == PlayerMove) {
  printMessage('Remis');
} else if (PlayerMove == 'nieznany ruch') {
  printMessage('nie wpisałeś prawidłowo numeru! Spróbuj od nowa.');
} else printMessage('Ty wygrywasz!');
displayResult(ComputerMove, PlayerMove);