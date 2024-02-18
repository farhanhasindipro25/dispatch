import StatsBadge from "@/app/components/ui/StatsBadge";

export default function PublicPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-4 md:justify-between">
        <StatsBadge label="experience" value="02 years" activeColor="green" />
        <StatsBadge
          label="openForWork"
          value="Truthy McTruthFace"
          activeColor="green"
        />
        <StatsBadge label="worked@" value="REPLIQ Limited" activeColor="red" />
        <StatsBadge label="location" value="Bangladesh" activeColor="green" />
      </div>
      <div>
        <h2 className="text-white">So far in 2024</h2>
      </div>
    </div>
  );
}
