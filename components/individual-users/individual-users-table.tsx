"use client";

import React, { useMemo, useState } from "react";
import { SearchInput } from "../ui/search-input";
import Select from "../ui/select";
import { useRouter } from "next/navigation";

type UserStatus = "Active" | "Dormant" | "Suspended";

interface User {
  id: number;
  name: string;
  kycLevel: "TIER 1" | "TIER 2" | "TIER 3" | "Pending";
  phoneNumber: string;
  flags: number;
  dateJoined: string;
  status: UserStatus;
}

const sampleUsers: Omit<User, "id">[] = [
  {
    name: "Joshua Akindele",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Emeka Eze",
    kycLevel: "Pending",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Dormant",
  },
  {
    name: "Emeka Eze",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 4,
    dateJoined: "Feb 14, 2026",
    status: "Suspended",
  },
  {
    name: "Chidinma Obi",
    kycLevel: "TIER 2",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Femi Adeyemi",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Nkechi Uba",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Nkechi Uba",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Gbenga Olanrewaju",
    kycLevel: "TIER 1",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Adgeze Nwosu",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
  {
    name: "Emeka Eze",
    kycLevel: "TIER 3",
    phoneNumber: "0816 249 0242",
    flags: 0,
    dateJoined: "Feb 14, 2026",
    status: "Active",
  },
];

const initialUsers: User[] = Array.from({ length: 128 }, (_, index) => ({
  ...sampleUsers[index % sampleUsers.length],
  id: index + 1,
  dateJoined:
    index < sampleUsers.length
      ? "Feb 14, 2026"
      : `Feb ${String(14 - Math.floor(index / sampleUsers.length)).padStart(2, "0")}, 2026`,
}));

const statusStyles: Record<UserStatus, string> = {
  Active: "bg-[#E7F6EC] text-[#078132]",
  Dormant: "bg-[#ECECEC] text-[#666666]",
  Suspended: "bg-[#FCE9E8] text-[#D31812]",
};

const kycStyles: Record<User["kycLevel"], string> = {
  "TIER 1": "bg-[#B5E5C7] text-[#267446]",
  "TIER 2": "bg-[#B5E5C7] text-[#267446]",
  "TIER 3": "bg-[#B5E5C7] text-[#267446]",
  Pending: "bg-[#FFE3B0] text-[#B87300]",
};

export default function IndividualUsersTable() {
  const router = useRouter();

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return users
      .filter((user) => `${user.name} ${user.phoneNumber}`.toLowerCase().includes(query))
      .filter((user) => statusFilter === "all" || user.status.toLowerCase() === statusFilter)
      .sort((first, second) => {
        const firstDate = new Date(first.dateJoined).getTime();
        const secondDate = new Date(second.dateJoined).getTime();
        return sortOrder === "latest" ? secondDate - firstDate : firstDate - secondDate;
      });
  }, [users, search, statusFilter, sortOrder]);

  const pageCount = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const pageStart = (currentPage - 1) * pageSize;
  const visibleUsers = filteredUsers.slice(pageStart, pageStart + pageSize);
  const pageItems: (number | "ellipsis")[] =
    pageCount <= 6
      ? Array.from({ length: pageCount }, (_, index) => index + 1)
      : currentPage <= 3
        ? [1, 2, 3, 4, "ellipsis", pageCount]
        : currentPage >= pageCount - 2
          ? [1, "ellipsis", pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
          : [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", pageCount];

  const updateStatus = (userId: number, nextStatus: UserStatus) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) => (user.id === userId ? { ...user, status: nextStatus } : user)),
    );
  };

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), pageCount));
  };

  return (
    <section className="w-full overflow-hidden rounded-[4px] border border-[#E5E5E5] bg-white">
      <div className="flex flex-wrap items-center gap-[8px] border-b border-[#E5E5E5] p-[18px] max-lg:grid max-lg:grid-cols-1">
        <div className="w-full max-w-[288px] max-lg:max-w-full">
          <SearchInput
            categories={[]}
            value={search}
            onChange={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
            placeholder="Search by name, phone number..."
          />
        </div>

        <div className="w-[120px] max-lg:w-full">
          <Select
            options={[
              { value: "all", label: " Active" },
              { value: "active", label: " Active" },
              { value: "dormant", label: " Dormant" },
              { value: "suspended", label: " Suspended" },
            ]}
            value={statusFilter}
            onValueChange={(value) => {
              setStatusFilter(value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="w-[80px] max-lg:w-full">
          <Select
            options={[
              { value: "latest", label: "Latest" },
              { value: "oldest", label: "Oldest" },
            ]}
            value={sortOrder}
            onValueChange={(value) => {
              setSortOrder(value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[840px] table-fixed border-collapse text-left text-[11px] text-[#6C6C6C]">
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[15.5%]" />
            <col className="w-[14.5%]" />
            <col className="w-[8%]" />
            <col className="w-[15.5%]" />
            <col className="w-[16%]" />
            <col className="w-[15.5%]" />
          </colgroup>
          <thead className="bg-[#F7F7F7] text-[12px] font-[600] text-[#6C6C6C]">
            <tr className="h-[62px] border-b border-[#D2D2D2]">
              <th className="px-[12px]" scope="col">
                User
              </th>
              <th className="px-[12px]" scope="col">
                KYC Level
              </th>
              <th className="px-[12px]" scope="col">
                Phone Number
              </th>
              <th className="px-[12px]" scope="col">
                Flags
              </th>
              <th className="px-[12px]" scope="col">
                Date Joined
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
            {visibleUsers.map((user) => (
              <tr
                onClick={() => router.push(`/individual-users/${user.id}`)}
                key={user.id}
                className="h-[62px] border-b border-[#D2D2D2] last:border-b-0 cursor-pointer"
              >
                <td className="whitespace-nowrap px-[12px]">{user.name}</td>
                <td className="px-[12px]">
                  <span
                    className={`inline-flex rounded-full px-[8px] py-[4px] text-[9px] font-[600] ${kycStyles[user.kycLevel]}`}
                  >
                    {user.kycLevel}
                  </span>
                </td>
                <td className="whitespace-nowrap px-[12px]">{user.phoneNumber}</td>
                <td className={`px-[12px] ${user.flags > 0 ? "text-[#D31812]" : ""}`}>
                  {user.flags}
                </td>
                <td className="whitespace-nowrap px-[12px]">{user.dateJoined}</td>
                <td className="px-[12px]">
                  <span
                    className={`inline-flex rounded-full px-[10px] py-[5px] text-[10px] font-[500] ${statusStyles[user.status]}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-[12px] text-center">
                  <button
                    type="button"
                    onClick={() =>
                      updateStatus(user.id, user.status === "Suspended" ? "Active" : "Suspended")
                    }
                    className={`whitespace-nowrap font-[500] ${user.status === "Suspended" ? "text-[#04907E]" : "text-[#D31812]"}`}
                  >
                    {user.status === "Suspended" ? "Reactivate" : "Suspend"}
                  </button>
                </td>
              </tr>
            ))}
            {visibleUsers.length === 0 && (
              <tr>
                <td className="h-[100px] text-center" colSpan={7}>
                  No users match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-[12px]  px-[16px] py-[8px] text-[12px] text-[#A7A7A7]">
        <p>
          Showing {filteredUsers.length === 0 ? 0 : pageStart + 1} to{" "}
          {Math.min(pageStart + pageSize, filteredUsers.length)} of {filteredUsers.length} users
        </p>
        <nav aria-label="User table pagination" className="flex items-center gap-[4px]">
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
                className={`h-[36px] min-w-[36px] rounded-[6px] px-[10px] text-[12px] ${currentPage === page ? "bg-[#04907E] text-white" : "bg-white text-[#777777]"}`}
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
  );
}
