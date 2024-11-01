import SingleCardPeriodicTable from "./SingleCardPeriodicTable";
import elementsData from "@/app/data/elementsData";

export default function PeriodicTableCards() {
  return (
    <div
      className="bg-red-400 grid h-screen gap-1"
      style={{
        gridTemplateColumns: "repeat(18, 1fr)",
        gridTemplateRows: "repeat(10, 80px)",
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
