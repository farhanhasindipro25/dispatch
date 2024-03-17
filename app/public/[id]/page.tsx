import MonthlyTimeline from "@/app/public/components/ui/MonthlyTimeline";
import IntroAndBio from "../components/IntroAndBio/IntroAndBio";
export default function PublicPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <IntroAndBio userId={params.id} />
      <MonthlyTimeline userId={params.id} isPublic={true}/>
    </div>
  );
}
