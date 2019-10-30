import React from "react";
import { connect } from "react-redux";
import { drawCard } from "../redux/action";
import { getCards } from "../redux/selectors";

const DrawCard = ({ cards, drawCard }) => (
  <div>
    <button
      className="btn--next"
      onClick={() => {
        drawCard(cards);
      }}
    >
      ドロー
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    cards: getCards(state)
  };
};

export default connect(
  mapStateToProps,
  { drawCard }
)(DrawCard);
