// src/components/SudokuBoard.tsx
import React from 'react';

interface SudokuBoardProps {
  board: number[][];
  onCellClick: (row: number, col: number) => void;
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({ board, onCellClick }) => {
  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${((Math.floor(rowIndex / 3) + Math.floor(colIndex / 3)) % 2 === 0) ? 'cell-highlight' : ''}`}
            onClick={() => onCellClick(rowIndex, colIndex)}
          >
            {value !== 0 ? value : ''}
          </div>
        ))
      )}
    </div>
  );
};

export default SudokuBoard;
