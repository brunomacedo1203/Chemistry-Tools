import React from "react";
import Page from "@/components/Page";

export default function StatelessPage() {
  let number = 0;

  function increment() {
    number += 1;
    console.log(number);
  }

  return (
    <Page title="Stateless" subtitle="State Chapter">
      <div className="flex flex-col">
        <div>
          <span>Value: </span>
          <span>{number}</span>
        </div>
        <button onClick={increment} className="bg-blue-500 p-2">
          Increment
        </button>
      </div>
    </Page>
  );
}
