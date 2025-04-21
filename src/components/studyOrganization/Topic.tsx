import chemistryTopics from "@/app/data/constants/chemistryTopics";
import TopicCard from "./TopicCard";

export default function Topics() {
  return (
    <div className="flex justify-between">
      {chemistryTopics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}
