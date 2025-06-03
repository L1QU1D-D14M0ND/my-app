import React from 'react';

function DiceResults({ results, clearer }) {
  return (
    <div>
      <h3>Dice Results:</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <span>Dice {index + 1}: {result}</span>
          </li>
        ))}
      </ul>
      <p>Sum: {results.reduce((a, b) => a + b, 0)}</p>
      <button onClick={() => {clearer([])}} >Clear results</button>
    </div>
  );
}

export default DiceResults;