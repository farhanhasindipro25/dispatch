"use client";
import cn from "@/app/common/helpers/UtilsKit";
import { TabOptions } from "@/app/interfaces/components/HorizontalTabProps";
import { usePathname, useRouter } from "next/navigation";

const DEFAULT_STYLES = "cursor-pointer text-sm p-4";
const ACTIVE_TAB_STYLES = "font-semibold text-neutral-300";
const DEFAULT_TAB_STYLES = "font-medium text-neutral-500";

export default function RunningYearsCalendar({ tabs, current, setTab }: any) {
  const router = useRouter();

  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedTab = tabs.find(
      (tab: { key: number }) => tab.key === parseInt(selectedValue)
    );

    if (selectedTab) {
      router.push(selectedTab.href);
    }
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white font-bold text-center">2024</h2>
      <ul className="flex w-full justify-start lg:justify-around border border-neutral-700 rounded-full overflow-x-auto">
        {tabs?.map((tab: TabOptions) => (
          <li
            key={tab.label}
            className={cn(
              DEFAULT_STYLES,
              tab.key === current ? ACTIVE_TAB_STYLES : DEFAULT_TAB_STYLES
            )}
            onClick={() => setTab(tab.key)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
