"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight, SearchIcon } from "../icons/svgs";
import Button from "../ui/button";
import Input from "../ui/input";
import { Modal } from "../ui/modal";
import Select from "../ui/select";
import { useRouter } from "next/navigation";

type ReportStatus = "Ready" | "Failed" | "Read";

type ReportHistoryItem = {
  report: string;
  generatedBy: string;
  date: string;
  dateValue: string;
  status: ReportStatus;
  business: string;
};

const REPORT_HISTORY: ReportHistoryItem[] = [
  {
    report: "Dispute Resolution Log (PDF)",
    generatedBy: "Adaeze Chukwu",
    date: "May 19,2026 at 09:15am",
    dateValue: "2026-05-19",
    status: "Ready",
    business: "OnionSolo",
  },
  {
    report: "Aggregator Commission Report (XLSX)",
    generatedBy: "Ifeoma Blessing",
    date: "May 19,2026 at 09:15am",
    dateValue: "2026-05-19",
    status: "Ready",
    business: "OnionMega",
  },
  {
    report: "Merchant Onboarding Report (CSV)",
    generatedBy: "Tayo Olajidi",
    date: "May 19,2026 at 09:15am",
    dateValue: "2026-05-19",
    status: "Failed",
    business: "OnionSolo",
  },
  {
    report: "KYC Approval Log (CSV)",
    generatedBy: "Tayo Olajidi",
    date: "May 19,2026 at 09:15am",
    dateValue: "2026-05-19",
    status: "Failed",
    business: "OnionCrew",
  },
  {
    report: "Agent Float & Payout Report (CSV)",
    generatedBy: "Tayo Olajidi",
    date: "May 19,2026 at 09:15am",
    dateValue: "2026-05-19",
    status: "Read",
    business: "OnionCrew",
  },
  {
    report: "Daily Ops Summary (CSV)",
    generatedBy: "Tayo Olajidi",
    date: "May 19,2026 at 09:15am",
    dateValue: "2026-05-19",
    status: "Failed",
    business: "OnionMega",
  },
];

const STATUS_STYLES: Record<ReportStatus, string> = {
  Ready: "bg-[#E7F6EC] text-[#008A3A]",
  Failed: "bg-[#FBEAE9] text-[#CB1A14]",
  Read: "bg-[#E7F6EC] text-[#008A3A]",
};

export default function ReportHistory() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [business, setBusiness] = useState("all");
  const [date, setDate] = useState("");
  const [selectedReport, setSelectedReport] = useState<ReportHistoryItem | null>(null);
  const [reportDateRange, setReportDateRange] = useState("");
  const [reportFormat, setReportFormat] = useState("");
  const [segment, setSegment] = useState("all");

  const filteredReports = useMemo(
    () =>
      REPORT_HISTORY.filter((item) => {
        const normalizedQuery = query.trim().toLowerCase();
        const matchesQuery =
          !normalizedQuery ||
          `${item.report} ${item.generatedBy} ${item.business}`
            .toLowerCase()
            .includes(normalizedQuery);
        const matchesStatus = status === "all" || item.status.toLowerCase() === status;
        const matchesBusiness = business === "all" || item.business === business;
        const matchesDate = !date || item.dateValue === date;

        return matchesQuery && matchesStatus && matchesBusiness && matchesDate;
      }),
    [business, date, query, status],
  );

  return (
    <section className="overflow-hidden rounded-[12px] border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="space-y-[32px] p-[24px]">
        <div className="space-y-[8px]">
          <h2 className="font-[600] text-[16px] text-[#131313]">Report History</h2>
          <p className="font-[400] text-[12px] text-[#6C6C6C]">
            Click to preview a report before downloading
          </p>
        </div>

        <div className="flex flex-nowrap items-center gap-[8px] max-lg:grid max-lg:grid-cols-1">
          <div className="max-w-[372px] shrink-0">
            <Input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search TXN ID, customer name, type, Amount"
              prefixicon={<SearchIcon color="#8A8A8A" />}
              className="rounded-[8px] border-[#E5E7EB] bg-[#F7F7F7] shadow-[0_4px_12px_rgb(0,0,0,0.04)] placeholder:text-[14px] placeholder:text-[#8A8A8A]"
            />
          </div>

          <div className="w-[188px] max-lg:w-full  shrink-0">
            <Select
              value={status}
              onValueChange={setStatus}
              options={[
                { value: "all", label: "Status: Successful" },
                { value: "ready", label: "Ready" },
                { value: "failed", label: "Failed" },
                { value: "read", label: "Read" },
              ]}
              className="w-full min-w-0 rounded-[6px] bg-white"
            />
          </div>

          <div className="w-[160px] max-lg:w-full shrink-0">
            <Select
              value={business}
              onValueChange={setBusiness}
              options={[
                { value: "all", label: "All Businesses" },
                { value: "OnionSolo", label: "OnionSolo" },
                { value: "OnionCrew", label: "OnionCrew" },
                { value: "OnionMega", label: "OnionMega" },
              ]}
              className="w-full min-w-0 rounded-[6px] bg-white"
            />
          </div>

          <div className="w-[160px] max-lg:w-full shrink-0">
            <Input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              aria-label="Filter by date"
              className="w-[148px] shrink-0 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px] table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[28%]" />
            <col className="w-[17%]" />
            <col className="w-[19%]" />
            <col className="w-[18%]" />
            <col className="w-[18%]" />
          </colgroup>
          <thead>
            <tr className="h-[80px] border-y border-[#D6D6D6] bg-[#F7F7F7] text-[14px] font-[600] text-[#6C6C6C]">
              <th className="px-[24px]" scope="col">
                Report
              </th>
              <th className="px-[12px]" scope="col">
                Generated by
              </th>
              <th className="px-[12px]" scope="col">
                Date
              </th>
              <th className="px-[12px]" scope="col">
                Status
              </th>
              <th className="px-[24px]" scope="col" aria-label="Preview" />
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((item) => (
              <tr
                key={item.report}
                onClick={() => {
                  setSelectedReport(item);
                  setReportDateRange("");
                  setReportFormat(item.report.match(/\(([^)]+)\)$/)?.[1] ?? "");
                  setSegment("all");
                }}
                className="h-[82px] cursor-pointer border-b border-[#C7C7C7] text-[14px] text-[#6C6C6C] last:border-b-0 hover:bg-[#FCFCFC]"
              >
                <td className="px-[24px]">{item.report}</td>
                <td className="px-[12px]">{item.generatedBy}</td>
                <td className="px-[12px]">{item.date}</td>
                <td className="px-[12px]">
                  <span
                    className={`inline-flex min-w-[105px] items-center justify-center rounded-full px-[16px] py-[6px] font-[500] ${STATUS_STYLES[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-[24px] text-right">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      const reportSlug = item.report
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");
                      router.push(`/reports/${reportSlug}`);
                    }}
                    className="inline-flex items-center gap-[8px] whitespace-nowrap font-[500] text-[#04907E]"
                  >
                    Preview <ArrowRight color="#04907E" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredReports.length === 0 && (
              <tr>
                <td colSpan={5} className="h-[100px] text-center text-[14px] text-[#6C6C6C]">
                  No reports match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        open={selectedReport !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedReport(null);
        }}
        size="lg"
        className="!max-w-[810px]"
      >
        {selectedReport && (
          <div className="space-y-[32px]">
            <div className="space-y-[16px] text-center">
              <h2 className="font-[600] text-[24px] text-[#131313]">{selectedReport.report}</h2>
              <p className="font-[400] text-[16px] text-[#333333]">
                The result will be added to the report history for you to preview and download
              </p>
            </div>

            <div className="space-y-[32px]">
              <Select
                label="Date range"
                placeholder="Select date"
                value={reportDateRange}
                onValueChange={setReportDateRange}
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.5"
                      y="4"
                      width="15"
                      height="13.5"
                      rx="2"
                      stroke="#8A8A8A"
                      strokeWidth="1.5"
                    />
                    <path d="M6 2.5V5.5M14 2.5V5.5M2.5 8H17.5" stroke="#8A8A8A" strokeWidth="1.5" />
                    <path
                      d="M6 11H6.01M10 11H10.01M14 11H14.01M6 14H6.01M10 14H10.01"
                      stroke="#8A8A8A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                options={[
                  { value: "today", label: "Today" },
                  { value: "last-7-days", label: "Last 7 days" },
                  { value: "last-30-days", label: "Last 30 days" },
                  { value: "this-month", label: "This month" },
                  { value: "custom", label: "Custom date range" },
                ]}
              />

              <Select
                label="Format"
                value={reportFormat}
                onValueChange={setReportFormat}
                options={[
                  { value: "PDF", label: "PDF" },
                  { value: "CSV", label: "CSV" },
                  { value: "XLSX", label: "XLSX" },
                ]}
              />

              <Select
                label="Segment filter"
                value={segment}
                onValueChange={setSegment}
                options={[
                  { value: "all", label: "All segments" },
                  { value: "onion-solo", label: "OnionSolo" },
                  { value: "onion-crew", label: "OnionCrew" },
                  { value: "onion-mega", label: "OnionMega" },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              <Button
                onClick={() => setSelectedReport(null)}
                variant="secondary"
                size="md"
                className="h-[52px] bg-[#F7F7F7] text-[#6C6C6C]"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setSelectedReport(null)}
                variant="primary"
                size="md"
                className="h-[52px] bg-[#00574D]"
              >
                Generate
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
