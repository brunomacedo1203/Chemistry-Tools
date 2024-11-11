"use client";

import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import {} from "@tabler/icons-react";

export default function AreaLateral() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`flex flex-col gap-5 custom-shadow mr-2 transition-width duration-300 ${
        collapsed ? "w-16" : "w-70"
      }`}
    >
      <Logo setCollapsed={setCollapsed} collapsed={collapsed} />

      <Menu collapsed={collapsed} />
    </div>
  );
}
