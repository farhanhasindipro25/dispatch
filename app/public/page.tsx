import StatBadges from "./components/StatBadges";

export default function PublicPage() {
  return (
    <div className="space-y-6">
      <StatBadges />
      <div>
        <h2 className="text-white">So far in 2024</h2>
      </div>
    </div>
  );
}
