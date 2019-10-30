import { PLAYER } from "../actionTypes";

let initializeState = {
  turn: 1,
  players: []
};

export default function(state = initializeState, action) {
  switch (action.type) {
    case PLAYER.TOGGLE_TURN:
      return {
        ...state,
        turn: action.payload.turn === 1 ? 2 : 1
      };
    default:
      return state;
  }
}
