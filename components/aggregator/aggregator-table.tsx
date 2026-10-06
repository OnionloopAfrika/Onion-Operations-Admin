"use client";

import React, { useMemo, useState } from "react";
import { RightArrowIcon } from "../icons/svgs";
import { SearchInput } from "../ui/search-input";
import Select from "../ui/select";
import { Modal } from "../ui/modal";
import Button from "../ui/button";
import Input from "../ui/input";
import { useRouter } from "next/navigation";

type AggregatorStatus = "Active" | "Active - Under Review" | "Pending Approval";

interface Aggregator {
  id: number;
  name: string;
  region: string;
  commissionPayout: string;
  targetProgress: string;
  targetMet: boolean;
  status: AggregatorStatus;
  createdAt: number;
}

const sampleAggregators: Omit<Aggregator, "id" | "createdAt">[] = [
  {
    name: "Obi & Co Field Team",
    region: "South South",
    commissionPayout: "₦1.84M",
    targetProgress: "59/50",
    targetMet: true,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "South East",
    commissionPayout: "₦1.84M",
    targetProgress: "29/30",
    targetMet: false,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "South West",
    commissionPayout: "₦1.84M",
    targetProgress: "4/30",
    targetMet: false,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "South West",
    commissionPayout: "₦0",
    targetProgress: "4/30",
    targetMet: false,
    status: "Active - Under Review",
  },
  {
    name: "Obi & Co Field Team",
    region: "South West",
    commissionPayout: "₦1.84M",
    targetProgress: "0/10",
    targetMet: false,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "South West",
    commissionPayout: "₦1.84M",
    targetProgress: "59/50",
    targetMet: true,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "South West",
    commissionPayout: "₦1.84M",
    targetProgress: "4/30",
    targetMet: false,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "North West",
    commissionPayout: "₦1.84M",
    targetProgress: "4/30",
    targetMet: false,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "North East",
    commissionPayout: "₦1.84M",
    targetProgress: "4/30",
    targetMet: false,
    status: "Active",
  },
  {
    name: "Obi & Co Field Team",
    region: "North Central",
    commissionPayout: "₦0",
    targetProgress: "Not yet set",
    targetMet: false,
    status: "Pending Approval",
  },
];

const aggregators: Aggregator[] = Array.from({ length: 128 }, (_, index) => ({
  ...sampleAggregators[index % sampleAggregators.length],
  id: index + 1,
  createdAt: 128 - index,
}));

const pageSize = 10;

const statusStyles: Record<AggregatorStatus, string> = {
  Active: "bg-[#E7F6EC] text-[#078132]",
  "Active - Under Review": "bg-[#FFF4E2] text-[#C57900]",
  "Pending Approval": "bg-[#FFF4E2] text-[#C57900]",
};

export default function AggregatorTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAggregators = useMemo(() => {
    const query = search.trim().toLowerCase();

    return aggregators
      .filter((aggregator) =>
        `${aggregator.name} ${aggregator.region}`.toLowerCase().includes(query),
      )
      .filter(
        (aggregator) => statusFilter === "all" || aggregator.status.toLowerCase() === statusFilter,
      )
      .sort((first, second) =>
        sortOrder === "latest"
          ? second.createdAt - first.createdAt
          : first.createdAt - second.createdAt,
      );
  }, [search, statusFilter, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredAggregators.length / pageSize));
  const pageStart = (currentPage - 1) * pageSize;
  const visibleAggregators = filteredAggregators.slice(pageStart, pageStart + pageSize);
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

  const [process, setProcess] = useState(false);
  const [approve, setApprove] = useState(false);

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

          <div className="min-w-[120px] max-lg:min-w-[full]">
            <Select
              options={[
                { value: "all", label: "Status: All" },
                { value: "active", label: "Active" },
                { value: "active - under review", label: "Active - Under Review" },
                { value: "pending approval", label: "Pending Approval" },
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
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-[16%]" />
              <col className="w-[22%]" />
              <col className="w-[17%]" />
              <col className="w-[5%]" />
            </colgroup>
            <thead className="bg-[#F7F7F7] text-[12px] font-[600] text-[#6C6C6C]">
              <tr className="h-[62px] border-b border-[#D2D2D2]">
                <th className="px-[12px]" scope="col">
                  Name
                </th>
                <th className="px-[12px]" scope="col">
                  Region
                </th>
                <th className="px-[12px]" scope="col">
                  Commission Payout
                </th>
                <th className="px-[12px]" scope="col">
                  Target Progress
                </th>
                <th className="px-[12px]" scope="col">
                  Status
                </th>
                <th className="px-[12px]" scope="col">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleAggregators.map((aggregator) => (
                <tr
                  onClick={() => setProcess(true)}
                  key={aggregator.id}
                  className="h-[62px] border-b border-[#D2D2D2] last:border-b-0 cursor-pointer"
                >
                  <td className="whitespace-nowrap px-[12px]">{aggregator.name}</td>
                  <td className="whitespace-nowrap px-[12px]">{aggregator.region}</td>
                  <td className="whitespace-nowrap px-[12px]">{aggregator.commissionPayout}</td>
                  <td className="px-[12px]">
                    <div className="flex items-center gap-[8px] whitespace-nowrap">
                      <span
                        className={
                          aggregator.targetMet
                            ? "font-[500] text-[#078132]"
                            : aggregator.targetProgress === "Not yet set"
                              ? "text-[#C7C7C7]"
                              : ""
                        }
                      >
                        {aggregator.targetProgress}
                      </span>
                      {aggregator.targetMet && (
                        <span className="inline-flex rounded-full bg-[#E7F6EC] px-[10px] py-[5px] text-[10px] font-[500] text-[#078132]">
                          Target met
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-[12px]">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-[10px] py-[5px] text-[10px] font-[500] ${statusStyles[aggregator.status]}`}
                    >
                      {aggregator.status}
                    </span>
                  </td>
                  <td className="px-[12px] text-center">
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        router.push(`/aggregators/${aggregator.id}`);
                      }}
                      type="button"
                      aria-label={`View ${aggregator.name} in ${aggregator.region}`}
                      className="inline-flex items-center justify-center text-[#8A8A8A] cursor-pointer"
                    >
                      <RightArrowIcon size={20} color="#8A8A8A" />
                    </button>
                  </td>
                </tr>
              ))}
              {visibleAggregators.length === 0 && (
                <tr>
                  <td className="h-[100px] text-center" colSpan={6}>
                    No aggregators match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-[12px]  px-[16px] py-[8px] text-[12px] text-[#A7A7A7]">
          <p>
            Showing {filteredAggregators.length === 0 ? 0 : pageStart + 1} to{" "}
            {Math.min(pageStart + pageSize, filteredAggregators.length)} of{" "}
            {filteredAggregators.length} users
          </p>
          <nav aria-label="Aggregator table pagination" className="flex items-center gap-[4px]">
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

      <Modal open={process} onOpenChange={setProcess}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <div className="space-y-[8px]">
              <p className="font-[700] text-[24px] text-[#04907E] text-center">
                Process Commission Payout — Obi & Co Field Team
              </p>

              <p className="font-[400] text-[16px] text-[#363636] text-center">
                Target met:{" "}
                <span className="font-[600] text-[16px] text-[#363636]">
                  50 new active accounts / month
                </span>
                (58/50)
              </p>
              <p className="font-[400] text-[16px] text-[#363636] text-center">
                Commission due:{" "}
                <span className="font-[600] text-[16px] text-[#363636]">₦1.84M</span>{" "}
              </p>
            </div>

            <p className="font-[400] text-[14px] text-[#04802E] ">
              Bonus earned: ₦400,000 + expanded onboarding rights (added OnionCrew eligibility)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <Button onClick={() => setProcess(false)} variant="secondary" children="Cancel" />
            <Button
              onClick={() => {
                (setProcess(false), setApprove(true));
              }}
              variant="primary"
              children="Confirm payout"
            />
          </div>
        </div>
      </Modal>

      <Modal open={approve} onOpenChange={setApprove}>
        <div className="space-y-[64px]">
          <div className="space-y-[24px]">
            <p className="font-[700] text-[24px] text-[#04907E] text-center">
              Approve Provens Agency?
            </p>

            <div className="space-y-[24px]">
              <Input label="Assigned region" placeholder="South-South" />

              <Select
                placeholder="Standard Tiered By Activation"
                options={[
                  {
                    value: "Standard Tiered By Activation",
                    label: "Standard Tiered By Activation",
                  },

                  {
                    value: "Enterprise - Flat + Volume Bonus",
                    label: "Enterprise - Flat + Volume Bonus",
                  },
                ]}
                label="Commission structure"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <Button variant="secondary" children="Cancel" />
            <Button variant="primary" children="Confirm payout" />
          </div>
        </div>
      </Modal>
    </>
  );
}
