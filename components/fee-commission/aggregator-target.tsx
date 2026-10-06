"use client";

import React, { useState } from "react";
import { ArrowRight, RightArrowIcon } from "../icons/svgs";
import { Modal } from "../ui/modal";
import ModalHeader from "../ui/modal-header";
import Button from "../ui/button";

const aggregatorTargets = [
  {
    name: "Joshua Akindele",
    tier: "Standard",
    target: "50 new active accounts / months",
    progress: "58/50",
    targetMet: true,
  },
  {
    name: "Emeka Eze",
    tier: "Not yet assigned",
    target: "Not yet set",
    progress: "-----",
    targetMet: false,
  },
  {
    name: "Emeka Eze",
    tier: "Standard",
    target: "30 new active accounts / months",
    progress: "29/30",
    targetMet: false,
  },
  {
    name: "Chidinma Obi",
    tier: "Standard",
    target: "20 new active accounts / months",
    progress: "6/20",
    targetMet: false,
  },
  {
    name: "Femi Adeyemi",
    tier: "Not yet assigned",
    target: "Not yet set",
    progress: "-----",
    targetMet: false,
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

export default function AggregatorTarget() {
  const [standard, setStandard] = useState(false);

  return (
    <section className="space-y-[16px] rounded-[16px] border border-[#E5E7EB] bg-white p-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex flex-wrap items-start justify-between gap-[12px]">
        <div className="space-y-[4px]">
          <h2 className="font-[600] text-[16px] text-[#131313]">
            Aggregator target &amp; Commission
          </h2>
          <p className="font-[400] text-[14px] text-[#6C6C6C]">
            Targets and Bonuses are set per-aggregator
          </p>
        </div>
        <button
          onClick={() => setStandard(true)}
          type="button"
          className="flex items-center gap-[8px] whitespace-nowrap font-[500] text-[12px] text-[#04907E]"
        >
          Standard vs Enterprise <ArrowRight color="#04907E" />
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[24%]" />
            <col className="w-[24%]" />
            <col className="w-[28%]" />
            <col className="w-[20%]" />
            <col className="w-[4%]" />
          </colgroup>
          <thead className="bg-[#F7F7F7]">
            <tr className="h-[64px] border-b border-[#C7C7C7]">
              <th className="px-[16px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Aggregator
              </th>
              <th className="px-[16px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Tier
              </th>
              <th className="px-[16px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Target
              </th>
              <th className="px-[16px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Progress
              </th>
              <th scope="col">
                <span className="sr-only">View aggregator</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {aggregatorTargets.map((aggregator, index) => (
              <tr
                key={`${aggregator.name}-${index}`}
                className="h-[65px] border-b border-[#C7C7C7] last:border-b-0"
              >
                <td className="whitespace-nowrap px-[16px] font-[500] text-[14px] text-[#6C6C6C]">
                  {aggregator.name}
                </td>
                <td className="whitespace-nowrap px-[16px] font-[500] text-[14px] text-[#6C6C6C]">
                  {aggregator.tier}
                </td>
                <td className="whitespace-nowrap px-[16px] font-[500] text-[14px] text-[#6C6C6C] ">
                  {aggregator.target}
                </td>
                <td
                  className={`whitespace-nowrap px-[16px] font-[500] text-[14px] max-lg:text-end ${
                    aggregator.targetMet ? "text-[#078132]" : "text-[#6C6C6C]"
                  }`}
                >
                  {aggregator.progress}
                </td>
                <td className="px-[8px] text-center">
                  <button
                    type="button"
                    aria-label={`View ${aggregator.name}`}
                    className="inline-flex items-center justify-center"
                  >
                    <RightArrowIcon size={20} color="#777777" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={standard} onOpenChange={setStandard}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <ModalHeader title=" Standard vs Enterprise - What’s the difference?" />

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

          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            <Button onClick={() => setStandard(false)} variant="secondary" children="Cancel" />
            <Button
              onClick={() => {
                setStandard(false);
              }}
              variant="primary"
              children="Adjust Tier"
            />
          </div>
        </div>
      </Modal>
    </section>
  );
}
