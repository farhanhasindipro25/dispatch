"use client";
import cn from "@/app/common/helpers/UtilsKit";
import { TabOptions } from "@/app/interfaces/components/HorizontalTabProps";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DEFAULT_STYLES = "cursor-pointer text-sm truncate overflow-x-auto";
const ACTIVE_TAB_STYLES =
  "font-semibold text-neutral-300 border-b-2 p-4 border-neutral-300 pb-2";
const DEFAULT_TAB_STYLES = "font-medium text-neutral-500";

export default function HorizontalTabNavigation({ tabs, current }: any) {
  const pathname = usePathname();
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
    <>
      <div className="hidden md:block">
        <ul className="flex w-full gap-8 pb-[7.1px] border-b border-neutral-500 mb-6">
          {tabs.map((tab: TabOptions) => (
            <li key={tab.label}>
              <Link
                href={tab.href}
                className={cn(
                  DEFAULT_STYLES,
                  pathname === tab.href ? ACTIVE_TAB_STYLES : DEFAULT_TAB_STYLES
                )}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden mb-6">
        <select
          id="tabs"
          name="tabs"
          className="block w-full px-3 py-3 text-sm border rounded-md shadow-sm appearance-none text-neutral-500 border-neutral-800 placeholder-neutral-400 focus:border-primary-500 focus:outline-none bg-neutral-800 focus:ring-primary-500 active:border-primary-500 cursor-text"
          value={current.key}
          onChange={handleTabChange}
        >
          {tabs.map((tab: TabOptions) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
