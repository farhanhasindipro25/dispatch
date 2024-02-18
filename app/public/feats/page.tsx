import byteSizeVictories from "@/app/common/staticData/byteSizeVitories";
import Skills from "./skills/Skills";

function Feats() {
  return (
    <div className="divide-y divide-neutral-700 space-y-6">
      <div className="space-y-2">
        <h2 className="text-base text-neutral-300 font-semibold">
          _byteSizeVictories
        </h2>
        <div className="pl-6">
          {byteSizeVictories?.map((item) => (
            <h2
              className="list-item text-neutral-400 text-sm font-medium"
              key={item.item}
            >
              {item.item}
            </h2>
          ))}
        </div>
      </div>
      <div className="pt-6">
        <h2 className="text-base text-neutral-300 font-semibold">
          _currentlyFightingWith
        </h2>
      </div>
      <Skills />
    </div>
  );
}

export default Feats;
