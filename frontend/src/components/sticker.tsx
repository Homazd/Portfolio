import type { CSSProperties, ReactNode } from "react";

const COLORS = {
  butter: "bg-butter text-on-color",
  mint: "bg-mint text-on-color",
  sky: "bg-sky text-on-color",
  white: "bg-white text-black",
} as const;

/** A tilted, outlined badge that pops in once when the page loads. */
export function Sticker({
  children,
  color = "butter",
  rotate = 0,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  color?: keyof typeof COLORS;
  rotate?: number;
  index?: number;
  className?: string;
}) {
  const style = {
    "--r": `${rotate}deg`,
    "--i": index,
    transform: `rotate(${rotate}deg)`,
  } as CSSProperties;

  return (
    <span
      style={style}
      className={`sticker inline-flex items-center gap-2 rounded-2xl border-3 border-black px-4 py-2 font-bold shadow-[4px_4px_0_#000] ${COLORS[color]} ${className}`}
    >
      {children}
    </span>
  );
}
