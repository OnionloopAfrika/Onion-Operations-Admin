import { Shell } from "@/components/shell";
import React, { Suspense } from "react";
import AggregatorsDetails from "../aggregators-details";

export default function page() {
  return (
    <Shell>
      <Suspense fallback="Loading Page.....">
        <AggregatorsDetails />
      </Suspense>
    </Shell>
  );
}
