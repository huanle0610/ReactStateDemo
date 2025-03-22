import React from 'react';
import JXGBoard from '../components/jsxgraph-react-js'; // Ensure you have this library installed

const ProportionalFunction: React.FC = () => {
  const drawProportionalFunction = (board: JXG.Board) => {
    const k = 2; // Slope
    const b = 4; // Intercept

    // Draw the proportional function y = kx + b
    board.create('functiongraph', [(x: number) => k * x + b], {
      strokeColor: 'blue',
    });

    // Add a label for the function
    board.create('text', [1, 2, 'y = 2x + 4'], {
      fontSize: 18,
      color: 'black',
    });
  };

  return (
    <JXGBoard
      logic={drawProportionalFunction}
      boardAttributes={{ boundingbox: [-5, 10, 5, -5], axis: true }}
      style={{ width: '600px', height: '600px' }}
    />
  );
};

const ProportionalFunctionPage: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <h1>Proportional Function</h1>
      <ProportionalFunction />
    </div>
  );
};

export default ProportionalFunctionPage;
