interface Cabecalho {
  titulo: string;
  subtitulo?: string;
  className?: string;
}
export default function Cabecalho(props: Cabecalho) {
  return (
    <div
      className={` 
        flex flex-col 
        justify-center px-5 
        border-b border-zinc-400
        mb-2
        shadow-md

        ${props.className ?? ""}
    `}
    >
      <h1 className="text-xl font-black text-zinc-900">{props.titulo}</h1>
      <h2 className="text-sm text-zinc-700">{props.subtitulo}</h2>
    </div>
  );
}
