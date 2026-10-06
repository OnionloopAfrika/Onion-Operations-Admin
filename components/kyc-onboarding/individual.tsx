"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import { DotIcon, MarkIcon } from "../icons/svgs";
import { Modal } from "../ui/modal";
import Image from "next/image";
import Select from "../ui/select";
import Textarea from "../ui/textarea";

export default function Individual() {
  const [open, setOpen] = useState(false);
  const [reject, setReject] = useState(false);

  const INDIVIDUALS = [
    {
      name: "Fatimah Sule",
      system: "High",
      address: "Verified",
      bvh_no: "08127745501 ",
      submitted_At: "Submitted Today, 7:40am",
      document: "BVN",
      selfie: "Attached",
    },

    {
      name: "Ibrahim Musa",
      system: "High",
      address: "Verified",
      bvh_no: "08127745501 ",
      submitted_At: "Submitted Today, 7:40am",
      document: "BVN",
      selfie: "Attached",
    },
    {
      name: "Grace Ojo",
      system: "Low-selfie missing",
      address: "Inconclusive",
      bvh_no: "08127745501 ",
      submitted_At: "Submitted Today, 7:40am",
      document: "BVN",
      selfie: "Attached",
    },
  ];

  const SYSTEM_VERIFICATION = [
    { system: "ID/BVN database match", status: "Match" },
    { system: "Name match", status: "Match" },
    { system: "Selfie liveness/match score", status: "91%" },
    { system: "Overall system confidence ", status: "High" },
  ];

  const USER_DETAILS = [
    { system: "Name on document", status: "Fatimah Sule" },
    { system: "ID/Reference", status: "08127745501" },
    { system: "Submitted", status: "Today, 7:40am" },
    { system: "Automated note ", status: "Image slightly blurred on right edge" },
  ];

  const VERIFIED_VISITED = [
    { desc: "GPS within 150m of address" },
    { desc: "Photo evidence attached " },
    { desc: "Visit within 5 days of application " },
    { desc: "Occupant/business confirmed present" },
  ];

  const reason = [
    "Standard Tiered By Activation",
    "Standard Tiered By Activation",
    "Standard Tiered By Activation",
    "Standard Tiered By Activation ",
    " Enterprise - Flat + Volume Bonus",
  ].map((label) => ({ value: label.trim(), label: label.trim() }));

  return (
    <>
      <div className="space-y-[24px]">
        <div className="flex items-center justify-between gap-[16px] max-lg:flex-col max-lg:items-stretch max-lg:gap-[16px]">
          <div className="w-fit max-w-full rounded-full bg-[#E3EFFC] p-[8px] font-[500] text-[10px] text-[#0D5EBA]">
            2 selected for bulk approval - all high-confidence, clean matches
          </div>

          <div className="flex items-center gap-[10px] max-lg:grid max-lg:w-full max-lg:grid-cols-1">
            <Button
              className="w-full"
              variant="cashierOutline"
              size="cashierOutline"
              children="Clear"
            />

            <button className="w-full py-[8px] px-[12px] bg-[#F5FFFD] font-[500] text-[16px] text-[#04907E] shadow-sm">
              Approve 2 selected
            </button>
          </div>
        </div>

        <div className="space-y-[16px]">
          {INDIVIDUALS.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start gap-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] p-[16px] sm:p-[24px] max-lg:flex-col"
            >
              <div className="flex min-w-0 items-start gap-[8px] max-lg:w-full">
                <div className="pt-[4px]">
                  <input className="accent-[#024E44]" type="checkbox" />
                </div>
                <div className="min-w-0 space-y-[4px]">
                  <div className="space-y-[5px]">
                    <div className="flex flex-wrap items-center gap-[8px]">
                      <p className="font-[600] text-[16px] text-[#000000]">{item.name}</p>

                      {item.system === "High" ? (
                        <>
                          <span className="bg-[#E3EFFC] py-[8px] px-[8px] rounded-full font-[500] text-[10px] text-[#0D5EBA]">
                            System:{item.system}
                          </span>

                          <span className="bg-[#E7F6EC] py-[8px] px-[8px] rounded-full font-[500] text-[10px] text-[#04802E]">
                            Address:{item.address}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-[#FBEAE9] py-[8px] px-[8px] rounded-full font-[500] text-[10px] text-[#CB1A14]">
                            System:{item.system}
                          </span>
                          <span className="bg-[#FEF6E7] py-[8px] px-[8px] rounded-full font-[500] text-[10px] text-[#DD900D]">
                            Address:{item.address}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-[8px] font-[400] text-[12px] text-[#6C6C6C]">
                      <p>{item.bvh_no}</p> <DotIcon color="#D9D9D9" />
                      <p>{item.submitted_At}</p>
                    </div>
                  </div>

                  <div className="space-y-[5px]">
                    <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[6px]">
                      <span className="flex gap-[4px] font-[400] text-[14px] text-[#000000]">
                        Document:
                        <span className="font-[500] text-[14px] text-[#363636]">
                          {item.document}
                        </span>
                      </span>

                      <span className="flex gap-[4px] font-[400] text-[14px] text-[#000000]">
                        Selfie:
                        <span className="font-[500] text-[14px] text-[#363636]">{item.selfie}</span>
                      </span>
                    </div>
                    <p className="font-[400] text-[14px] text-[#6C6C6C]">Clear Submission</p>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-[8px] max-lg:mt-[8px] max-lg:grid max-lg:w-full max-lg:grid-cols-2">
                <Button
                  onClick={() => setOpen(true)}
                  variant="cashierOutline"
                  size="cashierOutline"
                  children="View documents"
                  className="w-full"
                />
                <Button
                  onClick={() => setReject(true)}
                  variant="reject"
                  size="cashierOutline"
                  children="Reject"
                  className="w-full"
                />
                <Button
                  variant="primary"
                  size="cashierOutline"
                  children="Approve"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        titleClassName="text-start"
        title="Documents - Fatimah Sule"
        open={open}
        onOpenChange={setOpen}
        footer={
          <div className="flex items-center justify-end">
            <div className="grid w-full grid-cols-1 gap-[8px] sm:flex sm:w-auto sm:items-center sm:gap-[16px]">
              <Button
                className="w-full sm:min-w-[143px]"
                variant="cashierOutline"
                size="cashierOutline"
                children="Close"
              />
              <Button
                onClick={() => {
                  (setOpen(false), setReject(true));
                }}
                className="w-full sm:min-w-[143px]"
                variant="reject"
                size="cashierOutline"
                children="Reject"
              />
              <Button
                className="w-full sm:min-w-[143px]"
                variant="primary"
                size="cashierOutline"
                children="Approve"
              />
            </div>
          </div>
        }
      >
        <div className="space-y-[24px]">
          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 sm:gap-[32px]">
            <div className="space-y-[10px]">
              <p className="font-[600] text-[12px] text-[#6C6C6C]">NIN Slip</p>
              <div className="relative w-full aspect-[357/221]">
                <Image
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={"/svgs/NIN_SLIP.svg"}
                  alt="user's-NIN"
                />
              </div>
            </div>

            <div className="space-y-[10px]">
              <p className="font-[600] text-[12px] text-[#6C6C6C]">Selfie</p>
              <div className="relative w-full aspect-[357/221]">
                <Image
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={"/svgs/selfie.svg"}
                  alt="user's-NIN"
                />
              </div>
            </div>
          </div>

          <div className="space-y-[24px]">
            <p className="font-[600] text-[16px] text-[#131313]">
              System Verification (Automated, Instant)
            </p>

            <div className="space-y-[16px]">
              {SYSTEM_VERIFICATION.map((item, i) => (
                <div className="flex flex-col gap-[4px] pb-[16px] border-b border-b-[#C7C7C7] last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-[500] text-[14px] text-[#8A8A8A]">{item.system}</p>
                  <p className="font-[500] text-[14px] text-[#131313]">{item.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-[24px]">
            <p className="font-[600] text-[16px] text-[#131313]">
              Address Verification (Aggregator Field Visit - Cannot be Automated)
            </p>

            <div className="space-y-[5px]">
              <div className="space-y-[10px] rounded-[6px] bg-[#E7F6EC] px-[14px] py-[10px] sm:px-[20px]">
                <p className="font-[600] text-[14px] text-[#363636]">
                  Verified - visited by NorthGate Agency, 2 days ago
                </p>

                <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
                  {VERIFIED_VISITED.map((item, i) => (
                    <div key={i} className="flex items-center gap-[5px]">
                      <MarkIcon color="#363636" />
                      <p className="font-[400] text-[12px] text-[#363636]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-[400] text-[12px] text-[#8A8A8A]">
                Address: 9, Ahmadu Bello Way, Lagos
              </p>
            </div>
          </div>

          <div className="space-y-[16px]">
            {USER_DETAILS.map((item, i) => (
              <div className="flex flex-col gap-[4px] pb-[16px] border-b border-b-[#C7C7C7] last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-[500] text-[14px] text-[#8A8A8A]">{item.system}</p>
                <p className="font-[500] text-[14px] text-[#131313]">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Modal
        footer={
          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[16px]">
            <Button children="Cancel" variant="secondary" />
            <Button children="Confirm rejection" variant="danger" />
          </div>
        }
        titleClassName="text-[#CB1A14]"
        title="Reject Fatimah Sule’s Application Helper text"
        open={reject}
        onOpenChange={setReject}
      >
        <div className="space-y-[16px]">
          <Select
            placeholder="Document image unclear"
            label="Reason (sent to applicant)"
            options={reason}
          />

          <Textarea
            className="min-h-[150px]"
            placeholder="Add context for the applicant..."
            label="Additional note (optional)"
          />
        </div>
      </Modal>
    </>
  );
}
