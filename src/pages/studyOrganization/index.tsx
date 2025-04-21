import Carrinho from "@/components/studyOrganization/Carrinho";
import Topic from "@/components/studyOrganization/Topic";

export default function StudyOrganization() {
  return (
    <div className="flex flex-col p-7 gap-4 text-zinc-900">
      <Carrinho />
      <Topic />
    </div>
  );
}
