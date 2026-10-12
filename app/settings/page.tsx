import Company from "@/components/settings/company";
import Preference from "@/components/settings/prference";
import Profile from "@/components/settings/profile";
import { Shell } from "@/components/shell";
import PageHeader from "@/components/ui/page-header";
import { NavTabsList, NavTabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import React from "react";

export default function page() {
  return (
    <Shell>
      {" "}
      <div className="space-y-[24px]">
        <PageHeader
          title="Settings"
          subtitle="The north-star adoption metric:scan to pay vs traditional transfer."
        />

        <Tabs className="space-y-[24px]" defaultValue="Profile">
          <div className="bg-white p-[16px] rounded-[16px] border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex justify-start items-center ">
            <NavTabsList className="overflow-x-auto">
              <NavTabsTrigger value="Profile">Profile</NavTabsTrigger>
              <NavTabsTrigger value="Preferences">Preferences</NavTabsTrigger>
              <NavTabsTrigger value="Company">Company</NavTabsTrigger>
            </NavTabsList>
          </div>

          <TabsContent value="Profile">
            <Profile />
          </TabsContent>

          <TabsContent value="Preferences">
            <Preference />
          </TabsContent>

          <TabsContent value="Company">
            <Company />
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
}
