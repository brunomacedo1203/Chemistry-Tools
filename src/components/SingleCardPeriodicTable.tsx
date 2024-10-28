interface SingleCardPeriodicTable {
  atomicNumber: number;
  symbol: string;
  name?: string;
  molarMass?: number;
}

export default function SingleCardPeriodicTable() {
  return (
    <div className="relative w-24 h-24 border-2 border-black flex items-center justify-center bg-gray-100">
      <span className="absolute top-0 left-1 text-black text-2xl font-bold ">
        1
      </span>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-black">H</span>
        <span className="text-sm text-black">Hydrogen</span>
        <span className="text-sm text-black">1.0</span>
      </div>
    </div>
  );
}
