"use client";

import { ArrowRight, TrashIcon } from "@/components/icons/svgs";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/button";
import React, { useState } from "react";
import { Details, Heading } from "../individual-users/[id]/page";
import { Modal } from "@/components/ui/modal";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import ModalHeader from "@/components/ui/modal-header";
import Textarea from "@/components/ui/textarea";

export default function AggregatorsDetails() {
  const [openTerminate, setOpenTerminate] = useState(false);
  const [target, setTarget] = useState(false);
  const [payout, setPayout] = useState(false);
  const [standard, setStandard] = useState(false);
  const [adjusttier, setAdjusttier] = useState(false);
  const [bonus_structure, setBonus_structure] = useState(false);

  const aggregator_stat = [
    {
      title: "Commission on Target",
      amount: "₦1.2M",
      action: "Pay out commission",
      function: () => setPayout(true),
    },

    {
      title: "Commission Tier",
      amount: "Standard Tiered - By Activation",
      action: "What Does This Mean",
      function: () => setStandard(true),
    },

    {
      title: "Bonus Structure",
      amount: "₦400,000 + expanded onboarding rights",
      action: "Edit Bonus",
      function: () => setBonus_structure(true),
    },
  ];

  const standard_enterprise = [
    {
      title: "Standard",
      desc: "Most aggregators. They earn commission only if they hit their monthly target (e.g. 50 new active accounts). Miss it, no commission that period — nothing owed either way. Simple, no downside for Onionloop.",
    },

    {
      title: "Enterprise",
      desc: "Reserved for larger, strategic partners Onionloop wants to lock in — think an aggregator covering an entire state. They get a guaranteed base payment regardless of whether they hit target, plus extra commission for volume beyond it. Costs more, used sparingly.",
    },
  ];

  return (
    <>
      <div className="space-y-[24px]">
        <Breadcrumb firstTab="Aggregators" secondTab="User" />
        <div className="flex justify-between items-center max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[40px] h-[40px] rounded-[8px] bg-[#D6F0DF] flex justify-center items-center font-[600] text-[16px] text-[#024E44]">
              AD
            </div>

            <div className="space-y-[4px]">
              <div className="flex items-center gap-[10px]">
                <p className="font-[600] text-[16px] text-[#131313]">Ada Cash Point</p>

                <Button variant="active" size="status_btn" children="Active" />
              </div>

              <p className="font-[500] text-[14px] text-[#6C6C6C]">AG-1042 · Ikeja, Lagos</p>
            </div>
          </div>

          <Button onClick={() => setOpenTerminate(true)} variant="terminate" size="terminate">
            Terminate
          </Button>
        </div>

        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[24px] rounded-[16px] space-y-[16px]">
          <div className="flex justify-between items-center max-lg:grid max-lg:grid-cols-1 ">
            <p className="font-[600] text-[16px] text-[#131313]">Target Progress — this period</p>

            <p
              onClick={() => setTarget(true)}
              className="flex items-center gap-[4px] font-[600] text-[12px] text-[#6C6C6C] cursor-pointer"
            >
              Set/edit target <ArrowRight color="#8A8A8A" />
            </p>
          </div>

          <div className="space-y-[8px]">
            <p className="font-[500] text-[14px] text-[#6C6C6C]">
              50 new active accounts / month 0 alerts 78%
            </p>

            <div className="w-full h-[8px] rounded-full bg-[#04802E]"></div>

            <div className="flex justify-between items-center">
              <p className="font-[500] text-[14px] text-[#000000]">58 / 50</p>
              <p className="font-[500] text-[12px] text-[#04802E]">
                ✓ Target met — commission unlocked
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[16px] max-lg:grid-cols-1">
          {aggregator_stat.map((item, i) => (
            <div
              className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[2px]"
              key={i}
            >
              <p className="font-[400] text-[10px] text-[#6C6C6C]">{item.title}</p>
              <p className="font-[600] text-[14px] text-[#000000]">{item.amount}</p>

              {item.title === "Commission on Target" && (
                <p
                  onClick={item.function}
                  className="flex cursor-pointer items-center gap-[10px] font-[500] text-[10px] text-[#04907E]"
                >
                  {item.action} <ArrowRight color="#04907E" />
                </p>
              )}

              {item.title !== "Commission on Target" && (
                <p
                  onClick={item.function}
                  className="flex cursor-pointer items-center gap-[10px] font-[500] text-[10px] text-[#6C6C6C]"
                >
                  {item.action} <ArrowRight color="#8A8A8A" />
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[24px] rounded-[16px] space-y-[16px]">
          <Heading title="Network Stats" />

          <div className="w-[80%] flex justify-between items-center max-lg:w-full max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]">
            <Details title="Activation Rate" value="82%" />

            <Details title="Accounts Onboarded (all-time)" value="482" />
          </div>
        </div>

        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[24px] rounded-[16px] space-y-[16px]">
          <Heading title="Aggregator Contact" />
          <div className="space-y-[6px]">
            <p className="font-[500] text-[14px] text-[#131313]">Obiora Nnamdi</p>
            <p className="font-[500] text-[12px] text-[#8A8A8A]">
              0803 700 1100 · Joined 22 May 2025
            </p>
          </div>
        </div>
      </div>

      <Modal open={openTerminate} onOpenChange={setOpenTerminate}>
        <div className="space-y-[64px]">
          <div className="flex flex-col items-center gap-[24px]">
            <TrashIcon color="#CB1A14" />
            <div className="space-y-[8px]">
              <p className="text-center font-[700] text-[24px] text-[#CB1A14]">
                Terminate Aggregator?
              </p>

              <p className="text-center font-[400] text-[16px] text-[#363636]">
                You are about to end the partnership with Ada Cash Point.
              </p>

              <p className="text-center font-[400] text-[16px] text-[#363636]">
                This is permanent and ends the aggregator relationship entirely.
              </p>
            </div>

            <Textarea placeholder="Write something..." label="Reason" />
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpenTerminate(false)} variant="secondary">
              Cancel
            </Button>
            <Button onClick={() => setOpenTerminate(false)} variant="danger">
              Confirm Termination
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={target} onOpenChange={setTarget}>
        <div className="space-y-[64px]">
          <div className="space-y-[16px]">
            <ModalHeader title=" Set Target  — Obi & Co Field Team" />

            <div className="space-y-[24px]">
              <Select label="Target Metric" options={[]} />

              <Input label="Target Metric" placeholder="e.g 50 Onbaordings" />

              <Input label="Commission on Target Met" placeholder="e.g ₦40,000" />
            </div>

            <p className="font-[400] text-[12px] text-[#8A8A8A]">
              Since this commits Onionloop to a payout, it routes to Finance & Risk before taking
              effect — same rule as fee changes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setTarget(false)} children="Cancel" variant="secondary" />
            <Button
              onClick={() => setTarget(false)}
              children="Submit For Approval"
              variant="primary"
            />
          </div>
        </div>
      </Modal>

      <Modal open={payout} onOpenChange={setPayout}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <div className="space-y-[8px]">
              <ModalHeader title=" Process Commission Payout — Obi & Co Field Team" />

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                Target met:{" "}
                <span className="font-[600] text-[16px] text-[#363636]">
                  50 new active accounts / month
                </span>{" "}
                (58/50)
              </p>

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                Commission due:{" "}
                <span className="font-[600] text-[16px] text-[#363636]"> ₦1.84M</span>
              </p>
            </div>

            <p className="font-[400] text-[14px] text-[#04802E]">
              Bonus earned: ₦400,000 + expanded onboarding rights (added OnionCrew eligibility)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button
              onClick={() => {
                setPayout(false);
              }}
              children="Cancel"
              variant="secondary"
            />
            <Button
              onClick={() => {
                setPayout(false);
              }}
              children="Confirm Payout"
              variant="primary"
            />
          </div>
        </div>
      </Modal>

      <Modal open={standard} onOpenChange={setStandard}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <ModalHeader title=" Standard vs. Enterprise " />

            <div className="space-y-[8px]">
              {standard_enterprise.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[6px] p-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] space-y-[8px]"
                >
                  <p className="font-[600] text-[12px] text-[#131313]"> {item.title} </p>

                  <p className="font-[400] text-[12px] text-[#363636]"> {item.desc} </p>
                </div>
              ))}
            </div>

            <p className="font-[400] text-[12px] text-[#6C6C6C]">
              <span className="font-[400] text-[12px] text-[#6C6C6C]">NB:</span> default every
              aggregator to Standard. Only move someone to Enterprise if losing them would
              meaningfully hurt onboarding in their region — that's a Finance & Risk-level call, not
              one Ops makes alone.{" "}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setStandard(false)} variant="secondary" children="Cancel" />
            <Button
              onClick={() => {
                (setStandard(false), setAdjusttier(true));
              }}
              variant="primary"
              children="Adjust Tier"
            />
          </div>
        </div>
      </Modal>

      <Modal open={adjusttier} onOpenChange={setAdjusttier}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <ModalHeader title="Adjust commision tier" />

            <Select
              label="Standard Tiered By Activation"
              options={[
                {
                  label: "Standard Tiered By Activation",
                  value: "Standard Tiered By Activation",
                },

                {
                  label: "Enterprise - Flat + Volume Bonus",
                  value: "Enterprise - Flat + Volume Bonus",
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setAdjusttier(false)} variant="secondary" children="Cancel" />
            <Button onClick={() => setAdjusttier(false)} variant="primary" children="Save" />
          </div>
        </div>
      </Modal>

      <Modal open={bonus_structure} onOpenChange={setBonus_structure}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <ModalHeader title="Set Bonus Structure" />
            <Input
              label="Bonus amount / structure"
              placeholder="e.g ₦400,000 for exceeding target by 20% "
            />
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button
              onClick={() => setBonus_structure(false)}
              variant="secondary"
              children="Cancel"
            />
            <Button onClick={() => setBonus_structure(false)} variant="primary" children="Save" />
          </div>
        </div>
      </Modal>
    </>
  );
}
