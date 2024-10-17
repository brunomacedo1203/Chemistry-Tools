import Link from "next/link";

interface MenuItem {
  label: string;
  url: string;
  icone: any;
}

export default function MenuItem(props: MenuItem) {
  return (
    <Link
      href={props.url}
      className={`
        flex items-center gap-4 
        text-base w-full px-4 py-2 rounded-md"
        hover:bg-zinc-900
     `}
    >
      <span> {props.icone}</span>
      <span>{props.label}</span>
    </Link>
  );
}
