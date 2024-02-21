import { EducationCardProps } from "@/app/interfaces/pages/publicPage/educationCardProps";

export default function EducationCard({ education }: EducationCardProps) {
  const { institution, degree, major, grade } = education;
  return (
    <div className="p-4 w-full rounded-md bg-neutral-900 hover:bg-neutral-800 space-y-2 md:space-y-0">
      <div className="flex flex-col md:flex-row justify-start items-start gap-1 md:items-center">
        <h2 className="text-neutral-300 font-medium text-sm">
          {degree},
        </h2>
        <h2 className="text-neutral-300 font-medium text-sm">
          {major}
        </h2>
      </div>
      <div>
        <h2 className="text-neutral-400 font-semibold text-sm">
          {institution}
        </h2>
        <p className="text-neutral-400 font-normal text-sm">Grade: {grade}</p>
      </div>
    </div>
  );
}
