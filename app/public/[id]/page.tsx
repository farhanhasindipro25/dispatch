import MonthlyTimeline from "@/app/public/components/ui/MonthlyTimeline";
import StatsBadge from "@/app/components/ui/StatsBadge";

export default function PublicPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      {/* <div className="flex flex-wrap justify-center gap-4 md:justify-between">
        <StatsBadge label="experience" value="02 years" activeColor="green" />
        <StatsBadge
          label="openForWork"
          value="Truthy McTruthFace"
          activeColor="green"
        />
        <StatsBadge label="worked@" value="REPLIQ Limited" activeColor="red" />
        <StatsBadge label="location" value="Bangladesh" activeColor="green" />
      </div> */}
      <MonthlyTimeline userId={params.id} isPublic={true}/>
    </div>
  );
}
