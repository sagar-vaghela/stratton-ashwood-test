const Suit = ["S", "H", "D", "C"];
const Rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "X", "J", "Q", "K"];
const Deck = () => Suit.map((s) => Rank.map((r) => `${s}-${r}`));

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomCard = (d) => {
  const avaiableSuits = d.filter((s) => s.length);
  if (!avaiableSuits.length) return ["asd", avaiableSuits];

  const randomSuitIndex = getRandomInt(avaiableSuits.length);
  const randomCardIndex = getRandomInt(avaiableSuits[randomSuitIndex].length);
  const randomCard = avaiableSuits[randomSuitIndex][randomCardIndex];
  avaiableSuits[randomSuitIndex].splice(randomCardIndex, 1);
  return [randomCard, avaiableSuits];
};

const shuffleCards = (d = Deck(), c = []) => {
  if (c.length < 52) {
    const [card, newDeck] = getRandomCard(d);
    return shuffleCards(newDeck, c.concat(card));
  }
  return c;
};

export const dealCards = (n = 1) => {
  const shuffledDeck = shuffleCards();
  const nCards = 52 / n;
  let dealedCards = [];
  while (shuffledDeck.length > 0) dealedCards.push(shuffledDeck.splice(0, nCards));
  return dealedCards;
};
