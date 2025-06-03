import React from 'react';

function DiceRollerButton({ onRollDice }) {
  return (
    <button onClick={onRollDice}>
      Roll Dice
    </button>
  );
}

export default DiceRollerButton;