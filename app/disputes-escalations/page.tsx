import DisputeTable from "@/components/dispute-and-escalation/dispute-table";
import { Shell } from "@/components/shell";
import PageHeader from "@/components/ui/page-header";

export default function DisputesEscalationsPage() {
  return (
    <Shell>
      <PageHeader
        title="Disputes & Escalations"
        subtitle="Track, assign, and resolve operational disputes and escalations efficiently."
      />

      <DisputeTable />
    </Shell>
  );
}
