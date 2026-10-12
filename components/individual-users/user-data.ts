export type UserStatus = "Active" | "Dormant" | "Suspended";

export interface User {
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

export const initialUsers: User[] = Array.from({ length: 128 }, (_, index) => ({
  ...sampleUsers[index % sampleUsers.length],
  id: index + 1,
  dateJoined:
    index < sampleUsers.length
      ? "Feb 14, 2026"
      : `Feb ${String(14 - Math.floor(index / sampleUsers.length)).padStart(2, "0")}, 2026`,
}));
