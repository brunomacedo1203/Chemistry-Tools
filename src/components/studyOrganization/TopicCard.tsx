interface ChemistryTopic {
  id: string;
  area: string;
  subtopic: string;
  description: string;
}

export default function TopicCard({ topic }: { topic: ChemistryTopic }) {
  return (
    <div className=" bg-white shadow rounded-md items-center">
      <span className="font-bold text-xl">{topic.area}</span>
      <h2 className=" text-lg">{topic.subtopic}</h2>
    </div>
  );
}

//className = "flex justify-between items-center px-4 bg-white shadow rounded-md";
//
