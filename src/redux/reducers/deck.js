import { DECK } from "../actionTypes";

let initialiState = {
  cards: initializeCard(),
  pulled: []
};

export default function(state = initialiState, action) {
  switch (action.type) {
    case DECK.DRAW_CARD:
      const { cards } = action.payload;
      const card = cards.shift();
      return {
        ...state,
        cards: cards,
        pulled: [...state.pulled, card]
      };
    default:
      return state;
  }
}

function initializeCard() {
  const marks = ["spade", "club", "diamond", "heart"];
  const res = [];
  for (let mark of marks) {
    for (let i = 1; i <= 13; i++) {
      res.push({
        mark: mark,
        num: i
      });
    }
  }
  return res;
}
