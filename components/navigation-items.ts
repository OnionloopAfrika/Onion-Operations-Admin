import { NavItem } from "@/types/types";
import { DashboardIcon, UsersIcon, ReportsIcon } from "./icons/svgs";
import { KycOnboardingIcon } from "./icons/kyc-onboarding";
import { DisputesEscalationsIcon } from "./icons/disputes-escalations";
import { IndividualUsersIcon } from "./icons/individual-users";
import { AgentsIcon } from "./icons/agents";
import { AggregatorsIcon } from "./icons/aggregators";
import { FeeCommissionIcon } from "./icons/fee-commission";
import { AuditLogIcon } from "./icons/audit-log";

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
    section: "Overview",
  },
  {
    id: "kyc-onboarding",
    label: "KYC & Onboarding",
    href: "/kyc-onboarding",
    icon: KycOnboardingIcon,
    section: "Operations",
  },
  {
    id: "disputes-escalations",
    label: "Disputes & Escalations",
    href: "/disputes-escalations",
    icon: DisputesEscalationsIcon,
    section: "Operations",
  },
  {
    id: "individual-users",
    label: "Individual Users",
    href: "/individual-users",
    icon: IndividualUsersIcon,
    section: "Network",
  },
  {
    id: "merchants",
    label: "Merchants",
    href: "/merchants",
    icon: UsersIcon,
    section: "Network",
  },
  {
    id: "agents",
    label: "Agents",
    href: "/agents",
    icon: AgentsIcon,
    section: "Network",
  },
  {
    id: "aggregators",
    label: "Aggregators",
    href: "/aggregators",
    icon: AggregatorsIcon,
    section: "Network",
  },
  {
    id: "fee-commission",
    label: "Fee & Commission",
    href: "/fee-commission",
    icon: FeeCommissionIcon,
    section: "Configuration",
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: ReportsIcon,
    section: "Systems",
  },
  {
    id: "audit-log",
    label: "Audit Log",
    href: "/audit-log",
    icon: AuditLogIcon,
    section: "Systems",
  },
];
