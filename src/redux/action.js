import { PLAYER, DECK } from "./actionTypes";

export const toggleTurn = turn => {
  return {
    type: PLAYER.TOGGLE_TURN,
    payload: { turn }
  };
};

export const drawCard = cards => {
  return {
    type: DECK.DRAW_CARD,
    payload: { cards }
  };
};
