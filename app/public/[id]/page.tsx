import MonthlyTimeline from "@/app/public/components/ui/MonthlyTimeline";
export default function PublicPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
   
      <MonthlyTimeline userId={params.id} isPublic={true}/>
    </div>
  );
}
