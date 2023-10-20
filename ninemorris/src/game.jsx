// game.jsx
import React, { useState } from 'react';
import GameLogic from './GameLogic';

function Game() {
    const [gameLogic, setGameLogic] = useState(new GameLogic());
    
    const handleIntersectionClick = (intersection, index) => {
        const newGameLogic = new GameLogic();
    
        if (newGameLogic.isGameOver()) {
          return;
        }
    
        if (newGameLogic.placePiece(index)) {
          setGameLogic(newGameLogic);
        }
      };
  
    return (
      <Board onIntersectionClick={(intersection, index) => handleIntersectionClick(intersection, index)} />
    );
  }
  
 

function Board({ onIntersectionClick }) {
  const intersections = [
        // Outer square
        { x: 50, y: 50 },   // a1
        { x: 200, y: 50 },  // d1
        { x: 350, y: 50 },  // g1
        { x: 50, y: 200 },  // a4
        { x: 350, y: 200 }, // g4
        { x: 50, y: 350 },  // a7
        { x: 200, y: 350 }, // d7
        { x: 350, y: 350 }, // g7
    
        // Middle square
        { x: 100, y: 100 }, // b2
        { x: 200, y: 100 }, // d2
        { x: 300, y: 100 }, // f2
        { x: 100, y: 200 }, // b4
        { x: 300, y: 200 }, // f4
        { x: 100, y: 300 }, // b6
        { x: 200, y: 300 }, // d6
        { x: 300, y: 300 }, // f6
    
        // Inner square
        { x: 150, y: 150 }, // c3
        { x: 200, y: 150 }, // d3
        { x: 250, y: 150 }, // e3
        { x: 150, y: 200 }, // c4
        { x: 250, y: 200 }, // e4
        { x: 150, y: 250 }, // c5
        { x: 200, y: 250 }, // d5
        { x: 250, y: 250 }  // e5
      ];
    const lines = [
        // Horizontal lines
        { x1: 50, y1: 50, x2: 350, y2: 50 },
        { x1: 50, y1: 200, x2: 350, y2: 200 },
        { x1: 50, y1: 350, x2: 350, y2: 350 },
        { x1: 100, y1: 100, x2: 300, y2: 100 },
        { x1: 100, y1: 200, x2: 300, y2: 200 },
        { x1: 100, y1: 300, x2: 300, y2: 300 },
        { x1: 150, y1: 150, x2: 250, y2: 150 },
        { x1: 150, y1: 200, x2: 250, y2: 200 },
        { x1: 150, y1: 250, x2: 250, y2: 250 },
    
        // Vertical lines
        { x1: 50, y1: 50, x2: 50, y2: 350 },
        { x1: 200, y1: 50, x2: 200, y2: 350 },
        { x1: 350, y1: 50, x2: 350, y2: 350 },
        { x1: 100, y1: 100, x2: 100, y2: 300 },
        { x1: 300, y1: 100, x2: 300, y2: 300 },
        { x1: 150, y1: 150, x2: 150, y2: 250 },
        { x1: 250, y1: 150, x2: 250, y2: 250 }
      ];
    
    

      return (
        <div className="board">
          <svg width="400" height="400">
            {lines.map((line, index) => (
              <line key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="black"
              strokeWidth="2"/>
              
            ))}
            {intersections.map((intersection, index) => (
              <circle
                key={index}
                cx={intersection.x}
                cy={intersection.y}
                r="5"
                fill="black"
                onClick={() => onIntersectionClick(intersection, index)}
              />
            ))}
          </svg>
        </div>
      );
    }
    
    export default Game;