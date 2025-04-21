import React, { useState } from "react";
import Page from "@/components/Page";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function StatePage() {
  const [value, setValue] = useState(0);
  function increment() {
    setValue(value + 1);
  }
  function decrement() {
    setValue(value - 1);
  }

  return (
    <Page title="With State" subtitle="State Chapter">
      <div className="flex flex-col">
        <div>
          <span>Current Value: </span>
          <span>{value}</span>
        </div>
        <div>
          <button onClick={increment} className="bg-blue-500 p-2">
            <IconPlus />
          </button>
          <button onClick={decrement} className="bg-blue-500 p-2">
            <IconMinus />
          </button>
        </div>
      </div>
    </Page>
  );
}
