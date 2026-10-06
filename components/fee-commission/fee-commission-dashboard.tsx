import React from "react";
import PageHeader from "../ui/page-header";
import IndividualTransaction from "./individual-transaction";
import AgentTransaction from "./agent-transaction";
import OnionSoloMerchant from "./onion-solo-merchant";
import CrewMega from "./crew-mega";
import AggregatorTarget from "./aggregator-target";
import DisputeTargets from "./dispute-targets";

export default function FeeCommissionDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Fee & Commission"
        subtitle="Manage transaction fees, commission rates, and payout rules."
      />

      <IndividualTransaction />
      <AgentTransaction />
      <OnionSoloMerchant />
      <CrewMega />
      <AggregatorTarget />
      <DisputeTargets />
    </div>
  );
}
