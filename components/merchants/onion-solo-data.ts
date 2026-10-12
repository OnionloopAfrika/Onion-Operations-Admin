export type MerchantStatus = "Active" | "Pending Approval";

export interface OnionSoloMerchant {
  id: number;
  source: "OnionSolo";
  business: string;
  owner: string;
  feeRate: string;
  status: MerchantStatus;
  createdAt: number;
}

const sampleMerchants: Omit<OnionSoloMerchant, "id" | "createdAt">[] = [
  {
    source: "OnionSolo",
    business: "Joshua Akindele",
    owner: "Joshua Akindele",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Emeka Eze",
    owner: "Emeka Eze",
    feeRate: "1.5%",
    status: "Pending Approval",
  },
  {
    source: "OnionSolo",
    business: "Emeka Eze",
    owner: "Emeka Eze",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Chidinma Obi",
    owner: "Chidinma Obi",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Femi Adeyemi",
    owner: "Femi Adeyemi",
    feeRate: "1.5%",
    status: "Pending Approval",
  },
  {
    source: "OnionSolo",
    business: "Nkechi Uba",
    owner: "Nkechi Uba",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Nkechi Uba",
    owner: "Nkechi Uba",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Gbenga Olanrewaju",
    owner: "Gbenga Olanrewaju",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Adgeze Nwosu",
    owner: "Adgeze Nwosu",
    feeRate: "1.5%",
    status: "Active",
  },
  {
    source: "OnionSolo",
    business: "Emeka Eze",
    owner: "Emeka Eze",
    feeRate: "1.5%",
    status: "Active",
  },
];

export const onionSoloMerchants: OnionSoloMerchant[] = Array.from(
  { length: 128 },
  (_, index) => ({
    ...sampleMerchants[index % sampleMerchants.length],
    id: index + 1,
    createdAt: 128 - index,
  }),
);
