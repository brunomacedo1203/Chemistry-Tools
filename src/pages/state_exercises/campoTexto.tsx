import React, { useState } from "react";
import Page from "@/components/Page";

export default function TextFieldPage() {
  const [value, setValue] = useState("");

  function change() {
    const names = ["Alice", "Ana", "Carla", "Diego", "Caio", "João"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setValue(randomName);
  }

  function changeValue(e: any) {
    setValue(e.target.value);
  }

  return (
    <Page title="Text Field" subtitle="State Chapter">
      <div className="flex items-center gap-5">
        <input
          className="input"
          type="text"
          value={value}
          onChange={changeValue}
        />
        <button className="botao" onClick={change}>
          Change
        </button>
      </div>
    </Page>
  );
}
