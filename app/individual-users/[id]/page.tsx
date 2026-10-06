"use client";

import { DisputesEscalationsIcon } from "@/components/icons/disputes-escalations";
import { WarningIcon } from "@/components/icons/svgs";
import { Shell } from "@/components/shell";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import React, { useState } from "react";

const recentTrans = [
  { trans: "Scan-to-Pay — Sisi Yemmie Grills", date: "· Today, 10:42am" },
  { trans: "Scan-to-Pay — Sisi Yemmie Grills", date: "· Today, 10:42am" },
  { trans: "Wallet funding", date: "· Yesterday" },
  { trans: "Wallet funding", date: "· Yesterday" },
  { trans: "Scan-to-Pay — Sisi Yemmie Grills", date: "· 3 days ago" },
];

export default function Page() {
  const [opensuspend, setOpensuspend] = useState(false);
  const [suspended, setSuspended] = useState(true);
  const [openReactivate, setOpenReactivate] = useState(false);

  return (
    <>
      <Shell>
        <div className="space-y-[24px]">
          <Breadcrumb firstTab="Individual User" secondTab="User" />

          <div className="flex justify-between max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px] items-center">
            <div className="flex gap-[12px]">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#D6F0DF] font-[600] text-[16px] text-[#024E44]">
                <p>CO</p>
              </div>
              <div className=" space-y-[4px]">
                <div className="flex gap-[10px]">
                  <p className="font-[600] text-[16px] text-[#131313]">Chiamaka Obi</p>

                  {!suspended && (
                    <span className="bg-[#FBEAE9] py-[2px] px-[12px] flex justify-center items-center font-[500] text-[12px] text-[#CB1A14] rounded-full">
                      Suspended
                    </span>
                  )}

                  {suspended && (
                    <span className="bg-[#E7F6EC] py-[2px] px-[12px] flex justify-center items-center font-[500] text-[12px] text-[#04802E] rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <p className="font-[500] text-[14px] text-[#6C6C6C]">0803 221 4409</p>
              </div>
            </div>

            {!suspended && (
              <div
                onClick={() => setOpenReactivate(true)}
                className="bg-[#04907E] py-[8px] px-[12px] flex cursor-pointer justify-center items-center rounded-[8px] font-[500] text-[16px] text-white"
              >
                Reactivate
              </div>
            )}

            {suspended && (
              <div
                onClick={() => setOpensuspend(true)}
                className="bg-[#FBEAE9] py-[8px] px-[12px] cursor-pointer flex justify-center items-center rounded-[8px] font-[500] text-[16px] text-[#CB1A14]"
              >
                Suspend
              </div>
            )}
          </div>

          {!suspended && (
            <div className="bg-[#FBEAE9] p-[16px] rounded-[8px] flex items-center gap-[4px]">
              <span className="font-[500] text-[14px] text-[#CB1A14]">Flag reason:</span>{" "}
              <span className="font-[400] text-[14px] text-[#363636]">
                Rapid repeat transfers flagged by fraud engine
              </span>
            </div>
          )}

          <div className="p-[24px] rounded-[12px] space-y-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
            <Heading title="Personal Details" />

            <div className="flex  gap-[400px] max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]">
              <div className="space-y-[20px]">
                <Details title="Email:" value="chiamakaobi@gmail.com" />

                <Details title="Address:" value="Plot 7, Oke-Ira, Ogba, Lagos" />
              </div>

              <Details title="Date of Birth:" value="11 Mar 1994" />
            </div>
          </div>

          <div className="p-[24px] rounded-[12px] space-y-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
            <Heading title="Recent Transaction History" />

            <div className="space-y-[16px]">
              {recentTrans.map((item, i) => (
                <div
                  key={i}
                  className="pb-[16px] border-b border-b-[#C7C7C7] last:border-b-0 flex items-center gap-[2px] max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]"
                >
                  <p className="font-[500] text-[14px] text-[#131313]">{item.trans}</p>
                  <p className="font-[400] text-[12px] text-[#6C6C6C]">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Shell>

      <Modal open={opensuspend} onOpenChange={setOpensuspend}>
        <div className="space-y-[64px]">
          <div className="flex flex-col items-center gap-[24px]">
            <DisputesEscalationsIcon className="w-[64px] h-[64px]" fill="#04907E" color="#04907E" />
            <div className="space-y-[8px] text-center">
              <p className="font-[700] text-[24px] text-[#04907E]">Suspend Individual User?</p>
              <p className="font-[400] text-[16px] text-[#363636]">
                Suspending stops user Chiamaka Obi from processing any further transactions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpensuspend(false)} variant="secondary" children="Cancel" />
            <Button
              onClick={() => {
                (setOpensuspend(false), setSuspended(false));
              }}
              variant="danger"
              children="Suspend Access"
            />
          </div>
        </div>
      </Modal>

      <Modal open={openReactivate} onOpenChange={setOpenReactivate}>
        <div className="space-y-[64px]">
          <div className="flex flex-col items-center">
            <p className="font-[700] text-center text-[24px] text-[#04907E]">
              Reactivate Individual User?
            </p>

            <p className="font-[400] text-center text-[16px] text-[#363636]">
              You are about tp reactivate user Chiamaka Obi account. This action is logged in the
              audit trail.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button
              onClick={() => setOpenReactivate(false)}
              variant="secondary"
              children="Cancel"
            />
            <Button
              onClick={() => {
                (setSuspended(true), setOpenReactivate(false));
              }}
              variant="primary"
              children="Confirm"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

type HeadingProp = {
  title: string;
};

type DetailsProp = {
  title: string;
  value: string;
  text?: React.ReactNode;
};

export const Heading = ({ title }: HeadingProp) => {
  return <p className="font-[600] text-[16px] text-[#131313]">{title}</p>;
};

export const Details = ({ title, value, text }: DetailsProp) => {
  return (
    <div className="space-y-[8px]">
      <p className="font-[400] text-[14px] text-[#6C6C6C]">{title}</p>
      <p className="font-[600] text-[14px] text-[#363636] flex items-center gap-[8px]">
        {value} {text && <p className="font-[600] text-[12px] text-[#024E44]">{text}</p>}
      </p>
    </div>
  );
};
