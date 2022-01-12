const title = document.querySelector('#title');
const cards = document.querySelector('#cards');
const sum = document.querySelector('#sum');
const btnStart = document.querySelector('#btnStart');
const btnNewCard = document.querySelector('#btnNewCard');

let card1 = 0;
let card2 = 0;
let cardArr = [];
let totalCard = 0;
btnNewCard.disabled = true;

function handleStartGame() {
  cardArr = [];
  btnNewCard.disabled = false;
  card1 = Math.floor(Math.random() * 10) + 1;
  card2 = Math.floor(Math.random() * 10) + 1;
  cardArr.push(card1, card2);
  totalCard = card1 + card2;
  cards.textContent = cardArr.join('  ');
  sum.textContent = totalCard;
  checkTotal(totalCard);
}

function handleNewCard() {
  let newCard = Math.floor(Math.random() * 10) + 1;
  cardArr.push(newCard);
  cards.textContent = cardArr.join('  ');
  totalCard = cardArr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  sum.textContent = totalCard;
  checkTotal(totalCard);
}

function checkTotal(value) {
  if (value < 21) {
    title.textContent = 'Do you want to draw a new card?';
  } else if (value > 21) {
    title.textContent = "You're out of the game!";
    btnNewCard.disabled = true;
  } else {
    title.textContent = "You've got Blackjack!";
    btnNewCard.disabled = true;
  }
}

btnStart.addEventListener('click', () => handleStartGame());
btnNewCard.addEventListener('click', () => handleNewCard());
