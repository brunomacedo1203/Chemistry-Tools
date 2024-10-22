import {
  IconCalculator,
  IconCalculatorFilled,
  IconCalculatorOff,
  IconCode,
  IconForms,
  IconHome,
  IconHospital,
  IconNumber,
  IconNumbers,
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
        text-zinc-900 
        `}
    >
      <MenuItem
        icone={<IconHospital />}
        label="Periodic Table"
        url="/fundamentos/pagina"
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
        url="/MolarMassCalculator"
      />

      <span className=" text-sm text-zinc-500 self-start pl-3 pt-1">
        Unit Converters
      </span>
      <MenuItem
        icone={<IconRulerMeasure />}
        label="Mass"
        url="/componente/titulo"
      />
      <MenuItem
        icone={<IconRulerMeasure />}
        label="Volum"
        url="/componente/titulo"
      />

      <span className=" text-sm text-zinc-500 self-start pl-3 pt-1">
        Exercícios do curso
      </span>

      <MenuItem
        icone={<IconNumbers />}
        label="Contador"
        url="/estado/contador"
      />

      <MenuItem
        icone={<IconCode />}
        label="Componente com estado"
        url="/estado/com"
      />

      <MenuItem
        icone={<IconForms />}
        label="Campo de texto"
        url="/estado/campoTexto"
      />

      <MenuItem
        icone={<IconCalculator />}
        label="Calculadora"
        url="/estado/calculadora"
      />
    </div>
  );
}
