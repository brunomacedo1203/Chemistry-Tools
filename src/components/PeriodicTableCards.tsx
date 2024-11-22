import SingleCardPeriodicTable from "./SingleCardPeriodicTable";
import elementsData from "@/app/data/elementsData";

export default function PeriodicTableCards() {
  return (
    <div
      className="grid gap-1 p-5"
      style={{
        gridTemplateColumns: "repeat(18, minmax(50px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(50px, 1fr))",
      }}
    >
      {elementsData.map((e) => (
        <div
          key={e.atomicNumber}
          style={{
            gridColumn: e.column,
            gridRow: e.row,
          }}
        >
          <SingleCardPeriodicTable
            atomicNumber={e.atomicNumber}
            symbol={e.symbol}
            name={e.name}
            molarMass={e.molarMass}
          />
        </div>
      ))}
    </div>
  );
}
