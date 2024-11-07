// src/App.tsx
import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import NumberPad from './components/NumberPad';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [board, setBoard] = useState<number[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );

  const handleNumberSelect = (number: number) => {
    setSelectedNumber(number);
  };

  const handleCellClick = (row: number, col: number) => {
    if (selectedNumber !== null && selectedNumber >= 1 && selectedNumber <= 9) {
      const newBoard = board.map((r, i) =>
        r.map((cell, j) => (i === row && j === col ? selectedNumber : cell))
      );
      setBoard(newBoard);
    }
  };

  return (
    <div className="app-container">
      <Header title="Sudoku Game" />
      <SudokuBoard board={board} onCellClick={handleCellClick} />
      <NumberPad onNumberSelect={handleNumberSelect} />
    </div>
  );
};

export default App;
