import React from "react";
import PageHeader from "../ui/page-header";
import OperationsStat from "./operations-stat";
import RecentActivity from "./recent-activity";
import CaseNotis from "../ui/case-notis";

export default function DashboardLayout() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Operations Dashboard"
        subtitle="Monitor platform performance, oversee daily operations, and resolve issues in real time."
      />

      <OperationsStat />
      <RecentActivity />

      <CaseNotis
        title="DSP -321 Escalated - response needed within 24 hours"
        desc="Delta QuickCash Reconciliation Mismatch"
      />
    </div>
  );
}
