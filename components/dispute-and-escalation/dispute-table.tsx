"use client";

import { useState } from "react";
import { Modal } from "../ui/modal";
import Button from "../ui/button";
import Textarea from "../ui/textarea";
import { DotIcon } from "../icons/svgs";

const disputes = [
  {
    id: "DSP330",
    type: "Agent Dispute",
    subject: "Agent refused cash withdrawal",
    parties: "Precious Adeyemi (AG-1103)",
    source: "Escalated by Support",
    priority: "High",
    status: "Open",
  },
  {
    id: "DSP328",
    type: "Merchant Dispute",
    subject: "Order paid but not marked received",
    parties: "Customer vs Mama Balo’s-store (MC-095)",
    source: "Escalated by Support",
    priority: "Medium",
    status: "In Review",
  },
  {
    id: "DSP321",
    type: "Cash Discrepancy",
    subject: "Reconciliation mismatch #14,200",
    parties: "Delta Quickcash (AG-1119)",
    source: "Opened by Ops (System discrepancy flag)",
    priority: "Urgent",
    status: "Escalated",
  },
  {
    id: "DSP310",
    type: "Merchant Dispute",
    subject: "Duplicate QR charge",
    parties: "Customer vs Sisi Yemmei Grills (MC-088)",
    source: "Escalated by Support",
    priority: "Low",
    status: "Resolved",
  },
] as const;

const statusStyles: Record<(typeof disputes)[number]["status"], string> = {
  Open: "bg-[#FEF6E7] text-[#DD900D] text-[14px]",
  "In Review": "bg-[#FFF5E5] text-[#C77700] text-[14px]",
  Escalated: "bg-[#FBEAE9] text-[#CB1A14] text-[14px]",
  Resolved: "bg-[#E7F6EC] text-[#04802E] text-[14px]",
};

export default function DisputeTable() {
  const [openDSP, setOpenDSP] = useState(false);
  const [startAssign, setStartAssign] = useState(false);
  const [escalated, setEscalated] = useState(false);
  const [resolved, setResolved] = useState(false);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px] table-fixed border-collapse text-left text-[14px] text-[#6C6C6C]">
          <colgroup>
            <col className="w-[9%]" />
            <col className="w-[16%]" />
            <col className="w-[17%]" />
            <col className="w-[22%]" />
            <col className="w-[16%]" />
            <col className="w-[8%]" />
            <col className="w-[12%]" />
          </colgroup>
          <thead className="bg-[#F7F7F7] text-[16px] font-[600]">
            <tr className="h-[80px] border-b border-[#C7C7C7]">
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                DSP ID
              </th>
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Type
              </th>
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Subject
              </th>
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Parties
              </th>
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Sources
              </th>
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Priority
              </th>
              <th className="px-[15px] font-[600] text-[16px] text-[#6C6C6C]" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute) => (
              <tr
                key={dispute.id}
                className="h-[80px] border-b border-[#C7C7C7] last:border-b-0 bg-white cursor-pointer"
                onClick={() => setOpenDSP(true)}
              >
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">{dispute.id}</td>
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">{dispute.type}</td>
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">
                  {dispute.subject}
                </td>
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">
                  {dispute.parties}
                </td>
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">
                  {dispute.source}
                </td>
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">
                  {dispute.priority}
                </td>
                <td className="px-[15px] font-[500] text-[14px] text-[#6C6C6C]">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-full px-[12px] py-[6px] font-[500] ${statusStyles[dispute.status]}`}
                  >
                    {dispute.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={openDSP} onOpenChange={setOpenDSP}>
        <div className="space-y-[48px]">
          <div className="space-y-[24px]">
            <div>
              <p className="font-[700] text-[24px] text-[#242424]">DSP-330 </p>
            </div>

            <div className="space-y-[24px]">
              <div className="space-y-[4px]">
                <p className="font-[600] text-[16px] text-[#242424]">
                  Agent refused cash withdrawal
                </p>
                <p className="font-[400] text-[12px] text-[#363636]">
                  Agent dispute . Precious Adeyemi vs - Proven Agency . Opened 2 days ago
                </p>
                <p className="font-[400] text-[12px] text-[#8A8A8A]">
                  Escalated by Halimat Bakare (Support team)
                </p>
              </div>

              <div className="p-[16px] rounded-[6px] space-y-[8px] bg-[#FEF6E7]">
                <p className="font-[600] text-[14px] text-[#DD900D]">Not yet reviewed</p>
                <p className="font-[400] text-[14px] text-[#6C6C6C]">
                  SLA: 22h remaining. Click “Start review” to assign ths to yourself and begin
                  working it
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpenDSP(false)} variant="secondary" children="Close" />
            <Button
              onClick={() => {
                (setOpenDSP(false), setStartAssign(true));
              }}
              children="Start review(assign to me)"
            />
          </div>
        </div>
      </Modal>

      <Modal open={startAssign} onOpenChange={setStartAssign}>
        <div className="space-y-[48px]">
          <div className="space-y-[24px]">
            <div>
              <p className="font-[700] text-[24px] text-[#242424]">DSP-328 </p>
            </div>

            <div className="space-y-[16px]">
              <div className="space-y-[24px]">
                <div className="space-y-[4px]">
                  <p className="font-[600] text-[16px] text-[#242424]">
                    Order paid but not marked received
                  </p>
                  <p className="font-[400] text-[12px] text-[#363636]">
                    Merchant dispute . Customer vs Mama balos’s store(MC-095). Opened 3 days ago
                  </p>
                  <p className="font-[400] text-[12px] text-[#8A8A8A]">
                    Escalated by Halimat Bakare (Support team)
                  </p>
                </div>

                <div className="bg-[#E3EFFC] p-[16px] rounded-[6px] space-y-[8px]">
                  <p className="flex items-center gap-[4px] font-[400] text-[14px] text-[#0D5EBA]">
                    Assigned to:{" "}
                    <span className="font-[400] text-[14px] text-[#242424]">Ifeoma Nwachukwu</span>
                  </p>

                  <p className="font-[400] text-[14px] text-[#6C6C6C]">SLA: 40h remaining</p>
                </div>
              </div>

              <div className="space-y-[16px]">
                <div className="space-y-[4px]">
                  <p className="font-[600] text-[12px] text-[#131313]">
                    Ifeoma Nwachukwu{" "}
                    <span className="font-[400] text-[12px] text-[#8A8A8A]">· Yesterday</span>{" "}
                  </p>
                </div>

                <Textarea
                  label="Add a note (used for resolution or escalating)"
                  placeholder="InputDocument findings before resolving or escalating..."
                />
              </div>
            </div>
            <p className="font-[400] text-[12px] text-[#8A8A8A]">
              Escalate if this exceed Ops’ self resolution authority(e.g. discrepancies over
              #10,000) it routes to finance & risk.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button
              onClick={() => {
                (setEscalated(true), setStartAssign(false));
              }}
              className="bg-[#F5FFFD]"
            >
              <span className="text-[#024E44]">Escalate to finance & risk</span>
            </Button>
            <Button
              onClick={() => {
                (setResolved(true), setStartAssign(false));
              }}
              children="Mark resolved"
            />
          </div>
        </div>
      </Modal>

      <Modal open={escalated} onOpenChange={setEscalated}>
        <div className="space-y-[24px]">
          <p className="font-[700] text-[24px] text-[#242424]">DSP-321 </p>

          <div className="space-y-[32px]">
            <div className="space-y-[4px]">
              <p className="font-[600] text-[16px] text-[#242424]">
                Reconciliation mismatch #14,200
              </p>

              <p className="font-[400] text-[16px] text-[#363636]">
                Cash discrepancy . Delta Quickcash (AG-1119).Opened 5 days ago
              </p>

              <p className="font-[400] text-[16px] text-[#8A8A8A]">
                Opened by Ops’ (System discrepancy flag)
              </p>
            </div>

            <div className="p-[16px] rounded-[6px] bg-[#FBEAE9] space-y-[8px]">
              <p className="font-[600] text-[14px] text-[#CB1A14]">Escalated to Finance & Risk</p>
              <p className="font-[500] text-[14px] text-[#242424]">
                Amount exceeds Ops' ₦10,000 self-resolution limit — requires Finance sign-off.
              </p>
              <p className="font-[400] text-[14px] text-[#6C6C6C]">
                This case is now out of Ops' hands — read-only until Finance & Risk acts. SLA: 2h
                remaining on their side.
              </p>
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={resolved} onOpenChange={setResolved}>
        <div className="space-y-[24px]">
          <p className="font-[700] text-[24px] text-[#242424]">DSP-310 </p>

          <div className="space-y-[16px]">
            <div className="space-y-[4px]">
              <p className="font-[600] text-[16px] text-[#242424]">Duplicate QR charge</p>

              <p className="font-[400] text-[16px] text-[#363636]">
                Merchant dispute. Customer vs Sisi Yemmie(MC-088). Opened 9 days ago
              </p>

              <p className="font-[400] text-[16px] text-[#8A8A8A]">
                Escalated by Halimat Bakare (Support team){" "}
              </p>
            </div>

            <div className="p-[16px] rounded-[6px] bg-[#F5FFFD] space-y-[8px]">
              <p className="font-[700] text-[14px] text-[#04802E]">Resolved 6 days ago</p>
              <p className="font-[400] text-[14px] text-[#6C6C6C]">
                Confirmed duplicate charge on merchant side.#3,400 reserved to customer wallet.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
