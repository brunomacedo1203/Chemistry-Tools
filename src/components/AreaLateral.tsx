"use client";

import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import {} from "@tabler/icons-react";

// Definindo os tipos de propriedades aceitas
interface AreaLateralProps {
  titulo: string;
  cor: string;
  children: React.ReactNode;
}

export default function AreaLateral({
  titulo,
  cor,
  children,
}: AreaLateralProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`flex flex-col gap-5 custom-shadow mr-2 transition-width duration-300 ${
        collapsed ? "w-16" : "w-70"
      }`}
      style={{ backgroundColor: cor }}
    >
      <Logo setCollapsed={setCollapsed} collapsed={collapsed} />
      <Menu collapsed={collapsed} />
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
}
