"use client";

export default function HorizontalTabNavigation() {
  return (
    <div className="flex items-center justify-between border-b border-neutral-800 mb-6 pb-2">
      <div>
        <h2 className="text-white font-semibold">_timeline</h2>
      </div>
      <div>
        <h2 className="text-neutral-400 font-medium">_feats</h2>
      </div>
      <div>
        <h2 className="text-neutral-400 font-medium">_work</h2>
      </div>
      <div>
        <h2 className="text-neutral-400 font-medium">_projects</h2>
      </div>
      <div>
        <h2 className="text-neutral-400 font-medium">_blogs</h2>
      </div>
      <div>
        <h2 className="text-neutral-400 font-medium">_onTheWeb</h2>
      </div>
    </div>
  );
}
