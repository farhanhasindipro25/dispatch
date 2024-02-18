import byteSizeVictories from "../../common/staticData/byteSizeVitories";
import Skills from "./skills/Skills";

function Feats() {
  return (
    <div className="divide-y divide-neutral-700 space-y-12">
      <div>
        <h2 className="text-base text-neutral-300 font-semibold">
          byteSizeVictories
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
      <Skills />
    </div>
  );
}

export default Feats;
