import React, { useState } from 'react';
import DiceSelector from './DiceSelector';
import DiceRollerButton from './DiceRollerButton';
import DiceResults from './DiceResults';
import DiceSave from './DiceSave';

function DiceRoller({ className }) {
  const [numDice, setNumDice] = useState(1);
  const [diceType, setDiceType] = useState('D6');
  const [results, setResults] = useState([]);

  const handleNumDiceChange = (event) => {
    setNumDice(event.target.value);
  };

  const handleDiceTypeChange = (event) => {
    setDiceType(event.target.value);
  };

  const handleRollDice = () => {
    const rolledDice = [];
    for (let i = 0; i < numDice; i++) {
      const result = rollDice(diceType);
      rolledDice.push(result);
    }
    setResults(rolledDice);
  };

  const rollDice = (diceType) => {
    const sides = getNumSides(diceType);
    return Math.floor(Math.random() * sides) + 1;
  };

  const loadConfiguration = (number,type) => {
    setNumDice(number);
    setDiceType(type);
  };

  const getNumSides = (diceType) => {
    switch (diceType) {
        case 'D3':
            return 3;
        case 'D4':
            return 4;
        case 'D6':
            return 6;
        case 'D8':
            return 8;
        case 'D10':
            return 10;
        case 'D12':
            return 12;
        case 'D20':
            return 20;
        case 'D100':
            return 100;
        default:
            return 6;
    }
  };

  return (
    <div class={className}>
      <h2>Virtual Dice Roller</h2>
      <DiceSelector
        numDice={numDice}
        onNumDiceChange={handleNumDiceChange}
        diceType={diceType}
        onDiceTypeChange={handleDiceTypeChange}
      />
      <DiceRollerButton onRollDice={handleRollDice} />
      <DiceResults results={results} clearer={setResults} />
      <DiceSave number={numDice} type={diceType} loader={loadConfiguration} ></DiceSave>
    </div>
  );
}

export default DiceRoller;
