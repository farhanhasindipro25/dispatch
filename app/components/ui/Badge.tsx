import cn from "@/app/common/helpers/UtilsKit";
import { BadgeProps } from "@/app/interfaces/uiComponents/BadgeProps";
import { cva } from "class-variance-authority";

const DEFAULT_BADGE_STYLES =
  "w-fit flex items-start gap-2 px-3 py-2 text-sm font-semibold rounded-md border border-neutral-800";
const INFO_BADGE_STYLES =
  "bg-neutral-900 text-neutral-400 hover:bg-neutral-800";
const INFO_ALT_BADGE_STYLES =
  "bg-neutral-950 text-neutral-400 hover:bg-neutral-900";

const BADGE_VARIANTS = cva(DEFAULT_BADGE_STYLES, {
  variants: {
    variant: {
      INFO: INFO_BADGE_STYLES,
      INFO_ALT: INFO_ALT_BADGE_STYLES,
    },
  },
});

export default function Badge({
  children,
  className,
  variant,
  ...props
}: BadgeProps) {
  const BADGE_STYLES = cn(BADGE_VARIANTS({ variant }), className);

  return (
    <span className={BADGE_STYLES} {...props}>
      {children}
    </span>
  );
}
