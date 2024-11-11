import {
  IconCalculator,
  IconHospital,
  IconPlayCardA,
  IconRulerMeasure,
  IconScale,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

interface MenuProps {
  collapsed: boolean;
}

export default function Menu({ collapsed }: MenuProps) {
  return (
    <div
      className={`
        text-3xl p-2 gap-2
        flex flex-col justify-start items-center
        ${collapsed ? "w-16" : "w-70"} 
        text-zinc-900 
      `}
    >
      <MenuItem
        icone={<IconHospital />}
        label={collapsed ? "" : "Periodic Table"}
        url="/PeriodicTable"
      />

      {!collapsed && (
        <span className="text-sm text-zinc-500 self-start pl-3 pt-1">
          Calculators
        </span>
      )}

      <MenuItem
        icone={<IconScale />}
        label={collapsed ? "" : "Molar Mass calculator"}
        url="/MolarMassCalculator"
      />
      <MenuItem
        icone={<IconCalculator />}
        label={collapsed ? "" : "Basic Calculator"}
        url="/componente/basico"
      />

      {!collapsed && (
        <span className="text-sm text-zinc-500 self-start pl-3 pt-1">
          Unit Converters
        </span>
      )}
      <MenuItem
        icone={<IconRulerMeasure />}
        label={collapsed ? "" : "Mass"}
        url="/componente/titulo"
      />
      <MenuItem
        icone={<IconRulerMeasure />}
        label={collapsed ? "" : "Volume"}
        url="/componente/titulo"
      />

      {!collapsed && (
        <span className="text-sm text-zinc-500 self-start pl-3 pt-1">
          Flash Cards
        </span>
      )}
      <MenuItem
        icone={<IconPlayCardA />}
        label={collapsed ? "" : "Flashcards"}
        url="/flashcards"
      />

      {/* {!collapsed && (
        <span className="text-sm text-zinc-500 self-start pl-3 pt-1">
          Exercícios do curso
        </span>
      )}
      <MenuItem
        icone={<IconNumbers />}
        label={collapsed ? "" : "Contador"}
        url="/estado_exercicios/contador"
      />

      <MenuItem
        icone={<IconCode />}
        label={collapsed ? "" : "Componente com estado"}
        url="/estado_exercicios/com"
      />

      <MenuItem
        icone={<IconForms />}
        label={collapsed ? "" : "Campo de texto"}
        url="/estado_exercicios/campoTexto"
      />

      <MenuItem
        icone={<IconCalculator />}
        label={collapsed ? "" : "Calculadora"}
        url="/estado_exercicios/calculadora"
      /> */}
    </div>
  );
}
