import React from "react";
import PageHeader from "../ui/page-header";
import { Tabs, TabsContent, TabsList, TicketsTrigger } from "../ui/tabs";
import OnionSolo from "./onion-solo";
import OnionCrew from "./onion-crew";
import OnionMega from "./onion-mega";

export default function MerchantsDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Merchants"
        subtitle="Every individual user, agent, merchant, and aggregator on Onionloop."
      />

      <Tabs defaultValue="OnionSolo">
        <TabsList className="flex items-center gap-[10px] mb-[20px] max-lg:grid max-lg:grid-cols-2">
          <TicketsTrigger value="OnionSolo">OnionSolo</TicketsTrigger>
          <TicketsTrigger value="OnionCrew">OnionCrew</TicketsTrigger>
          <TicketsTrigger value="OnionMega">OnionMega</TicketsTrigger>
        </TabsList>
        <TabsContent value="OnionSolo">
          <OnionSolo />
        </TabsContent>

        <TabsContent value="OnionCrew">
          <OnionCrew />
        </TabsContent>

        <TabsContent value="OnionMega">
          <OnionMega />
        </TabsContent>
      </Tabs>
    </div>
  );
}
