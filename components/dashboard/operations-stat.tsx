import React from "react";
import { ArrowRight, RightArrowIcon } from "../icons/svgs";
import StatGrid from "../ui/stat-grid";

const COLORED_GRID = [
  {
    value: "7",
    desc: "KYC Reviewing Pending",
    action: "Needs action",
  },

  {
    value: "0",
    desc: "Open Disputes",
    action: "No action needed",
  },

  {
    value: "2",
    desc: "Merchants Application",
    action: "Needs action",
  },

  {
    value: "1",
    desc: "Agents Float Request",
    action: "Needs action",
  },
];

const STAT = [
  {
    value: "1,800",
    label: "Individual Users",
  },

  {
    value: "3,500",
    label: "Merchants (All Levels)",
  },

  {
    value: "300",
    label: "Active Agents",
  },

  {
    value: "80",
    label: "Active Aggregators",
  },
];

export default function OperationsStat() {
  const bg = {
    kyc: "bg-[#FEF6E7]",
    dispute: "bg-[#FBEAE9]",
    merchants: "bg-[#E7F6EC]",
    agents: "bg-[#E3EFFC]",
  };

  return (
    <div className="space-y-[12px]">
      <div className="w-full grid grid-cols-4 gap-[16px] max-lg:grid-cols-1">
        {COLORED_GRID.map((item, i) => (
          <div
            key={i}
            className={`min-h-[100px] p-[16px] rounded-[8px] space-y-[8px] ${item.desc === "KYC Reviewing Pending" ? bg.kyc : item.desc === "Open Disputes" ? bg.dispute : item.desc === "Merchants Application" ? bg.merchants : item.desc === "Agents Float Request" ? bg.agents : ""}     `}
          >
            <p
              className={`font-[600] text-[20px] ${item.desc === "KYC Reviewing Pending" ? "text-[#DD900D]" : item.desc === "Open Disputes" ? "text-[#CB1A14]" : item.desc === "Merchants Application" ? "text-[#04802E]" : item.desc === "Agents Float Request" ? "text-[#0D5EBA]" : ""}  `}
            >
              {item.value}
            </p>
            <p
              className={`font-[400] text-[10px] ${item.desc === "KYC Reviewing Pending" ? "text-[#DD900D]" : item.desc === "Open Disputes" ? "text-[#CB1A14]" : item.desc === "Merchants Application" ? "text-[#04802E]" : item.desc === "Agents Float Request" ? "text-[#0D5EBA]" : ""}  `}
            >
              {item.desc}
            </p>
            <div className="flex items-center gap-[4px]">
              <p className={`font-[500] text-[10px] text-[#6C6C6C]`}>{item.action}</p>
              {item.desc !== "Open Disputes" && <ArrowRight color="#6C6C6C" />}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-4 gap-[16px] max-lg:grid-cols-1">
        {STAT.map((item, i) => (
          <StatGrid key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </div>
  );
}
