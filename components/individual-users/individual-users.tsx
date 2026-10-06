import React from "react";
import PageHeader from "../ui/page-header";
import IndividualUsersTable from "./individual-users-table";

export default function IndividualUsers() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Individual Users"
        subtitle="Every individual user, agent, merchant, and aggregator on Onionloop."
      />

      <IndividualUsersTable />
    </div>
  );
}
