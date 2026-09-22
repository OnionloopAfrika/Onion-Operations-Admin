import React from "react";
import { IconProps } from "@/components/icons/svgs";

export type TimeRange = "Today" | "7D" | "30D";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<IconProps>;
  section: string;
}

export interface UserProfile {
  name: string;
  role: string;
  initials: string;
}
