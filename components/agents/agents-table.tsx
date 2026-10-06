"use client";

import React, { useMemo, useState } from "react";
import { RightArrowIcon, WarningIcon } from "../icons/svgs";
import { SearchInput } from "../ui/search-input";
import Select from "../ui/select";
import { Modal } from "../ui/modal";
import Button from "../ui/button";
import Input from "../ui/input";
import { useRouter } from "next/navigation";

type AgentStatus = "Active" | "Flagged";
type PendingAction = "None" | "Discrepancy" | "Float Request";

interface Agent {
  id: number;
  name: string;
  location: string;
  status: AgentStatus;
  pendingAction: PendingAction;
  floatCap: string;
  feeRate: string;
  createdAt: number;
}

const sampleAgents: Omit<Agent, "id" | "createdAt">[] = [
  {
    name: "Ada Cash Point",
    location: "Ikeja, Lagos",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Emeka Eze",
    location: "Gbaggi, Oyo",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Emeka Eze",
    location: "Ikorodu, Lagos",
    status: "Flagged",
    pendingAction: "Discrepancy",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Chidinma Obi",
    location: "Ibadan, Oyo",
    status: "Active",
    pendingAction: "Float Request",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Femi Adeyemi",
    location: "Ikeja, Lagos",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Nkechi Uba",
    location: "Garki, Abuja",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Nkechi Uba",
    location: "VI, Lagos",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Gbenga Olanrewaju",
    location: "Maitama, Abuja",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Adgeze Nwosu",
    location: "Lekki, Lagos",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
  {
    name: "Emeka Eze",
    location: "Ado, Ekiti",
    status: "Active",
    pendingAction: "None",
    floatCap: "₦620,000 / ₦1,000,000",
    feeRate: "1.5%",
  },
];

const agents: Agent[] = Array.from({ length: 128 }, (_, index) => ({
  ...sampleAgents[index % sampleAgents.length],
  id: index + 1,
  createdAt: 128 - index,
}));

const pageSize = 10;

const statusStyles: Record<AgentStatus, string> = {
  Active: "bg-[#E7F6EC] text-[#078132]",
  Flagged: "bg-[#FCE9E8] text-[#D31812]",
};

const pendingActionStyles: Record<PendingAction, string> = {
  None: "text-[#C7C7C7]",
  Discrepancy: "bg-[#FCE9E8] text-[#D31812]",
  "Float Request": "bg-[#FFF4E2] text-[#C57900]",
};

export default function AgentsTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAgents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return agents
      .filter((agent) => `${agent.name} ${agent.location}`.toLowerCase().includes(query))
      .filter((agent) => statusFilter === "all" || agent.status.toLowerCase() === statusFilter)
      .sort((first, second) =>
        sortOrder === "latest"
          ? second.createdAt - first.createdAt
          : first.createdAt - second.createdAt,
      );
  }, [search, statusFilter, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredAgents.length / pageSize));
  const pageStart = (currentPage - 1) * pageSize;
  const visibleAgents = filteredAgents.slice(pageStart, pageStart + pageSize);
  const pageItems: (number | "ellipsis")[] =
    pageCount <= 5
      ? Array.from({ length: pageCount }, (_, index) => index + 1)
      : currentPage <= 3
        ? [1, 2, 3, 4, "ellipsis", pageCount]
        : currentPage >= pageCount - 2
          ? [1, "ellipsis", pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
          : [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", pageCount];

  const updateFilter = (update: () => void) => {
    update();
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), pageCount));
  };

  const [openProcess, setOpenProcess] = useState(false);
  const [suspend, setSuspend] = useState(false);
  const [openFloat, setOpenFloat] = useState(false);
  const router = useRouter();

  return (
    <>
      <section className="w-full overflow-hidden rounded-[4px] border border-[#E5E5E5] bg-white">
        <div className="flex flex-wrap items-center gap-[8px] border-b border-[#E5E5E5] p-[16px] sm:p-[18px] max-lg:grid max-lg:grid-cols-1">
          <div className="w-full max-w-[288px] max-lg:max-w-full">
            <SearchInput
              categories={[]}
              value={search}
              onChange={(value) => updateFilter(() => setSearch(value))}
              placeholder="Search by name, phone number..."
            />
          </div>

          <div className="min-w-[200px]">
            <Select
              options={[
                { value: "all", label: "Status: Active" },
                { value: "active", label: "Active" },
                { value: "flagged", label: "Flagged" },
              ]}
              value={statusFilter}
              onValueChange={(value) => updateFilter(() => setStatusFilter(value))}
            />
          </div>

          <div className="min-w-[100px]">
            <Select
              options={[
                { value: "latest", label: "Latest" },
                { value: "oldest", label: "Oldest" },
              ]}
              value={sortOrder}
              onValueChange={(value) => updateFilter(() => setSortOrder(value))}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[900px] table-fixed border-collapse text-left text-[11px] text-[#6C6C6C]">
            <colgroup>
              <col className="w-[16%]" />
              <col className="w-[16%]" />
              <col className="w-[17%]" />
              <col className="w-[17%]" />
              <col className="w-[17%]" />
              <col className="w-[11%]" />
              <col className="w-[6%]" />
            </colgroup>
            <thead className="bg-[#F7F7F7] text-[12px] font-[600] text-[#6C6C6C]">
              <tr className="h-[62px] border-b border-[#D2D2D2]">
                <th className="px-[12px]" scope="col">
                  Name
                </th>
                <th className="px-[12px]" scope="col">
                  Location
                </th>
                <th className="px-[12px]" scope="col">
                  Status
                </th>
                <th className="px-[12px]" scope="col">
                  Pending Actions
                </th>
                <th className="px-[12px]" scope="col">
                  Float / Cap
                </th>
                <th className="px-[12px]" scope="col">
                  Fee Rate
                </th>
                <th className="px-[12px]" scope="col">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleAgents.map((agent) => (
                <tr
                  onClick={() => setOpenProcess(true)}
                  key={agent.id}
                  className="h-[62px] border-b border-[#D2D2D2] last:border-b-0 cursor-pointer"
                >
                  <td className="whitespace-nowrap px-[12px]">{agent.name}</td>
                  <td className="whitespace-nowrap px-[12px]">{agent.location}</td>
                  <td className="px-[12px]">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-[10px] py-[5px] text-[10px] font-[500] ${statusStyles[agent.status]}`}
                    >
                      {agent.status}
                    </span>
                  </td>
                  <td className="px-[12px]">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-[10px] py-[5px] text-[10px] font-[500] ${pendingActionStyles[agent.pendingAction]}`}
                    >
                      {agent.pendingAction}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-[12px]">{agent.floatCap}</td>
                  <td className="whitespace-nowrap px-[12px]">{agent.feeRate}</td>
                  <td className="px-[12px] text-center">
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        router.push(
                          `/agents/${agent.id}?status=${agent.status}&pendingAction=${agent.pendingAction} `,
                        );
                      }}
                      type="button"
                      aria-label={`View ${agent.name}`}
                      className="inline-flex items-center justify-center text-[#8A8A8A] cursor-pointer"
                    >
                      <RightArrowIcon size={20} color="#8A8A8A" />
                    </button>
                  </td>
                </tr>
              ))}
              {visibleAgents.length === 0 && (
                <tr>
                  <td className="h-[100px] text-center" colSpan={7}>
                    No agents match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-[12px]  px-[16px] py-[8px] text-[12px] text-[#A7A7A7]">
          <p>
            Showing {filteredAgents.length === 0 ? 0 : pageStart + 1} to{" "}
            {Math.min(pageStart + pageSize, filteredAgents.length)} of {filteredAgents.length} users
          </p>
          <nav aria-label="Agent table pagination" className="flex items-center gap-[4px]">
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
              className="flex h-[36px] w-[36px] items-center justify-center rounded-[6px] text-[22px] text-white disabled:opacity-50"
            >
              ‹
            </button>
            {pageItems.map((page, index) =>
              page === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="px-[4px] text-white">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  aria-current={currentPage === page ? "page" : undefined}
                  onClick={() => changePage(page)}
                  className={`h-[36px] min-w-[36px] rounded-[6px] px-[10px] text-[12px] ${
                    currentPage === page ? "bg-[#04907E] text-white" : "bg-white text-[#777777]"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage === pageCount}
              onClick={() => changePage(currentPage + 1)}
              className="ml-[8px] flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-white text-[22px] text-[#777777] disabled:opacity-50"
            >
              ›
            </button>
          </nav>
        </footer>
      </section>

      <Modal open={openProcess} onOpenChange={setOpenProcess}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <p className="font-[700] text-[24px] text-[#04907E]">
              Process Commission Payout — Ada Cash Point
            </p>

            <div className="space-y-[16px]">
              <p className="flex items-center gap-[4px] font-[400] text-[12px] text-[#8A8A8A]">
                Pending commission:
                <span className="font-[600] text-[12px] text-[#131313]">₦96,000</span>
              </p>

              <p className="font-[500] text-[12px] text-[#6C6C6C]">
                This will be transferred to the agent's registered settlement account.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpenProcess(false)} children="Cancel" variant="secondary" />
            <Button
              onClick={() => {
                (setOpenProcess(false), setSuspend(true));
              }}
              className="bg-[#04907E]"
              children="Suspend Access"
              variant="primary"
            />
          </div>
        </div>
      </Modal>

      <Modal open={suspend} onOpenChange={setSuspend}>
        <div className="space-y-[64px]">
          <div className="flex flex-col items-center gap-[24px]">
            <WarningIcon className="w-[64px] h-[64px]" color="#04907E" />

            <div className="flex flex-col items-center gap-[8px]">
              <p className="font-[700] text-[24px] text-[#04907E]">Suspend Agent?</p>

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                Suspending stops agent Ade Cash Point from processing any further cash-in/cash-out
                until reactivated.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setSuspend(false)} children="Cancel" variant="secondary" />
            <Button
              onClick={() => {
                (setSuspend(false), setOpenFloat(true));
              }}
              className="bg-[#04907E]"
              children="Suspend Access"
              variant="primary"
            />
          </div>
        </div>
      </Modal>

      <Modal open={openFloat} onOpenChange={setOpenFloat}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <p className="font-[700] text-[24px] text-[#04907E] text-center">
              Float top-up request — Northside Agency
            </p>

            <p className="flex items-center gap-[4px] font-[400] text-[12px] text-[#8A8A8A]">
              Current float:
              <span className="font-[600] text-[12px] text-[#131313]">₦40,000</span>
              of ₦500,000 cap.
            </p>

            <Input label="Top-up amount" placeholder="₦300,000" />
          </div>

          <div className="grid grid-cols-2 gap-[16px] max-lg:grid-cols-1">
            <Button onClick={() => setOpenFloat(false)} children="Cancel" variant="secondary" />
            <Button
              onClick={() => {
                setOpenFloat(false);
              }}
              className="bg-[#04907E]"
              children="Approve"
              variant="primary"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
