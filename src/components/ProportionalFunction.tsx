import React, { useEffect, useRef } from 'react';
import JXG from 'jsxgraph';

interface ProportionalFunctionProps {
  k: number;
  b: number;
}

const ProportionalFunction: React.FC<ProportionalFunctionProps> = ({
  k,
  b,
}) => {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const jsxBoard = useRef<JXG.Board | null>(null);

  useEffect(() => {
    // Initialize the board
    if (boardRef.current) {
      if (jsxBoard.current) {
        JXG.JSXGraph.freeBoard(jsxBoard.current); // Clear the existing board
      }

      jsxBoard.current = JXG.JSXGraph.initBoard(boardRef.current.id, {
        boundingbox: [-5, 10, 5, -5],
        axis: true,
        showCopyright: false,
      });

      // Draw the proportional function y = kx + b
      jsxBoard.current.create('functiongraph', [(x: number) => k * x + b], {
        strokeColor: 'blue',
      });

      // Add a label for the function
      jsxBoard.current.create('text', [1, 2, `y = ${k}x + ${b}`], {
        fontSize: 18,
        color: 'black',
      });
    }
  }, [k, b]); // Re-run the effect whenever k or b changes

  return (
    <div
      id="jxgbox"
      ref={boardRef}
      style={{ width: '600px', height: '600px' }}
    />
  );
};

export default ProportionalFunction;
