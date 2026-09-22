export type AccountStatus = "Active" | "Inactive" | "Suspended";

export interface AggregatorItem {
  id: string;
  name: string;
  onboarded: string;
  commission: string;
  status: AccountStatus;
  lastActive: string;
}

export interface MerchantItem {
  id: string;
  business: string;
  tier: "OnionSolo" | "OnionCrew" | "OnionMega";
  volume: string;
  status: AccountStatus;
  lastActive: string;
}

export interface RevenueBreakdownItem {
  label: string;
  amount: string;
  isPositive: boolean;
  color?: string;
}

export interface RevenueGrowthData {
  chartData: { day: string; value: number }[];
  retentionText: string;
  revenueBreakdown: RevenueBreakdownItem[];
  netRevenue: string;
  aggregators: AggregatorItem[];
  merchants: MerchantItem[];
  onionCoinsText: string;
}

export type Status = "active" | "dormant" | "suspended";

export interface Merchant {
  id: string;
  business: string;
  tier: "OnionSolo" | "OnionCrew" | "OnionMega";
  volume: string;
  status: Status;
  lastActive: string;
}

export interface RevenueData {
  chartData: { day: string; value: number }[];
  retentionText: string;
  revenueBreakdown: RevenueBreakdownItem[];
  netRevenue: string;
  aggregators: AggregatorItem[];
  merchants: Merchant[];
  onionCoinsText: string;
}
