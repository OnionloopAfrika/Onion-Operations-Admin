import { Shell } from "@/components/shell";
import React, { Suspense } from "react";
import ReportsDetails from "./reports-details";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <Shell>
      <Suspense fallback="Loading Page......">
        <ReportsDetails reportId={id} />
      </Suspense>
    </Shell>
  );
}
