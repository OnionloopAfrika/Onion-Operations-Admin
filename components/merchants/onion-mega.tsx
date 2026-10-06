"use client";

import React, { useMemo, useState } from "react";
import { RightArrowIcon } from "../icons/svgs";
import { SearchInput } from "../ui/search-input";
import Select from "../ui/select";
import { Modal } from "../ui/modal";
import Button from "../ui/button";
import Input from "../ui/input";
import { useRouter } from "next/navigation";

type MerchantStatus = "Active" | "Pending Approval";

interface Merchant {
  id: number;
  source: "OnionMega";
  business: string;
  owner: string;
  staff: string;
  feeRate: string;
  status: MerchantStatus;
  createdAt: number;
  branches: string;
}

const sampleMerchants: Omit<Merchant, "id" | "createdAt">[] = [
  {
    source: "OnionMega",
    business: "Joshua Akindele",
    owner: "Joshua Akindele",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Emeka Eze",
    owner: "Emeka Eze",
    staff: "8",
    feeRate: "1.5%",
    status: "Pending Approval",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Emeka Eze",
    owner: "Emeka Eze",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Chidinma Obi",
    owner: "Chidinma Obi",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Femi Adeyemi",
    owner: "Femi Adeyemi",
    staff: "8",
    feeRate: "1.5%",
    status: "Pending Approval",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Nkechi Uba",
    owner: "Nkechi Uba",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Nkechi Uba",
    owner: "Nkechi Uba",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Gbenga Olanrewaju",
    owner: "Gbenga Olanrewaju",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Adgeze Nwosu",
    owner: "Adgeze Nwosu",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
  {
    source: "OnionMega",
    business: "Emeka Eze",
    owner: "Emeka Eze",
    staff: "8",
    feeRate: "1.5%",
    status: "Active",
    branches: "3",
  },
];

const merchants: Merchant[] = Array.from({ length: 128 }, (_, index) => ({
  ...sampleMerchants[index % sampleMerchants.length],
  id: index + 1,
  createdAt: 128 - index,
}));

const pageSize = 10;

export default function OnionMega() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [openApprove, setOpenApprove] = useState(false);
  const [approve, setApprove] = useState(false);

  const filteredMerchants = useMemo(() => {
    const query = search.trim().toLowerCase();

    return merchants
      .filter((merchant) => `${merchant.business} ${merchant.owner}`.toLowerCase().includes(query))
      .filter(
        (merchant) => statusFilter === "all" || merchant.status.toLowerCase() === statusFilter,
      )
      .sort((first, second) =>
        sortOrder === "latest"
          ? second.createdAt - first.createdAt
          : first.createdAt - second.createdAt,
      );
  }, [search, statusFilter, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredMerchants.length / pageSize));
  const pageStart = (currentPage - 1) * pageSize;
  const visibleMerchants = filteredMerchants.slice(pageStart, pageStart + pageSize);
  const pageItems: (number | "ellipsis")[] =
    pageCount <= 5
      ? Array.from({ length: pageCount }, (_, index) => index + 1)
      : currentPage <= 3
        ? [1, 2, 3, 4, "ellipsis", pageCount]
        : currentPage >= pageCount - 2
          ? [1, "ellipsis", pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
          : [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", pageCount];

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), pageCount));
  };

  const updateFilter = (update: () => void) => {
    update();
    setCurrentPage(1);
  };

  return (
    <>
      <section className="w-full overflow-hidden rounded-[4px] border border-[#E5E5E5] bg-white">
        <div className="flex flex-wrap items-center gap-[8px] border-b border-[#E5E5E5] p-[16px] sm:p-[18px]">
          <div className="w-full max-w-[288px]">
            <SearchInput
              categories={[]}
              className="!h-[38px] !rounded-[6px] !border-[#D6D6D6] !bg-white !pl-[34px] !pr-[10px] !text-[11px]"
              value={search}
              onChange={(value) => updateFilter(() => setSearch(value))}
              placeholder="Search by name, phone number..."
            />
          </div>

          <div className="w-fit min-w-[150px]">
            <Select
              options={[
                { value: "all", label: "Status: Active" },
                { value: "active", label: "Active" },
                { value: "pending approval", label: "Pending Approval" },
              ]}
              value={statusFilter}
              onValueChange={(value) => updateFilter(() => setStatusFilter(value))}
              className="!h-[38px] !whitespace-nowrap !rounded-[6px] !border-[#D6D6D6] !bg-white !p-[12px] !pr-[30px] !font-normal !text-[11px] !text-[#687992]"
            />
          </div>

          <div className="w-fit min-w-[100px]">
            <Select
              options={[
                { value: "latest", label: "Latest" },
                { value: "oldest", label: "Oldest" },
              ]}
              value={sortOrder}
              onValueChange={(value) => updateFilter(() => setSortOrder(value))}
              className="!h-[38px] !rounded-[6px] !border-[#D6D6D6] !bg-white !p-[12px] !pr-[28px] !font-normal !text-[11px] !text-[#687992]"
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[920px] table-fixed border-collapse text-left text-[11px] text-[#6C6C6C]">
            <colgroup>
              <col className="w-[22%]" />
              <col className="w-[22%]" />
              <col className="w-[12%]" />
              <col className="w-[9%]" />
              <col className="w-[11%]" />
              <col className="w-[17%]" />
              <col className="w-[7%]" />
            </colgroup>
            <thead className="bg-[#F7F7F7] text-[12px] font-[600] text-[#6C6C6C]">
              <tr className="h-[62px] border-b border-[#D2D2D2]">
                <th className="px-[12px]" scope="col">
                  Business
                </th>
                <th className="px-[12px]" scope="col">
                  Owner
                </th>
                <th className="px-[12px]" scope="col">
                  Branches
                </th>
                <th className="px-[12px]" scope="col">
                  Staff
                </th>
                <th className="px-[12px]" scope="col">
                  Fee Rate
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
              {visibleMerchants.map((merchant) => (
                <tr
                  onClick={() => merchant.status === "Pending Approval" && setOpenApprove(true)}
                  key={merchant.id}
                  className="h-[62px] border-b border-[#D2D2D2] last:border-b-0 cursor-pointer"
                >
                  <td className="whitespace-nowrap px-[12px]">{merchant.business}</td>
                  <td className="whitespace-nowrap px-[12px]">{merchant.owner}</td>
                  <td className="whitespace-nowrap px-[12px]">{merchant.branches}</td>
                  <td className="whitespace-nowrap px-[12px]">{merchant.staff}</td>
                  <td className="whitespace-nowrap px-[12px]">{merchant.feeRate}</td>
                  <td className="px-[12px]">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-[10px] py-[5px] text-[10px] font-[500] ${
                        merchant.status === "Active"
                          ? "bg-[#E7F6EC] text-[#078132]"
                          : "bg-[#FFF4E2] text-[#C57900]"
                      }`}
                    >
                      {merchant.status}
                    </span>
                  </td>
                  <td className="px-[12px] text-center">
                    <button
                      onClick={() =>
                        router.push(`/merchants/${merchant.id}?source=${merchant.source}`)
                      }
                      type="button"
                      aria-label={`View ${merchant.business}`}
                      className="inline-flex items-center justify-center text-[#8A8A8A] cursor-pointer"
                    >
                      <RightArrowIcon size={20} color="#8A8A8A" />
                    </button>
                  </td>
                </tr>
              ))}
              {visibleMerchants.length === 0 && (
                <tr>
                  <td className="h-[100px] text-center" colSpan={7}>
                    No merchants match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-[12px]  px-[16px] py-[8px] text-[12px] text-[#A7A7A7]">
          <p>
            Showing {filteredMerchants.length === 0 ? 0 : pageStart + 1} to{" "}
            {Math.min(pageStart + pageSize, filteredMerchants.length)} of {filteredMerchants.length}{" "}
            users
          </p>
          <nav aria-label="Merchant table pagination" className="flex items-center gap-[4px]">
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

      <Modal open={openApprove} onOpenChange={setOpenApprove}>
        <div className="space-y-[48px]">
          <div className="space-y-[24px]">
            <p className="text-center font-[700] text-[24px] text-[#04907E]">
              Approve Buchi Phone Repairs?
            </p>

            <div className="space-y-[16px]">
              <Input label="Assigned fee tier" placeholder="1.3%" />
              <p className="font-[500] text-[12px] text-[#8A8A8A]">
                This fee is what Onionloop charges the merchant per transaction — merchants do not
                receive any payout.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <Button onClick={() => setOpenApprove(false)} variant="secondary" children="Cancel" />
            <Button onClick={() => setOpenApprove(false)} variant="primary" children="Approve" />
          </div>
        </div>
      </Modal>
    </>
  );
}
