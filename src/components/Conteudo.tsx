interface Conteudo {
  children: any;
}

export default function Conteudo(props: Conteudo) {
  return (
    <div
      className={`
         flex p-4 items-start flex-1 
         bg-zinc-100
         text-3xl  h-screen`}
    >
      {props.children}
    </div>
  );
}
