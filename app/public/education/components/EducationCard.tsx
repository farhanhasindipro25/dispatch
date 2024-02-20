import { EducationCardProps } from "@/app/interfaces/pages/publicPage/educationCardProps";

export default function EducationCard({ education }: EducationCardProps) {
  const { institution, degree, major, grade } = education;
  return (
    <div className="p-4 w-full rounded-md bg-neutral-900 hover:bg-neutral-800">
      <div className="flex gap-1 items-center">
        <h2 className="text-neutral-300 font-medium text-sm md:text-base">
          {degree},
        </h2>
        <h2 className="text-neutral-300 font-medium text-sm md:text-base">
          {major}
        </h2>
      </div>
      <h2 className="text-neutral-400 font-semibold text-sm md:text-base">
        {institution}
      </h2>
      <p className="text-neutral-400 font-normal text-sm md:text-base">
        Grade: {grade}
      </p>
    </div>
  );
}
