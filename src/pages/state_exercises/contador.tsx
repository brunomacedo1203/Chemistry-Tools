import React, { useState } from "react";
import Page from "@/components/Page";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const [delta, setDelta] = useState(1);
  function decrementDelta() {
    setDelta(delta - 1);
  }

  function incrementDelta() {
    setDelta(delta + 1);
  }

  function decrement() {
    setCount(count - delta);
  }

  function increment() {
    setCount(count + delta);
  }

  return (
    <Page title="Counter" subtitle="State Chapter">
      <div
        className={
          " flex flex-col justify-center items-center w-full h-full gap-5"
        }
      >
        <div className="text-7xl font-black ">{count}</div>
        <div className="flex gap-5">
          <button
            onClick={decrement}
            className="bg-blue-500 rounded-full p-4"
          >
            <IconMinus size={30} />
          </button>
          <button
            onClick={increment}
            className="bg-blue-700 rounded-full p-4"
          >
            <IconPlus size={30} />
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={decrementDelta}
            className="bg-purple-500 rounded-full p-2"
          >
            <IconMinus size={16} />
          </button>
          <span>{delta}</span>
          <button
            onClick={incrementDelta}
            className="bg-purple-500 rounded-full p-2"
          >
            <IconPlus size={16} />
          </button>
        </div>
      </div>
    </Page>
  );
}
