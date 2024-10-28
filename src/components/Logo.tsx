import { IconBrandReact, IconTestPipe, IconTools } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className={` 
        flex items-center font-black gap-2.5 
        px-5 h-16  border-zinc-400 shadow-md`}
    >
      <span
        className="text-lm font-black text-2xl 
                    bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text"
      >
        Chemistry Tools
      </span>
      <span>
        <IconTools size={40} stroke={1} color="black" />
      </span>
    </Link>
  );
}
