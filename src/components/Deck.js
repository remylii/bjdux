import React from "react";
import { connect } from "react-redux";
import { getCardLength, getTurn } from "../redux/selectors";
import { toggleTurn } from "../redux/action";
import DrawCard from "./DrawCard";
import HandCard from "./HandCard";

const Deck = ({ card_length, turn, toggleTurn }) => (
  <div>
    <p>残り枚数: {card_length}</p>
    <p>今のターン: {turn}</p>
    <button
      onClick={() => {
        toggleTurn(turn);
      }}
    >
      ターンチェンジ
    </button>
    <DrawCard />
    <HandCard />
  </div>
);

const mapStateToPros = state => {
  return {
    card_length: getCardLength(state),
    turn: getTurn(state)
  };
};

export default connect(
  mapStateToPros,
  {
    toggleTurn
  }
)(Deck);
