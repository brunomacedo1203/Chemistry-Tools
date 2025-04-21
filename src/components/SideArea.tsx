"use client";

import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import {} from "@tabler/icons-react";

// Defining the types of properties accepted
interface SideAreaProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function SideArea({
  title,
  color,
  children,
}: SideAreaProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col gap-5 custom-shadow mr-2 transition-width duration-300 ${
        collapsed ? "w-16" : "w-70"
      }`}
      style={{ backgroundColor: color }}
    >
      <Logo setCollapsed={setCollapsed} collapsed={collapsed} />
      <Menu collapsed={collapsed} />
      <h1>{title}</h1>
      <div>{children}</div>
    </aside>
  );
}
