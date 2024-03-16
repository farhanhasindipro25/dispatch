import AprilTimeline from "@/app/dashboard/timeline/components/months/AprilTimeline";
import AugustTimeline from "@/app/dashboard/timeline/components/months/AugustTimeline";
import DecemberTimeline from "@/app/dashboard/timeline/components/months/DecemberTimeline";
import FebruaryTimeline from "@/app/dashboard/timeline/components/months/FebruaryTimeline";
import JanuaryTimeline from "@/app/dashboard/timeline/components/months/JanuaryTimeline";
import JulyTimeline from "@/app/dashboard/timeline/components/months/JulyTimeline";
import JuneTimeline from "@/app/dashboard/timeline/components/months/JuneTimeline";
import MarchTimeline from "@/app/dashboard/timeline/components/months/MarchTimeline";
import MayTimeline from "@/app/dashboard/timeline/components/months/MayTimeline";
import NovemberTimeline from "@/app/dashboard/timeline/components/months/NovemberTimeline";
import OctoberTimeline from "@/app/dashboard/timeline/components/months/OctoberTimeline";
import SeptemberTimeline from "@/app/dashboard/timeline/components/months/SeptemberTimeline";

export const months = [
  {
    label: "JANUARY",
    href: "/january",
    current: true,
    key: "JANUARY",
    component: JanuaryTimeline,
  },
  {
    label: "FEBRUARY",
    href: "/february",
    current: false,
    key: "FEBRUARY",
    component: FebruaryTimeline,
  },
  {
    label: "MARCH",
    href: "/march",
    current: false,
    key: "MARCH",
    component: MarchTimeline,
  },
  {
    label: "APRIL",
    href: "/april",
    current: false,
    key: "APRIL",
    component: AprilTimeline,
  },
  {
    label: "MAY",
    href: "/may",
    current: false,
    key: "MAY",
    component: MayTimeline,
  },
  {
    label: "JUNE",
    href: "/june",
    current: false,
    key: "JUNE",
    component: JuneTimeline,
  },
  {
    label: "JULY",
    href: "/july",
    current: false,
    key: "JULY",
    component: JulyTimeline,
  },
  {
    label: "AUGUST",
    href: "/august",
    current: false,
    key: "AUGUST",
    component: AugustTimeline,
  },
  {
    label: "SEPTEMBER",
    href: "/september",
    current: false,
    key: "SEPTEMBER",
    component: SeptemberTimeline,
  },
  {
    label: "OCTOBER",
    href: "/october",
    current: false,
    key: "OCTOBER",
    component: OctoberTimeline,
  },
  {
    label: "NOVEMBER",
    href: "/november",
    current: false,
    key: "NOVEMBER",
    component: NovemberTimeline,
  },
  {
    label: "DECEMBER",
    href: "/december",
    current: false,
    key: "DECEMBER",
    component: DecemberTimeline,
  },
];
