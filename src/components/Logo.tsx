import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className=" flex items-center font-black gap-2.5 px-5 h-16 bg-slate-900"
    >
      <span>
        <IconBrandReact size={30} stroke={1} />
      </span>
      <span className=" text-lm">Chemistry Tools</span>
    </Link>
  );
}
