import React from "react";
import { connect } from "react-redux";
import { getPulledCards } from "../redux/selectors";

const HandCard = ({ my_cards }) => (
  <div>
    <ul>
      {my_cards && my_cards.length > 0 ? (
        my_cards.map(card => {
          return (
            <li key={`handcard-${card.mark}-${card.num}`}>
              {card.mark}の{card.num}
            </li>
          );
        })
      ) : (
        <li>No Cards.</li>
      )}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    my_cards: getPulledCards(state)
  };
};
export default connect(mapStateToProps)(HandCard);
