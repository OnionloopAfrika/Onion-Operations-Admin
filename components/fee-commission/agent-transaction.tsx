"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { Modal } from "../ui/modal";
import Select from "../ui/select";

export default function AgentTransaction() {
  const [proposedFee, setProposedFee] = useState<string | null>(null);

  const agent_transaction = [
    {
      range: "Cash Deposit",
      amount: "0.8% of transaction",
      propose: "Propose change",
    },

    {
      range: "Cash Withdrawal ",
      amount: "0.8% of transaction",
      propose: "Propose change",
    },

    {
      range: "Float Cap Default ",
      amount: "₦1,000,000 ",
      propose: "Propose change",
    },
  ];

  return (
    <div className="py-[24px] px-[16px] space-y-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
      <p className="font-[600] text-[16px] text-[#131313]">
        Agent Transaction Fees
        <span className="font-[500] text-[14px] text-[#6C6C6C]">
          (Transaction fees apply to agent cash transactions. No commission is paid to agents.)
        </span>
      </p>

      <div className="space-y-[16px]">
        {agent_transaction.map((item, i) => (
          <div
            key={i}
            className="py-[12px] grid grid-cols-3 border-b border-b-[#C7C7C7] last:border-b-0 max-lg:grid-cols-1"
          >
            <div className=" flex-1">
              <p className="font-[500] text-[14px] text-[#6C6C6C]">{item.range}</p>
            </div>

            <div className=" flex justify-start flex-1 ">
              <p className="font-[500] text-[14px] text-[#242424]">{item.amount}</p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setProposedFee(item.amount)}
                className="font-[500] text-[14px] text-[#024E44]"
              >
                {item.propose}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={proposedFee !== null}
        onOpenChange={(open) => {
          if (!open) setProposedFee(null);
        }}
        size="md"
        className="!max-w-[664px]"
      >
        {proposedFee !== null && (
          <div className="space-y-[32px]">
            <h2 className="text-center font-[700] text-[24px] text-[#04907E]">
              Propose Change - Agent Transaction
            </h2>

            <div className="space-y-[24px]">
              <p className="font-[500] text-[12px] text-[#6C6C6C]">Current: {proposedFee}</p>

              <Input
                label="Proposed new value"
                placeholder={proposedFee.includes("%") ? "e.g. 1%" : "e.g. ₦1,500,000"}
              />

              <Select
                label="Initiated by"
                value="ops"
                options={[
                  { value: "ops", label: "Ops - internal research/observation" },
                  { value: "finance", label: "Finance & Risk" },
                  { value: "agent", label: "Agent request" },
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
                onClick={() => setProposedFee(null)}
                variant="secondary"
                size="md"
                className="h-[52px] bg-[#F7F7F7] text-[#6C6C6C]"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setProposedFee(null)}
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
    </div>
  );
}
