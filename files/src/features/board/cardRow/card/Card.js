import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards } from '../../boardSlice.js';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
// Adding selected data and dispatch variables:
const visibleIDs = useSelector(selectVisibleIDs);
const matchedIDs = useSelector(selectMatchedIDs);  
const dispatch = useDispatch();

  // flip card action
  const flipHandler = (id) => {
    // Adding action dispatch:
    dispatch(flipCard(id));    
  };

  const tryAgainHandler = () => {
    // Adding action dispatch:
    dispatch(resetCards());   
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.include(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = tryAgainHandler;
  }

  //4th if statement:
  //no-match check:
  if(visibleIDs.length >= 2 && !matchedIDs.includes(id)) {
    cardStyle = 'no-match';
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
