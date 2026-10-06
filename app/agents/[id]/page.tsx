import React, { Suspense } from "react";
import AgentDetailsPage from "./agent-details-page";
import { Shell } from "@/components/shell";

export default function Page() {
  return (
    <Shell>
      <Suspense fallback="Loading Page........">
        <AgentDetailsPage />
      </Suspense>
    </Shell>
  );
}
