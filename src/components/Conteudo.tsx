interface ConteudoProps {
  children: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
         flex p-4 items-start flex-1 
         bg-zinc-100
         text-3xl overflow-auto`} 
    >
      {props.children}
    </div>
  );
}
