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
    <ul className="flex w-full gap-6 pb-[7.1px] border-b border-neutral-500 mb-6 overflow-x-auto no-scrollbar bg-neutral-950">
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
  );
}
