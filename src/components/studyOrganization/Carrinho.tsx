import Content from "../Content";
import EmptyTopic from "./EmptyTopic";

export default function Carrinho() {
  return (
    <Content title="Cart" color="green">
      <EmptyTopic />
    </Content>
  );
}
