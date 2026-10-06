"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "../icons/svgs";
import Input from "../ui/input";
import Select from "../ui/select";

type AccountStatus = "Suspended" | "Reactivated";

interface AccountLogEntry {
  admin: string;
  action: string;
  recipient: string;
  recipientDetail: string;
  status: AccountStatus;
  time: string;
}

const accountLogs: AccountLogEntry[] = [
  {
    admin: "Ifeoma Nwachukwu",
    action: "Suspended account- fraud flag",
    recipient: "Ibrahim Musa",
    recipientDetail: "08052219034",
    status: "Suspended",
    time: "Today, 6:20am",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Reactivated account- fraud flag",
    recipient: "Grace Ojo",
    recipientDetail: "0703871120",
    status: "Reactivated",
    time: "Yesterday, 5:45pm",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Suspended account- fraud flag",
    recipient: "KFC Holdings",
    recipientDetail: "MER-080",
    status: "Suspended",
    time: "5 days ago",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Reactivated account- fraud flag",
    recipient: "Rebecca Umar",
    recipientDetail: "AGG-11",
    status: "Reactivated",
    time: "Today, 6:20am",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Suspended account- fraud flag",
    recipient: "Obi &co field team",
    recipientDetail: "AGG-11",
    status: "Suspended",
    time: "Yesterday, 5:45pm",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Suspended account- fraud flag",
    recipient: "Provens agency",
    recipientDetail: "AGN-11",
    status: "Suspended",
    time: "5 days ago",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Reactivated account- fraud flag",
    recipient: "Emeka Kenechukwu",
    recipientDetail: "AGG-1103",
    status: "Suspended",
    time: "Today, 6:20am",
  },
  {
    admin: "Ifeoma Nwachukwu",
    action: "Suspended account- fraud flag",
    recipient: "Sisi yemmie grill",
    recipientDetail: "MER-088",
    status: "Reactivated",
    time: "5 days ago",
  },
];

const statusOptions = [
  { value: "all", label: "Status: All" },
  { value: "suspended", label: "Suspended" },
  { value: "reactivated", label: "Reactivated" },
];

export default function Account() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [date, setDate] = useState("08-06-2026");

  const filteredLogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return accountLogs.filter((entry) => {
      const matchesSearch =
        !query ||
        [
          entry.admin,
          entry.action,
          entry.recipient,
          entry.recipientDetail,
          entry.status,
          entry.time,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesStatus = statusFilter === "all" || entry.status.toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <section className="w-full overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-white">
      <div className="flex min-h-[80px] flex-wrap items-center gap-[8px] border-b border-[#D6D6D6] px-[16px] py-[12px]">
        <div className="w-full max-w-[370px] max-lg:max-w-full">
          <Input
            aria-label="Search account audit logs"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search actions or categories..."
            prefixicon={<SearchIcon color="#8A8A8A" />}
            value={search}
          />
        </div>
        <div className="w-[130px] max-lg:w-full">
          <Select onValueChange={setStatusFilter} options={statusOptions} value={statusFilter} />
        </div>
        <div className="w-[146px] max-lg:w-full">
          <Input
            aria-label="Account audit log date"
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
            <col className="w-[18.5%]" />
            <col className="w-[15.5%]" />
          </colgroup>
          <thead>
            <tr className="h-[76px] border-b border-[#D6D6D6] bg-[#F7F7F7] text-[16px] font-[600]">
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
                Status
              </th>
              <th className="px-[14px]" scope="col">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((entry, index) => (
              <tr
                className="h-[77px] border-b border-[#C7C7C7] last:border-b-0"
                key={`${entry.recipient}-${index}`}
              >
                <td className="whitespace-nowrap px-[14px] font-[500] max-lg:text-[12px]">
                  {entry.admin}
                </td>
                <td className="px-[14px] font-[500] max-lg:text-[12px]">{entry.action}</td>
                <td className="px-[14px] font-[500]">
                  <span className="block">{entry.recipient}</span>
                  <span className="mt-[2px] block max-lg:text-[12px]">{entry.recipientDetail}</span>
                </td>
                <td className="px-[14px]">
                  <span
                    className={`inline-flex min-h-[30px] items-center rounded-full px-[12px] font-[500] max-lg:text-[12px] ${
                      entry.status === "Reactivated"
                        ? "bg-[#E7F6EC] text-[#078132]"
                        : "bg-[#FCE9E8] text-[#D31812]"
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-[14px] font-[500] max-lg:text-[12px]">
                  {entry.time}
                </td>
              </tr>
            ))}
            {filteredLogs.length === 0 && (
              <tr>
                <td className="h-[100px] px-[14px] text-center" colSpan={5}>
                  No account audit log entries match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
