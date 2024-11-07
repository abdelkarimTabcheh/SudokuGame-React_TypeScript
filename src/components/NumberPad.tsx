// src/components/NumberPad.tsx
import React from 'react';

interface NumberPadProps {
  onNumberSelect: (number: number) => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ onNumberSelect }) => {
  return (
    <div className="number-pad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
        <button
          key={number}
          className="number-button"
          onClick={() => onNumberSelect(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberPad;
