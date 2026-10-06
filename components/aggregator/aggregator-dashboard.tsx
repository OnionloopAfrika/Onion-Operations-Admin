import React from "react";
import PageHeader from "../ui/page-header";
import AggregatorTable from "./aggregator-table";

export default function AggregatorDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Aggregators"
        subtitle="Every individual user, agent, merchant, and aggregator on Onionloop."
      />

      <AggregatorTable />
    </div>
  );
}
