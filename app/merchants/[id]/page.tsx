"use client";

import { Details, Heading } from "@/app/individual-users/[id]/page";
import { TrashIcon } from "@/components/icons/svgs";
import { Shell } from "@/components/shell";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import Textarea from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";

export default function Page() {
  return (
    <Suspense fallback={<MerchantDetails firstTab="OnionSolo Merchant" />}>
      <MerchantDetailsPage />
    </Suspense>
  );
}

function MerchantDetailsPage() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const firstTab =
    source === "OnionCrew" || source === "OnionMega" ? "Merchant" : "OnionSolo Merchant";

  return <MerchantDetails firstTab={firstTab} />;
}

function MerchantDetails({ firstTab }: { firstTab: string }) {
  const [openTerminate, setOpenTerminate] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);

  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const onion_mega = source === "OnionMega";

  const roster_details = [
    { name: "Tobi Adeyanju", role: "Cashier" },
    { name: "Kemi Ojo", role: "Cashier" },
    { name: "Sam Igwe", role: "Inventory manager" },
  ];

  const [flagged, setFlagged] = useState(true);

  return (
    <>
      <Shell>
        <div className="space-y-[24px]">
          <Breadcrumb firstTab={firstTab} secondTab="User" />

          <div className="flex justify-between items-center max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]">
            <div className="flex gap-[12px]">
              <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#D6F0DF] font-[600] text-[16px] text-[#024E44]">
                <p>MK</p>
              </div>
              <div className=" space-y-[4px]">
                <div className="flex gap-[10px]">
                  <p className="font-[600] text-[16px] text-[#131313]">Mama Nkechi Kitchen</p>

                  <span className="bg-[#E7F6EC] py-[2px] px-[12px] flex justify-center items-center font-[500] text-[12px] text-[#04802E] rounded-full">
                    Active
                  </span>
                </div>
                <p className="font-[500] text-[14px] text-[#6C6C6C]">MER-201</p>
              </div>
            </div>

            <div
              onClick={() => setOpenTerminate(true)}
              className="bg-[#FBEAE9] py-[8px] px-[12px] cursor-pointer flex justify-center items-center rounded-[8px] font-[500] text-[16px] text-[#CB1A14]"
            >
              Terminate
            </div>
          </div>

          {onion_mega && (
            <div className="space-y-[24px]">
              <div className="p-[24px] rounded-[12px] space-y-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
                <Heading title="Staff Roster" />
                <div className="space-y-[16px]">
                  {roster_details.map((item, i) => (
                    <div
                      className="flex justify-between items-center pb-[16px] border-b border-b-[#C7C7C7] last:border-b-0"
                      key={i}
                    >
                      <p className="font-[500] text-[14px] text-[#131313]">{item.name}</p>
                      <p className="font-[500] text-[14px] text-[#8A8A8A]">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-[400] text-[12px] text-[#8A8A8A]">
                Full roster management (add/remove staff, role changes) is handled by the branch
                manager in the OnionMega merchant dashboard — this is Ops' read view.
              </p>

              {!flagged && (
                <div className="p-[24px] rounded-[12px] space-y-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
                  <Heading title="Flagged Inventory" />

                  <p className="font-[400] text-[14px] text-[#6C6C6C]">
                    No flags — inventory reconciles cleanly against QR order volume.
                  </p>
                </div>
              )}

              {flagged && (
                <div className="p-[24px] rounded-[12px] space-y-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
                  <Heading title="Flagged Inventory" />

                  <div className="space-y-[6px]">
                    <p className="font-[500] text-[14px] text-[#131313]">Fried chicken (large)</p>

                    <p className="font-[400] text-[14px] text-[#6C6C6C]">
                      No flags — inventory reconciles cleanly against QR order volume.
                    </p>
                  </div>

                  <button className="bg-white py-[8px] px-[16px] rounded-[8px] border border-[#C7C7C7] font-[500] text-[14px] text-[#04907E]">
                    Flag for follow up
                  </button>
                </div>
              )}
            </div>
          )}

          {!onion_mega && (
            <div className="p-[24px] rounded-[12px] space-y-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]">
              <Heading title="Personal Details" />

              <div className="flex  gap-[400px] max-lg:grid max-lg:grid-cols-1 max-lg:gap-[20px]">
                <div className="space-y-[20px]">
                  <Details title="Owner:" value="Nkechi Umeh" />

                  <Details
                    title="Fee Rate (charged to merchant):"
                    value="1.5%"
                    text={
                      <p className="cursor-pointer" onClick={() => setOpenRequest(true)}>
                        Request change
                      </p>
                    }
                  />

                  <Details title="Address:" value="Plot 7, Oke-Ira, Ogba, Lagos" />
                </div>

                <Details title="Phone Number:" value="0803 111 2201" />
              </div>
            </div>
          )}

          {!onion_mega && (
            <p className="font-[400] text-[12px] text-[#8A8A8A]">
              No payout ledger appears here — merchants are billed a transaction fee, never paid a
              commission.
            </p>
          )}
        </div>
      </Shell>

      <Modal open={openTerminate} onOpenChange={setOpenTerminate}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]   flex flex-col items-center">
            <TrashIcon color="#CB1A14" />
            <div className="space-y-[8px]">
              <p className="text-center font-[700] text-[24px] text-[#CB1A14]">
                Terminate OnionSolo Merchant?
              </p>

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                You are about to terminate partnership with OnionSolo merchant user
                <p className="font-[600] text-[16px] text-[#363636]">Mama Nkechi Kitchen.</p>
              </p>

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                This is permanent and different from suspension, it ends the partnership entirely,
                not a temporary hold.
              </p>
            </div>

            <Textarea placeholder="Write something..." label="Reason" />
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpenTerminate(false)} variant="secondary" children="Cancel" />
            <Button
              onClick={() => setOpenTerminate(false)}
              variant="danger"
              children="Confirm Termination"
            />
          </div>
        </div>
      </Modal>

      <Modal open={openRequest} onOpenChange={setOpenRequest}>
        <div className="space-y-[48px]">
          <div className="space-y-[24px]">
            <p className="font-[700] text-[24px] text-[#04907E] text-center">
              Request Fee Change — Mama Nkechi Kitchen
            </p>

            <div className="space-y-[16px]">
              <p className="flex items-center gap-[4px] font-[400] text-[12px] text-[#8A8A8A]">
                Current rate:
                <span className="font-[600] text-[12px] text-[#131313]">1.5%</span>
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
            <Button onClick={() => setOpenRequest(false)} variant="secondary" children="Cancel" />
            <Button onClick={() => setOpenRequest(false)} variant="primary" children="Submit" />
          </div>
        </div>
      </Modal>
    </>
  );
}
