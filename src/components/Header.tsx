interface Header {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Header(props: Header) {
  return (
    <div
      className={`flex flex-col justify-center px-5 border-b border-zinc-400 mb-2 shadow-md ${
        props.className ?? ""
      }`}
    >
      <h1 className="text-xl font-black text-zinc-900">{props.title}</h1>
      <h2 className="text-sm text-zinc-700">{props.subtitle}</h2>
    </div>
  );
}
