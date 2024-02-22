import { works } from "@/app/common/staticData/works";
import WorkCard from "./components/WorkCard";

export default function WorkHistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base text-neutral-300 font-semibold">
          _workHistory
        </h2>
        <h2 className="text-sm md:text-base text-neutral-400 font-medium">
          _workHistory.length = 5
        </h2>
      </div>
      <div className="space-y-6">
        {works.map((work) => (
          <WorkCard key={work.company} work={work} />
        ))}
      </div>
    </div>
  );
}
