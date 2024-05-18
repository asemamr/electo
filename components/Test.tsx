"use client";
import { useState } from "react";

export default function Test() {
  const [isAbove, setIsAbove] = useState(false);

  return (
    <div>
      <div className="flex flex-col ">
        {isAbove && <Counter key="asdfawdvwevad" />}
        <span>hey</span>
        {!isAbove && <Counter key="kasdf" />}
      </div>
      <button
        className="bg-blue-600 rounded-xl w-20 py-4 text-white"
        onClick={() => setIsAbove(!isAbove)}
      >
        swipe
      </button>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <button
      onClick={() => setCounter(counter + 1)}
      className="bg-blue-600 rounded-xl w-20 py-4 text-white "
    >
      {counter}
    </button>
  );
}
