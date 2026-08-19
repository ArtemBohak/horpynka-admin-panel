import { cn } from "@/lib/utils";
import type { BadgeTone } from "@/lib/labels";

const TONE_CLASSES: Record<BadgeTone, string> = {
  neutral: "bg-secondary text-secondary-foreground border-border",
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-warning/15 text-[#8a6d0b] border-warning/40",
  destructive: "bg-destructive/10 text-destructive border-destructive/30",
  info: "bg-accent text-accent-foreground border-primary/20",
};

export function StatusBadge({
  label,
  tone = "neutral",
  className,
}: {
  label: string;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {label}
    </span>
  );
}
