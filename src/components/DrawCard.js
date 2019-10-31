import React from "react";
import { connect } from "react-redux";
import { drawCard } from "../redux/action";
import { getCards, getCardLength } from "../redux/selectors";

const DrawCard = ({ cards, cards_length, drawCard }) => (
  <div>
    {cards && cards_length !== 0 ? (
      <button
        className="btn--next"
        onClick={() => {
          drawCard(cards);
        }}
      >
        ドロー
      </button>
    ) : (
      <p>おしまい</p>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    cards: getCards(state),
    cards_length: getCardLength(state)
  };
};

export default connect(
  mapStateToProps,
  { drawCard }
)(DrawCard);
