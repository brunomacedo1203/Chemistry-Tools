import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import AreaLateral from "./AreaLateral";

export default function Pagina(props: any) {
  const ano = new Date().getFullYear();
  return (
    <div className=" flex h-screen bg-zinc-100">
      <AreaLateral />
      <div className=" flex flex-col flex-1">
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-16 bg-zinc-100"
        />
        <Conteudo>{props.children}</Conteudo>
        <Rodape
          textoEsquerda="Email Contact"
          textoDireita={`Developed in ${ano}`}
        />
      </div>
    </div>
  );
}
