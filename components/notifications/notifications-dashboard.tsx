import React from "react";
import PageHeader from "../ui/page-header";
import { Tabs, TabsContent, TabsList, TicketsTrigger } from "../ui/tabs";
import AlertContent from "./alert-content";
import SentContent from "./sent-content";

export default function NotificationsDashboard() {
  return (
    <div className="space-y-[24px]">
      <PageHeader
        title="Alert & Notification Center"
        subtitle="Everything that needs your attention, in one place."
      />

      <Tabs className="space-y-[24px]" defaultValue="Alerts">
        <TabsList className="flex items-center gap-[10px]">
          <TicketsTrigger value="Alerts">Alerts</TicketsTrigger>
          <TicketsTrigger value="Sent to Users">Sent to Users</TicketsTrigger>
        </TabsList>

        <TabsContent value="Alerts">
          <AlertContent />
        </TabsContent>
        <TabsContent value="Sent to Users">
          <SentContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
