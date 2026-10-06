"use client";

import { Heading } from "@/app/individual-users/[id]/page";
import React, { useState } from "react";
import { ArrowRight, LockIcon } from "../icons/svgs";
import Button from "../ui/button";
import Input from "../ui/input";
import { Modal } from "../ui/modal";
import Select from "../ui/select";

export default function IndividualTransaction() {
  const [proposal, setProposal] = useState<{ current: string; placeholder: string } | null>(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState("one-free-transfer");

  const policyOptions = [
    { value: "one-free-transfer", label: "1 free external transfer per day" },
    { value: "thirty-free-transfers", label: "30 free external transfers per day" },
    { value: "No-free-transfers", label: "No free allowance - all external transfers charged" },
  ];
  const currentPolicy = policyOptions[0].label;

  const free_allowance = [
    {
      range: "₦0 - ₦5,000 ",
      amount: "₦10",
      propose: "Propose change",
    },

    {
      range: "₦5,001 - ₦50,000 ",
      amount: "₦25",
      propose: "Propose change",
    },

    {
      range: "₦50,001",
      amount: "₦50",
      propose: "Propose change",
    },
  ];
  return (
    <div className="py-[24px] px-[16px] space-y-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
      <div className="space-y-[8px]">
        <Heading title="Individual User Transaction Fee" />

        <div className="p-[16px] rounded-[8px] flex items-center gap-[16px] bg-[#E7F6EC] max-lg:flex-col max-lg:w-full">
          <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#B5E3C4]">
            <LockIcon color="#04802E" />
          </div>

          <div className="space-y-[8px]">
            <p className="font-[600] text-[14px] text-[#04907E] max-lg:items-center">
              Onionloop-to-Onionloop - Always Free
            </p>

            <p className="font-[400] text-[12px] text-[#6C6C6C] max-lg:items-center">
              Zero fees on every Scan to Pay and Wallet-to-Wallet payment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pb-[16px] max-lg:flex-col max-lg:items-start max-lg:gap-[20px]">
        <div className="space-y-[4px]">
          <p className="font-[600] text-[16px] text-[#131313]">
            Free Allowance For External Bank Transfer
          </p>
          <p className="font-[400] text-[14px] text-[#6C6C6C]">1 free external transfer per day</p>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedPolicy("one-free-transfer");
            setIsPolicyModalOpen(true);
          }}
          className="flex items-center gap-2 font-medium text-[12px] text-[#04907E]"
        >
          Change Policy <ArrowRight color="#04907E" />
        </button>
      </div>

      <div className="pb-[16px]">
        <p className="font-[600] text-[16px] text-[#131313]">
          Fee After Free Allowance is Used
          <span className="font-[500] text-[14px] text-[#6C6C6C]">
            (External Banks transfers only, Tiered by amounts)
          </span>
        </p>
      </div>

      <div className="space-y-[16px]">
        {free_allowance.map((item, i) => (
          <div
            key={i}
            className="py-[12px] grid grid-cols-3 border-b border-b-[#C7C7C7] last:border-b-0 max-lg:grid-cols-1"
          >
            <div className="flex-1">
              <p className="font-[500] text-[14px] text-[#6C6C6C]">{item.range}</p>
            </div>

            <div className=" flex justify-start flex-1 ">
              <p className="font-[500] text-[14px] text-[#242424]">{item.amount}</p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setProposal({
                    current: item.amount,
                    placeholder: "e.g ₦15",
                  })
                }
                className="font-[500] text-[14px] text-[#024E44]"
              >
                {item.propose}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={proposal !== null}
        onOpenChange={(open) => {
          if (!open) setProposal(null);
        }}
        size="md"
        className="!max-w-[664px]"
      >
        {proposal && (
          <div className="space-y-8">
            <h2 className="text-center font-bold text-[24px] text-[#04907E]">
              Propose Change - Individual User
            </h2>

            <div className="space-y-6">
              <p className="font-medium text-[12px] text-[#6C6C6C]">Current: {proposal.current}</p>

              <Input label="Proposed new value" placeholder={proposal.placeholder} />

              <Select
                label="Initiated by"
                value="ops"
                options={[
                  { value: "ops", label: "Ops - internal research/observation" },
                  { value: "finance", label: "Finance & Risk" },
                  { value: "user", label: "User request" },
                ]}
              />

              <Input label="Reason for change" placeholder="Why is this change needed?" />
            </div>

            <p className="font-normal text-[12px] leading-5 text-[#A7A7A7]">
              Finance &amp; Risk sets policy: this proposal routes to them for approval and does not
              take effect until they sign off.
            </p>

            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              <Button
                onClick={() => setProposal(null)}
                variant="secondary"
                size="md"
                className="h-13 bg-[#F7F7F7] text-[#6C6C6C]"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setProposal(null)}
                variant="primary"
                size="md"
                className="h-13 bg-[#00574D]"
              >
                Submit for approval
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={isPolicyModalOpen}
        onOpenChange={setIsPolicyModalOpen}
        size="md"
        className="!max-w-[664px]"
      >
        <div className="space-y-[32px]">
          <h2 className="text-center font-[700] text-[24px] text-[#04907E]">
            Free external transfer allowance
          </h2>

          <div className="space-y-[28px]">
            <p className="font-[500] text-[12px] text-[#6C6C6C]">Current: {currentPolicy}</p>

            <Select
              label="Policy"
              value={selectedPolicy}
              onValueChange={setSelectedPolicy}
              options={policyOptions}
            />

            <p className="font-[400] text-[12px] leading-[20px] text-[#A7A7A7]">
              This only affects transfers to other banks. Onionloop-to-Onionloop stays free under
              every policy option.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            <Button
              onClick={() => setIsPolicyModalOpen(false)}
              variant="secondary"
              size="md"
              className="h-[52px] bg-[#F7F7F7] text-[#6C6C6C]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsPolicyModalOpen(false)}
              variant="primary"
              size="md"
              className="h-[52px] bg-[#00574D]"
            >
              Submit for approval
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
