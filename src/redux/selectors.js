export const getCards = store => {
  return store.deck.cards;
};

export const getCardLength = store => {
  const cards = getCards(store);
  return cards.length;
};

export const getTurn = store => {
  return store.player.turn;
};

export const getPulledCards = store => {
  return store.deck.pulled;
};
