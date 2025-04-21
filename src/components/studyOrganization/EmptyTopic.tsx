import { IconShoppingCart } from "@tabler/icons-react";

export default function EmptyTopic() {
  return (
    <div className="flex flex-col items-center opacity-45">
      <IconShoppingCart size={60} stroke={1} />
      <span>No topic</span>
    </div>
  );
}
