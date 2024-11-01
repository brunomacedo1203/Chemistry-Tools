interface SingleCardPeriodicTableProps {
  atomicNumber: number 
  symbol?: string;
  name?: string;
  molarMass?: number;
}

export default function SingleCardPeriodicTable({
  atomicNumber,
  symbol,
  name,
  molarMass,
}: SingleCardPeriodicTableProps) {
  return (
    <div className=" relative w-20 h-20 border-2 border-black items-center justify-center bg-gray-100">
      <span className="absolute top-0 left-1 text-black text-xs font-bold ">
        {atomicNumber}
      </span>
      <div className=" flex flex-col items-center p-2">
        <span className="text-2xl font-bold text-black">{symbol}</span>
        <span className=" text-xs text-black text-center truncate">{name}</span>
        <span className="text-xs text-black">{molarMass?.toFixed(2)}</span>
      </div>
    </div>
  );
}
