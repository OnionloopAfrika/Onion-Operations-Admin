"use client";

import React, { useState } from "react";
import PageHeader from "../ui/page-header";
import { Tabs, TabsContent, TabsList, TicketsTrigger } from "../ui/tabs";
import Individual from "./individual";
import Merchant from "./merchant";
import Agent from "./agent";
import Aggregator from "./aggregator";

export default function KycPage() {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="KYC & Onboarding Queue"
        subtitle="Manage onboarding requests by reviewing submitted verification documents for all account types."
      />

      <Tabs className="space-y-[24px]" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center w-full max-lg:flex-col max-lg:gap-[20px]  max-lg:items-start">
          <TabsList className="flex items-center gap-[10px] max-lg:grid max-lg:grid-cols-2 max-lg:w-full">
            <TicketsTrigger value="individual">Individuals (3)</TicketsTrigger>
            <TicketsTrigger value="merchant">Merchant (2)</TicketsTrigger>
            <TicketsTrigger value="agent">Agent (1)</TicketsTrigger>
            <TicketsTrigger value="aggregator">Aggregator (1)</TicketsTrigger>
          </TabsList>

          {activeTab === "individual" && (
            <button className="bg-[#024E44] rounded-[8px] py-[8px] px-[16px] font-[500] text-[16px] text-[#FFFFFF] max-lg:w-full">
              Select all high confidence (2)
            </button>
          )}
        </div>

        <TabsContent value="individual">
          <Individual />
        </TabsContent>
        <TabsContent value="merchant">
          <Merchant />
        </TabsContent>
        <TabsContent value="agent">
          <Agent />
        </TabsContent>
        <TabsContent value="aggregator">
          <Aggregator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
