"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const handleChange = (n: number = 1): void => {
    setCounter(counter + n);
  };

  return (
    <div>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors mr-2 w-[100px]"
          onClick={() => handleChange(1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors mr-2 w-[100px]"
          onClick={() => handleChange(-1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};
