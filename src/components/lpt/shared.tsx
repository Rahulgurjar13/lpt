import { type ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  action?: ReactNode;
}) {
  const isLeft = align === "left";
  return (
    <div
      className={
        isLeft
          ? "flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          : "mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
      }
    >
      <div className={isLeft ? "max-w-2xl" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 h-display text-3xl sm:text-4xl md:text-[2.5rem]">{title}</h2>
        {subtitle && <p className="mt-4 text-body text-base sm:text-lg">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
