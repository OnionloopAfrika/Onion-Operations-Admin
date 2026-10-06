import React from "react";
import PageHeader from "../ui/page-header";
import ReportStat from "./report-stat";
import ScheduleReports from "./schedule-reports";
import ReportHistory from "./report-history";

export default function ReportsDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Reports & Exports"
        subtitle="Access detailed reports to monitor performance, identify trends, and make informed decisions."
      />

      <ReportStat />
      <ScheduleReports />
      <ReportHistory />
    </div>
  );
}
