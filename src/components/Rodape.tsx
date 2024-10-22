interface Rodape {
  textoEsquerda: string;
  textoDireita: string;
}
export default function Rodape(props: Rodape) {
  return (
    <div
      className={`
        flex justify-between items-center   
        h-16 text-base px-10 bg-zinc-100
        border-t border-zinc-400 text-zinc-500
          `}
    >
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
