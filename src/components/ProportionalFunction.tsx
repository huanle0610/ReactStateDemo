import React, { useEffect, useRef, useState } from 'react';
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
  const [hoverCoords, setHoverCoords] = useState<{
    x: number;
    y: number;
  } | null>(null);

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
      const graph = jsxBoard.current.create(
        'functiongraph',
        [(x: number) => k * x + b],
        {
          strokeColor: 'blue',
        }
      );

      // Add a label for the function
      jsxBoard.current.create('text', [1, 2, `y = ${k}x + ${b}`], {
        fontSize: 18,
        color: 'black',
      });

      const board = jsxBoard.current;

      //https://jsxgraph.org/share/example/adding-jsxgraph-events

      const handleDown = function (e: Event) {
        const coords = jsxBoard.current!.getUsrCoordsOfMouse(e);
        const x = Math.round(coords[0]);
        // const y = coords[1];

        // console.log(x, y, graph.Y(x), graph.hasPoint(x, y),graph.hasPoint(0,4), 'xy33'); // Debugging log
        board.create('point', [x, graph.Y(x)], {
          name: `(${x}, ${graph.Y(x)})`,
          //   size: 2,
          //   strokeColor: 'red',
        });
      };

      // Attach mousemove event to the containerObj
      // https://jsxgraph.org/docs/symbols/JXG.GeometryElement.html#event:down
      graph.on('down', handleDown);

      graph.on('over', (e: Event) => {
        const coords = jsxBoard.current!.getUsrCoordsOfMouse(e);
        const x = Math.round(coords[0]);
        setHoverCoords({
          x: x,
          y: graph.Y(x),
        });
      });
    }
  }, [k, b]); // Re-run the effect whenever k or b changes

  return (
    <div style={{ position: 'relative' }}>
      <div
        id="jxgbox"
        ref={boardRef}
        style={{ width: '600px', height: '600px', border: '1px solid #ccc' }}
      />
      {hoverCoords && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '5px',
            borderRadius: '4px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <strong>Coordinates:</strong>
          <div>x: {hoverCoords.x}</div>
          <div>y: {hoverCoords.y}</div>
        </div>
      )}
    </div>
  );
};

export default ProportionalFunction;
