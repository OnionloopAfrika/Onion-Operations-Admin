import type { HTMLAttributes } from "react";

export type BadgeVariant =
  | "active"
  | "pending"
  | "suspended"
  | "failed"
  | "dormant"
  | "tier"
  | "open"
  | "in_review"
  | "escalated"
  | "resolved"
  | "flagged"
  | "discrepancy"
  | "float_request"
  | "under_review"
  | "ready"
  | "system"
  | "selected";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  active: "bg-[#E7F6EC] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#04802E]",
  system: "bg-[#E3EFFC] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#0D5EBA]",
  selected: "bg-[#E3EFFC] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#0D5EBA]",
  dormant: "bg-[#EBEBEB] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#04802E]",
  suspended: "bg-[#FBEAE9] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#CB1A14]",
  tier: "bg-[#B5E3C4] min-h-[30px] px-[8px] py-[4px] font-[500] text-[12px] text-[#024E44]",
  pending: "bg-[#FBE2B7] min-h-[30px] px-[8px] py-[4px] font-[500] text-[14px] text-[#DD900D]",
  open: "bg-[#FEF6E7] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#DD900D]",
  in_review: "bg-[#FEF6E7] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#DD900D]",
  escalated: "bg-[#FBEAE9] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#CB1A14]",
  resolved: "bg-[#E7F6EC] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#04802E]",
  flagged: "bg-[#FBEAE9] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#CB1A14]",
  discrepancy: "bg-[#FBEAE9] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#CB1A14]",
  float_request:
    "bg-[#FEF6E7] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#DD900D]",
  under_review:
    "bg-[#FEF6E7] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#DD900D]",
  ready: "bg-[#E7F6EC] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#04802E]",
  failed: "bg-[#FBEAE9] min-h-[30px] px-[12px] py-[4px] font-[500] text-[14px] text-[#CB1A14]",
};

export default function Badge({
  variant = "active",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full h-6 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
