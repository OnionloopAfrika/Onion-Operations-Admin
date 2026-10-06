"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { Modal } from "../ui/modal";
import Select from "../ui/select";

const subscriptionFees = [
  {
    plan: "Starter",
    appliesTo: "OnionCrew, 1–5 staff",
    monthlyFee: "₦2,500",
    includes: "Dynamic QR ordering, basic inventory tracking",
  },
  {
    plan: "Growth",
    appliesTo: "OnionCrew, 6–15 staff",
    monthlyFee: "₦5,000",
    includes: "Starter + staff shift tracking, sales reports",
  },
  {
    plan: "Enterprise Base",
    appliesTo: "OnionMega, per HQ",
    monthlyFee: "₦25,000",
    includes: "Multi-branch dashboard, role-based staff access, consolidated reporting",
  },
  {
    plan: "Enterprise Per-Branch",
    appliesTo: "OnionMega, per branch",
    monthlyFee: "₦4,000",
    includes: "Branch-level inventory sync, local staff roster",
  },
];

export default function CrewMega() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof subscriptionFees)[number] | null>(null);

  const closeProposal = () => setSelectedPlan(null);

  return (
    <>
      <section className="space-y-[24px] rounded-[16px] border border-[#E5E7EB] bg-white p-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="font-[600] text-[16px] text-[#131313]">
          OnionCrew &amp; OnionMega Merchant Subscription Fees{" "}
          <span className="font-[500] text-[14px] text-[#DD900D]">(Not Finalized)</span>
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[780px] table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[20%]" />
              <col className="w-[21%]" />
              <col className="w-[13%]" />
              <col className="w-[34%]" />
              <col className="w-[12%]" />
            </colgroup>
            <thead>
              <tr className="h-[48px] border-b border-[#C7C7C7]">
                <th className="pr-[12px] font-[600] text-[14px] text-[#6C6C6C]" scope="col">
                  Plan
                </th>
                <th className="px-[12px] font-[600] text-[14px] text-[#6C6C6C]" scope="col">
                  Applies To
                </th>
                <th className="px-[12px] font-[600] text-[14px] text-[#6C6C6C]" scope="col">
                  Monthly Fee
                </th>
                <th className="px-[12px] font-[600] text-[14px] text-[#6C6C6C]" scope="col">
                  Includes
                </th>
                <th scope="col">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {subscriptionFees.map((item) => (
                <tr
                  key={item.plan}
                  className="min-h-[62px] border-b border-[#C7C7C7] last:border-b-0"
                >
                  <td className="py-[16px] pr-[12px] font-[500] text-[14px] text-[#242424]">
                    {item.plan}
                  </td>
                  <td className="px-[12px] py-[16px] font-[500] text-[14px] text-[#6C6C6C]">
                    {item.appliesTo}
                  </td>
                  <td className="whitespace-nowrap px-[12px] py-[16px] font-[500] text-[14px] text-[#6C6C6C]">
                    {item.monthlyFee}
                  </td>
                  <td className="px-[12px] py-[16px] font-[500] text-[14px] text-[#6C6C6C]">
                    {item.includes}
                  </td>
                  <td className="py-[16px] pl-[12px] text-right">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan(item)}
                      className="whitespace-nowrap font-[500] text-[14px] text-[#024E44] cursor-pointer"
                    >
                      Propose change
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        open={selectedPlan !== null}
        onOpenChange={(open) => {
          if (!open) closeProposal();
        }}
        size="md"
        className="!max-w-[664px]"
      >
        {selectedPlan && (
          <div className="space-y-[32px]">
            <h2 className="text-center font-[700] text-[24px] text-[#04907E]">
              Propose Change - {selectedPlan.plan}
            </h2>

            <div className="space-y-[24px]">
              <p className="font-[500] text-[12px] text-[#6C6C6C]">
                Current: {selectedPlan.monthlyFee}
              </p>

              <Input label="Proposed new value" placeholder="e.g ₦5,500" />

              <Select
                label="Initiated by"
                value="ops"
                options={[
                  { value: "ops", label: "Ops - internal research/observation" },
                  { value: "finance", label: "Finance & Risk" },
                  { value: "merchant", label: "Merchant request" },
                ]}
              />

              <Input label="Reason for change" placeholder="Why is this change needed?" />
            </div>

            <p className="font-[400] text-[12px] leading-[20px] text-[#A7A7A7]">
              Finance &amp; Risk sets policy: this proposal routes to them for approval and does not
              take effect until they sign off.
            </p>

            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              <Button
                onClick={closeProposal}
                variant="secondary"
                size="md"
                className="h-[52px] bg-[#F7F7F7] text-[#6C6C6C]"
              >
                Cancel
              </Button>
              <Button
                onClick={closeProposal}
                variant="primary"
                size="md"
                className="h-[52px] bg-[#00574D]"
              >
                Submit for approval
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
