import React from "react";
import PageHeader from "../ui/page-header";
import { NavTabsList, NavTabsTrigger, Tabs, TabsContent } from "../ui/tabs";
import All from "./all";
import Kyc from "./kyc";
import Account from "./account";
import Payout from "./payout";
import Dispute from "./dispute";
import Config from "./config";

export default function AuditDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Audit log"
        subtitle="Full, filterable trail of every action taken in this dashboard, this is what a regulator or auditor ask for"
      />

      <Tabs className="space-y-[24px]" defaultValue="All">
        <div className="bg-white p-[16px] rounded-[16px] border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex justify-start items-center ">
          <NavTabsList className="overflow-x-auto">
            <NavTabsTrigger value="All">All</NavTabsTrigger>
            <NavTabsTrigger value="KYC">KYC</NavTabsTrigger>
            <NavTabsTrigger value="Account">Account</NavTabsTrigger>
            <NavTabsTrigger value="Payout">Payout</NavTabsTrigger>
            <NavTabsTrigger value="Dispute">Dispute</NavTabsTrigger>
            <NavTabsTrigger value="Config">Config</NavTabsTrigger>
            <NavTabsTrigger value="Merchant">Merchant</NavTabsTrigger>
          </NavTabsList>
        </div>

        <TabsContent value="All">
          <All />
        </TabsContent>

        <TabsContent value="KYC">
          <Kyc />
        </TabsContent>

        <TabsContent value="Account">
          <Account />
        </TabsContent>

        <TabsContent value="Payout">
          <Payout />
        </TabsContent>

        <TabsContent value="Dispute">
          <Dispute />
        </TabsContent>

        <TabsContent value="Config">
          <Config />
        </TabsContent>
      </Tabs>
    </div>
  );
}
