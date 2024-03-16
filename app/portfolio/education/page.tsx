import { educations } from "@/app/common/staticData/educations";
import EducationCard from "@/app/public/education/components/EducationCard";

export default function EducationPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base text-neutral-300 font-semibold">_education</h2>
        <h2 className="text-sm md:text-base text-neutral-400 font-medium">
          _education.length = 3
        </h2>
      </div>
      <div className="space-y-6">
        {educations.map((education) => (
          <EducationCard key={education.institution} education={education} />
        ))}
      </div>
    </div>
  );
}
