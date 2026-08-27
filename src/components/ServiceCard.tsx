import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: string;
  title: string;
  desc: string;
  checked: boolean;
  onToggle: () => void;
};

export function ServiceCard({ icon, title, desc, checked, onToggle }: Props) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl border bg-card px-4 py-4 text-left transition-all",
        checked
          ? "border-brand bg-brand-softer shadow-[0_2px_12px_-4px_var(--brand)]"
          : "border-border",
      )}
    >
      {icon.startsWith("http") || icon.startsWith("/") ? (
        <img
          src={icon}
          alt=""
          aria-hidden
          loading="lazy"
          className="size-9 shrink-0 object-contain"
        />
      ) : (
        <span className="flex size-9 shrink-0 items-center justify-center text-2xl leading-none" aria-hidden>
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-bold text-ink">{title}</span>
        <span className="mt-0.5 block text-[13px] text-ink-sub">{desc}</span>
      </span>
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors",
          checked ? "border-brand bg-brand" : "border-border bg-background",
        )}
      >
        {checked && <Check className="size-4 text-brand-foreground" strokeWidth={3} />}
      </span>
    </button>
  );
}
