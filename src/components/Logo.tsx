import { IconBrandReact, IconTestPipe } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className={` 
        flex items-center font-black gap-2.5 
        px-5 h-16 bg-zinc-200`}
    >
      <span>
        <IconTestPipe size={40} stroke={1} color="black" />
      </span>
      <span className=" text-lm text-zinc-900 text-2xl">Chemistry Tools</span>
    </Link>
  );
}
