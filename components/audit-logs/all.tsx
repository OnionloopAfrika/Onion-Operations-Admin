"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "../icons/svgs";
import Input from "../ui/input";

type AuditCategory = "KYC" | "Account" | "Payout" | "dispute" | "Config" | "Merchant";

interface AuditLogEntry {
  admin: string;
  action: string;
  recipient: string;
  recipientDetail?: string;
  category: AuditCategory;
  time: string;
}

const auditLogs: AuditLogEntry[] = [
  {
    admin: "Ifeoma Nwachukwu",
    action: "Approved KYC",
    recipient: "Ibrahim Musa",
    recipientDetail: "08052219034",
    category: "KYC",
    time: "Today, 6:20am",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Rejected KYC-selfie missing",
    recipient: "Grace Ojo",
    recipientDetail: "0703871120",
    category: "KYC",
    time: "Yesterday, 5:45pm",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Suspended account- fraud flag",
    recipient: "Yusuf Garba",
    recipientDetail: "0703621432",
    category: "Account",
    time: "5 days ago",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Processed commission payout #1.84m",
    recipient: "Obi &co field team",
    recipientDetail: "AGG-11",
    category: "Payout",
    time: "Today, 6:20am",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Escalated to finance & Risk",
    recipient: "DSP-321",
    recipientDetail: "Delta quickcash",
    category: "dispute",
    time: "5 days ago",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Proposed fee change 1.5%-1.3%",
    recipient: "OnionSolo merchant",
    category: "Config",
    time: "Today, 6:20am",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Approved merchant application",
    recipient: "Sisi yemmie grill",
    recipientDetail: "MER-088",
    category: "Merchant",
    time: "5 days ago",
  },
];

export default function All() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("08-06-2026");

  const filteredLogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return auditLogs;

    return auditLogs.filter((entry) =>
      [
        entry.admin,
        entry.action,
        entry.recipient,
        entry.recipientDetail ?? "",
        entry.category,
        entry.time,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <section className="w-full overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-white">
      <div className="flex min-h-[80px] flex-wrap items-center gap-[8px] border-b border-[#D6D6D6] px-[16px] py-[12px]">
        <div className="w-full max-w-[370px]">
          <Input
            aria-label="Search actions or categories"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search actions or categories..."
            prefixicon={<SearchIcon color="#8A8A8A" />}
            value={search}
          />
        </div>

        <div className="w-[146px] max-lg:w-full">
          <Input
            aria-label="Audit log date"
            icon={
              <svg aria-hidden="true" className="h-[16px] w-[16px]" fill="none" viewBox="0 0 16 16">
                <rect x="2" y="3.5" width="12" height="10.5" rx="1.5" fill="#8A8A8A" />
                <path
                  d="M5 2v3M11 2v3M2.5 6.5h11"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="1.3"
                />
                <path
                  d="M5 8.5h1M8 8.5h1M11 8.5h.01M5 11h1M8 11h1"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="1.3"
                />
              </svg>
            }
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[760px] table-fixed border-collapse text-left text-[14px] text-[#6C6C6C]">
          <colgroup>
            <col className="w-[18%]" />
            <col className="w-[27.5%]" />
            <col className="w-[20.5%]" />
            <col className="w-[14%]" />
            <col className="w-[20%]" />
          </colgroup>
          <thead>
            <tr className="h-[82px] border-b border-[#D6D6D6] bg-[#F7F7F7] text-[16px] font-[600]">
              <th className="px-[14px]" scope="col">
                Admin
              </th>
              <th className="px-[14px]" scope="col">
                Action
              </th>
              <th className="px-[14px]" scope="col">
                Recipient
              </th>
              <th className="px-[14px]" scope="col">
                Category
              </th>
              <th className="px-[14px]" scope="col">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((entry, index) => (
              <tr
                className="h-[81px] border-b border-[#C7C7C7] last:border-b-0"
                key={`${entry.action}-${index}`}
              >
                <td className="whitespace-nowrap px-[14px] font-[500] max-lg:text-[12px]">
                  {entry.admin}
                </td>
                <td className="px-[14px] font-[500] max-lg:text-[12px]">{entry.action}</td>
                <td className="px-[14px] font-[500]">
                  <span className="block">{entry.recipient}</span>
                  {entry.recipientDetail && (
                    <span className="mt-[2px]  max-lg:text-[12px] block">
                      {entry.recipientDetail}
                    </span>
                  )}
                </td>
                <td className="px-[14px]">
                  <span className="inline-flex  max-lg:text-[12px] min-h-[30px] items-center rounded-full bg-[#F0FBF9] px-[12px] font-[500] text-[#009688]">
                    {entry.category}
                  </span>
                </td>
                <td className="whitespace-nowrap  max-lg:text-[12px] px-[14px] font-[500]">
                  {entry.time}
                </td>
              </tr>
            ))}
            {filteredLogs.length === 0 && (
              <tr>
                <td className="h-[100px] px-[14px] text-center" colSpan={5}>
                  No audit log entries match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
