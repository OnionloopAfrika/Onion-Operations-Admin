"use client";

import { Heading } from "@/app/individual-users/[id]/page";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Badge, { type BadgeVariant } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import Textarea from "@/components/ui/textarea";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function AgentDetailsPage() {
  const searchparams = useSearchParams();
  const routeParams = useParams<{ id: string }>();
  const id = Number(routeParams.id);
  const name = searchparams.get("name") ?? "Ada Cash Point";
  const location = searchparams.get("location") ?? "Ikeja, Lagos";
  const status = searchparams.get("status");
  const pendingAction = searchparams.get("pendingAction");
  const floatCap = searchparams.get("floatCap") ?? "Not available";
  const feeRate = searchparams.get("feeRate") ?? "Not available";

  const active = status === "Active";
  const flagged = status === "Flagged";
  const float_request = pendingAction === "Float Request";
  const discrepancy = pendingAction === "Discrepancy";
  const statusVariant: BadgeVariant = flagged ? "flagged" : "active";
  const pendingActionVariant: BadgeVariant | undefined =
    float_request ? "float_request" : discrepancy ? "discrepancy" : undefined;
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const [openTerminate, setOpenTerminate] = useState(false);
  const [requestFee, setRequestFee] = useState(false);

  return (
    <>
      <div className="space-y-[24px]">
        <Breadcrumb firstTab="Agents" secondTab="User" />

        <div className="flex justify-between items-center max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[40px] h-[40px] rounded-[8px] bg-[#D6F0DF] flex justify-center items-center font-[600] text-[16px] text-[#024E44]">
              {initials}
            </div>

            <div className="space-y-[4px]">
              <div className="flex items-center gap-[10px]">
                <p className="font-[600] text-[16px] text-[#131313]">{name}</p>
                {status ? (
                  <Badge variant={statusVariant}>{status}</Badge>
                ) : (
                  <span className="font-[500] text-[12px] text-[#6C6C6C]">Status unavailable</span>
                )}
              </div>

              <p className="font-[500] text-[14px] text-[#6C6C6C]">
                {Number.isInteger(id) ? `AG-${String(id).padStart(4, "0")}` : "AG"} · {location}
              </p>
            </div>
          </div>

          {(active || flagged) && (
            <Button
              onClick={() => setOpenTerminate(true)}
              children="Terminate"
              variant="terminate"
              size="terminate"
            />
          )}
        </div>

        <div className="grid grid-cols-3 gap-[16px] max-lg:grid-cols-1">
          {float_request && (
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[8px]">
              <p className="font-[400] text-[10px] text-[#6C6C6C]">Float Balance</p>
              <p className="font-[600] text-[20px] text-[#000000]">{floatCap}</p>
              <p className="font-[400] text-[10px] text-[#DD900D]">
                Approved — awaiting disbursement
              </p>
            </div>
          )}

          {!float_request && (
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[8px]">
              <p className="font-[600] text-[20px] text-[#000000]">{floatCap}</p>
              <p className="font-[400] text-[10px] text-[#6C6C6C]">Float Balance</p>
            </div>
          )}

          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[8px]">
            <p className="font-[400] text-[10px] text-[#6C6C6C]">Transaction Fee</p>
            <p className="font-[600] text-[20px] text-[#000000]">{feeRate} per cash transaction</p>
          </div>

          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[8px]">
            <p className="font-[600] text-[20px] text-[#000000]">Not available</p>
            <p className="font-[400] text-[10px] text-[#6C6C6C]">Phone Number</p>
          </div>
        </div>

        {!float_request && !discrepancy && (
          <p className="font-[400] text-[12px] text-[#A8A8A8]">
            No payout ledger appears here — merchants are billed a transaction fee, never paid a
            commission.
          </p>
        )}

        {float_request && (
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[16px]">
            <Heading title="Pending Actions" />

            {pendingActionVariant && (
              <button type="button" onClick={() => setRequestFee(true)}>
                <Badge variant={pendingActionVariant}>{pendingAction}</Badge>
              </button>
            )}
          </div>
        )}

        {discrepancy && (
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] rounded-[8px] space-y-[16px]">
            <Heading title="Pending Actions" />

            {pendingActionVariant && (
              <button type="button" onClick={() => setRequestFee(true)}>
                <Badge variant={pendingActionVariant}>{pendingAction}</Badge>
              </button>
            )}

            <p className="font-[400] text-[12px] text-[#A8A8A8]">
              Cash reconciliation mismatch of ₦14,200 reported by customer dispute
            </p>
          </div>
        )}

        {float_request && (
          <p className="font-[400] text-[12px] text-[#A8A8A8]">
            Cash reconciliation mismatch of ₦14,200 reported by customer dispute
          </p>
        )}
      </div>

      <Modal open={openTerminate} onOpenChange={setOpenTerminate}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <div className="space-y-[8px]">
              <p className="font-[600] text-[24px] text-[#CB1A14] text-center">
                Terminate relationship with {name}?
              </p>

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                This is permanent and different from suspension — it ends the partnership entirely,
                not a temporary hold. Final payouts owed must be settled before this is confirmed.
              </p>
            </div>

            <div className="space-y-[16px]">
              <Textarea label="Reason" placeholder="Write something..." />
              <div className="space-y-[8px]">
                <p className="font-[500] text-[12px] text-[#6C6C6C]">
                  Confirm all pending payouts are settled
                </p>

                <p className="flex items-center gap-[4px]">
                  <input className="accent-primary-color" type="checkbox" name="" id="" />
                  <p className="font-[400] text-[12px] text-[#8A8A8A]">
                    Yes, all outstanding amounts are cleared
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpenTerminate(false)} children="Cancel" variant="secondary" />
            <Button
              onClick={() => setOpenTerminate(false)}
              children="Confirm Termination"
              variant="danger"
            />
          </div>
        </div>
      </Modal>

      <Modal open={requestFee} onOpenChange={setRequestFee}>
        <div className="space-y-[48px]">
          <div className="space-y-[24px]">
            <p className="font-[700] text-[24px] text-[#04907E] text-center">
              Request Fee Change — {name}
            </p>

            <div className="space-y-[16px]">
              <p className="font-[400] text-[12px] text-[#8A8A8A] flex items-center gap-[4px]">
                Current rate: <span className="font-[600] text-[12px] text-[#131313]">{feeRate}</span>
              </p>

              <div className="space-y-[32px]">
                <Input label="Proposed new rate" placeholder="e.g 1.3%" />

                <Input label="Initiated by" placeholder="Sharon Jackson(You)" />

                <Textarea label="Reason" placeholder="Write something..." />
              </div>

              <p className="font-[400] text-[12px] text-[#8A8A8A]">
                Same rule as network-wide fee changes: this routes to Finance & Risk and only takes
                effect once they approve it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setRequestFee(false)} variant="secondary" children="Cancel" />
            <Button onClick={() => setRequestFee(false)} variant="primary" children="Submit" />
          </div>
        </div>
      </Modal>
    </>
  );
}
