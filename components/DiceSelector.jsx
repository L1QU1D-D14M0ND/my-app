import React from 'react';

function DiceSelector({ numDice, onNumDiceChange, diceType, onDiceTypeChange }) {

    const diceTypes = [ "D3", "D4", "D6", "D8", "D10", "D12", "D20", "D100" ];
    const diceNumbers = [];
    for (let a = 0; a < 100; a++) {
        diceNumbers.push(a);
    }

  return (
    <div>
      <label>
        Number of Dice:
        <select value={numDice} onChange={onNumDiceChange}>
          {diceNumbers.map((number,index) => ( <option key={index} value={number}>{number}</option> ))}
        </select>
      </label>
      <label>
        Type of Dice:
        <select value={diceType} onChange={onDiceTypeChange}>
            {diceTypes.map((type,index) => ( <option key={index} value={type}>{type}</option> ))}
        </select>
      </label>
    </div>
  );
}

export default DiceSelector;
