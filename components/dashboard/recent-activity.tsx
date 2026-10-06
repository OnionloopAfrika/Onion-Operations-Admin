import React from "react";
import { ArrowRight } from "../icons/svgs";

const ACTIVITY = [
  {
    activity: "Approved KYC for Ibrahim Lawal (09123489192) ",
    time: "2hrs ago",
  },

  {
    activity: "Suspended Jimoh Gabriel  - Rapid repeat transfer flagged ",
    time: "2hrs ago",
  },

  {
    activity: "Processed Commission Payout of ₦1.50M to Obi & Co Field Team",
    time: "2hrs ago",
  },

  {
    activity: "User John A. upgraded to Tier 2",
    time: "2hrs ago",
  },

  {
    activity: "Approved ₦300,000 float top-up for Northside Agency ",
    time: "2hrs ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="space-y-[16px] p-[24px] rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
      <div className="flex justify-between items-center">
        <p className="font-[600] text-[16px] text-[#131313]">Recent Activity</p>
        <span className="flex items-center gap-[10px] font-[500] text-[12px] text-[#04907E]">
          View All <ArrowRight color="#04907E" />
        </span>
      </div>

      <div className="space-y-[16px]">
        {ACTIVITY.map((item, i) => (
          <div className="flex justify-between items-center pb-[16px] border-b  border-b-[#C7C7C7] last:border-b-0 max-lg:flex-col max-lg:items-start max-lg:gap-[20px]">
            <p className="font-[500] text-[14px] text-[#131313]">{item.activity}</p>
            <p className="font-[500] text-[14px] text-[#8A8A8A]">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
