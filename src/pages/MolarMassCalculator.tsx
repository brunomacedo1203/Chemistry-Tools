import Pagina from "@/components/Pagina";
import { useState } from "react";
import periodicTable from "@/app/data/periodicTable";
import InputFormula from "@/components/InputFormula";

export default function MolarMassCalculator() {
  const [formula, setFormula] = useState("");
  const [molarMass, setMolarMass] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const calculateMolarMass = () => {
    let totalMolarMass = 0;
    const formattedFormula = formula
      .replace(/\s+/g, "")
      .replace(
        /(^|[^a-zA-Z])([a-z])/g,
        (match: any, p1: any, p2: any) => p1 + p2.toUpperCase()
      );
    const regex = /([A-Z][a-z]*)(\d*)/g;

    if (formula === "") {
      setErrorMessage("A fórmula molecular não pode ficar em branco");
      return;
    }

    let formulaOutput;
    while ((formulaOutput = regex.exec(formattedFormula)) !== null) {
      const elementSymbolUser = formulaOutput[1];
      const elementCount = parseInt(formulaOutput[2] || "1", 10);
      const elementSymbol = periodicTable.find(
        (i) => i.symbol === elementSymbolUser
      );

      if (elementSymbol) {
        totalMolarMass += elementSymbol.molarMass * elementCount;
      } else {
        alert(
          `The element with the symbol "${elementSymbolUser}" was not found in the periodic table`
        );
        return;
      }
    }

    setMolarMass(
      `The molar mass of ${formattedFormula} is: ${totalMolarMass.toFixed(
        2
      )} g/mol`
    );
    setErrorMessage("");
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      calculateMolarMass();
    }
  };

  return (
    <Pagina
      titulo="Enter a Chemical Formula or Element Symbol"
      subtitulo="Instantly Calculate the Molar Mass"
    >
      <div className="flex flex-col gap-5">
        <span>
          <h1 className=" text-xl text-zinc-800">
            Enter a Chemical Formula or Element Symbol
          </h1>
        </span>
        <InputFormula
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Ex: H₂O"
        />
        <button className="btn-molarMass" onClick={calculateMolarMass}>
          Calculate
        </button>
        <span className="text-black">
          {molarMass && <div>{molarMass}</div>}
        </span>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </Pagina>
  );
}
