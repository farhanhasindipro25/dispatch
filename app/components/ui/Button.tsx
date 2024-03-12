import cn from "@/app/common/helpers/UtilsKit";
import { ButtonProps } from "@/app/interfaces/components/ButtonProps";
import { cva } from "class-variance-authority";

const DEFAULT_BUTTON_STYLES =
  "h-fit inline-flex items-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-xs md:text-sm font-bold cursor-pointer";

const PRIMARY_BUTTON_STYLES =
  "bg-neutral-950 text-neutral-400 hover:bg-neutral-900 active:bg-neutral-900 focus:bg-neutral-900 focus:ring-neutral-900";
const SECONDARY_BUTTON_STYLES =
  "bg-neutral-50 text-neutral-900 hover:bg-neutral-500 active:bg-neutral-500 focus:bg-neutral-500 focus:ring-neutral-500";
const TERTIARY_BUTTON_STYLES =
  "text-neutral-400 active:bg-neutral-500 hover:text-white underline focus:bg-neutral-500 focus:ring-neutral-500 p-0";
const ACCENT_BUTTON_STYLES =
  "text-neutral-400 bg-black active:bg-neutral-500 hover:text-neutral-300 border border-neutral-400 focus:bg-neutral-500 focus:ring-neutral-500";

const SKELETON_BUTTON_STYLES = "bg-gray-200 text-gray-200";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      PRIMARY: PRIMARY_BUTTON_STYLES,
      SECONDARY: SECONDARY_BUTTON_STYLES,
      TERTIARY: TERTIARY_BUTTON_STYLES,
      ACCENT: ACCENT_BUTTON_STYLES,
    },
  },
});

export default function Button({
  children,
  variant,
  className,
  type,
  onClick,
  ...props
}: ButtonProps) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant }), className);

  return (
    <button className={BUTTON_STYLES} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
