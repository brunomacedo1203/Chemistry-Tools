import Conteudo from "../Conteudo";
import EmptyTopic from "./EmptyTopic";

export default function Carrinho() {
  return (
    <Conteudo titulo="Carrinho" cor="green">
      <EmptyTopic />
    </Conteudo>
  );
}
