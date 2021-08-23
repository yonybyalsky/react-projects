import React, { useState } from 'react';
import formula from'./formula.png'

const App = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const discriminant = Math.sqrt(b ** 2 - 4 * a * c);
  const negativeDiscriminant = -1 * discriminant;
  const quadraticFormula = (-1 * b + discriminant) / (2 * a);
  const negativeQuadraticFormula = (-1 * b + negativeDiscriminant) / (2 * a);
  return (
    <React.Fragment>
      <input
        placeholder='a'
        onChange={(event) => setA(event.target.value)}
      ></input>
      <input
        placeholder='b'
        onChange={(event) => setB(event.target.value)}
      ></input>
      <input
        placeholder='c'
        onChange={(event) => setC(event.target.value)}
      ></input>
      {a == null || a == '' || b == null || b == '' || c == null || c == '' ? (
        <h4>Please enter a number in all of the fields</h4>
      ) : (
        <h4>
          {b ** 2 - 4 * a * c >= 0
            ? quadraticFormula === negativeQuadraticFormula ? `X = ${quadraticFormula}` : `X = ${quadraticFormula}, ${negativeQuadraticFormula}`
            : 'There is no solution to the equation'}
        </h4>
      )}
      <img src={formula} alt='Formula'/>
    </React.Fragment>
  );
};

export default App;
