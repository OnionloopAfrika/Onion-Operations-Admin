"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { Modal } from "../ui/modal";
import Select from "../ui/select";

const disputeTargets = [
  { priority: "Urgent priority disputes", resolutionTime: "4 hours" },
  { priority: "High priority disputes", resolutionTime: "24 hours" },
  { priority: "Medium priority disputes", resolutionTime: "48 hours" },
  { priority: "Low priority disputes", resolutionTime: "5 business days" },
];

export default function DisputeTargets() {
  const [proposedTarget, setProposedTarget] = useState<{
    priority: string;
    resolutionTime: string;
  } | null>(null);

  return (
    <section className="space-y-[16px] rounded-[16px] border border-[#E5E7EB] bg-white p-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <h2 className="font-[600] text-[16px] text-[#131313]">
        Dispute SLA Targets{" "}
        <span className="font-[500] text-[14px] text-[#6C6C6C]">
          (Transaction fees apply to agent cash transactions. No commission is paid to agents.)
        </span>
      </h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[55%]" />
            <col className="w-[25%]" />
            <col className="w-[20%]" />
          </colgroup>
          <thead className="sr-only">
            <tr>
              <th scope="col">Dispute priority</th>
              <th scope="col">Resolution target</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {disputeTargets.map((item) => (
              <tr
                key={item.priority}
                className="h-[62px] border-b border-[#C7C7C7] last:border-b-0"
              >
                <th
                  className="py-[16px] pr-[12px] text-left font-[500] text-[14px] text-[#6C6C6C]"
                  scope="row"
                >
                  {item.priority}
                </th>
                <td className="whitespace-nowrap px-[12px] py-[16px] font-[500] text-[14px] text-[#242424]">
                  {item.resolutionTime}
                </td>
                <td className="py-[16px] pl-[12px] text-right">
                  <button
                    type="button"
                    onClick={() =>
                      setProposedTarget({
                        priority: item.priority,
                        resolutionTime: item.resolutionTime,
                      })
                    }
                    className="whitespace-nowrap font-[500] text-[14px] text-[#024E44]"
                  >
                    Propose change
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={proposedTarget !== null}
        onOpenChange={(open) => {
          if (!open) setProposedTarget(null);
        }}
        size="md"
        className="!max-w-[664px]"
      >
        {proposedTarget !== null && (
          <div className="space-y-[32px]">
            <h2 className="text-center font-[700] text-[24px] text-[#04907E]">
              Propose Change - {proposedTarget.priority}
            </h2>

            <div className="space-y-[24px]">
              <p className="font-[500] text-[12px] text-[#6C6C6C]">
                {proposedTarget.priority} · Current target: {proposedTarget.resolutionTime}
              </p>

              <Input label="Proposed new resolution target" placeholder="e.g. 2 hours" />

              <Select
                label="Initiated by"
                value="ops"
                options={[
                  { value: "ops", label: "Ops - internal research/observation" },
                  { value: "finance", label: "Finance & Risk" },
                  { value: "support", label: "Customer Support" },
                ]}
              />

              <Input label="Reason for change" placeholder="Why is this change needed?" />
            </div>

            <p className="font-[400] text-[12px] leading-[20px] text-[#A7A7A7]">
              This proposal routes to the appropriate approvers and does not take effect until it is
              approved.
            </p>

            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              <Button
                onClick={() => setProposedTarget(null)}
                variant="secondary"
                size="md"
                className="h-[52px] bg-[#F7F7F7] text-[#6C6C6C]"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setProposedTarget(null)}
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
    </section>
  );
}
