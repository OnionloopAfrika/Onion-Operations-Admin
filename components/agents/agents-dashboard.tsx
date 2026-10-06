import React from "react";
import PageHeader from "../ui/page-header";
import { DotIcon } from "../icons/svgs";
import AgentsTable from "./agents-table";

export default function AgentsDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Agent"
        subtitle="Every individual user, agent, merchant, and aggregator on Onionloop."
      />

      <div className="p-[16px] rounded-[16px] bg-[#FBEAE9] flex items-center gap-[16px]">
        <DotIcon className="w-[10px] h-[10px]" color="#CB1A14" />{" "}
        <div className="space-y-[4px]">
          <p className="font-[500] text-[14px] text-[#131313] max-lg:text-[12px]">
            Delta Quickcash — cash discrepancy flagged
          </p>

          <p className="font-[400] text-[14px] text-[#6C6C6C] max-lg:text-[10px]">
            Cash reconciliation mismatch of ₦14,200 reported by customer dispute
          </p>
        </div>
      </div>

      <AgentsTable />
    </div>
  );
}
