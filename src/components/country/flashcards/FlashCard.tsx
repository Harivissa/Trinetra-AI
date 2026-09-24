import React from "react";
import { ArrowRight } from "lucide-react";

export interface FlashCardProps {
  sectionNumber?: string;
  title: string;
  category?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large" | "wide" | "full";
  source?: string;
  actionLabel?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export const FlashCard: React.FC<FlashCardProps> = ({
  sectionNumber,
  title,
  category,
  icon,
  size = "medium",
  source,
  actionLabel = "Inspect →",
  onClick,
  className = "",
  children,
  headerRight,
}) => {
  const sizeClasses = {
    small: "col-span-1",
    medium: "col-span-1 md:col-span-1",
    large: "col-span-1 md:col-span-2",
    wide: "col-span-1 md:col-span-2 lg:col-span-3",
    full: "col-span-full",
  }[size];

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl border border-white/10 bg-[#090c12] hover:border-trinetra-saffron/50 hover:bg-[#0d121c] p-5 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-trinetra-saffron/5 flex flex-col justify-between ${
        onClick ? "cursor-pointer" : ""
      } ${sizeClasses} ${className}`}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            {sectionNumber && (
              <span className="font-mono text-xs font-bold text-trinetra-saffron px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/20 shrink-0">
                {sectionNumber}
              </span>
            )}
            <div>
              {category && (
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  {category}
                </span>
              )}
              <h3 className="font-display text-base font-semibold text-white group-hover:text-trinetra-saffron transition-colors leading-tight">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {headerRight}
            {icon && (
              <div className="text-neutral-400 group-hover:text-trinetra-saffron transition-colors">
                {icon}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-3">{children}</div>
      </div>

      {/* Card Footer / Action Bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
        <span className="truncate max-w-[200px] text-[10px] text-neutral-400">
          {source || "Sovereign Intelligence Desk"}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-trinetra-saffron">
          <span>{actionLabel}</span>
          <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
