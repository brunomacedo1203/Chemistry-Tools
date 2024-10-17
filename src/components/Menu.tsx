import {
  IconCalculator,
  IconCalculatorFilled,
  IconCalculatorOff,
  IconCode,
  IconHome,
  IconHospital,
  IconRulerMeasure,
  IconScale,
  IconTableShortcut,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
     
     text-3xl  p-2 gap-2
     flex flex-col justify-start items-center w-70
    `}
    >
      <MenuItem
        icone={<IconHospital />}
        label="Periodic Table"
        url="/fundamentos/pagina"
      />

      <span className=" text-sm text-zinc-500 self-start pl-3 pt-1">
        Estado
      </span>
      <MenuItem
        icone={<IconCode />}
        label="Componente sem estado"
        url="/componente/basico"
      />

      <span className=" text-sm text-zinc-500 self-start pl-3 pt-1">
        Calculators
      </span>
      <MenuItem
        icone={<IconCalculator />}
        label="Basic Calculator"
        url="/componente/basico"
      />

      <MenuItem
        icone={<IconScale />}
        label="Molar Mass calculator"
        url="/pagina"
      />
      <span className=" text-sm text-zinc-500 self-start pl-3 pt-1">
        Unit Converters
      </span>
      <MenuItem
        icone={<IconRulerMeasure />}
        label="titulo"
        url="/componente/titulo"
      />
    </div>
  );
}
