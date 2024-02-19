import { works } from "@/app/common/staticData/works";
import WorkCard from "./components/WorkCard";

export default function WorkHistoryPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-base text-white font-semibold">_workHistory</h2>
      <div className="space-y-6">
        {works.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </div>
    </div>
  );
}
