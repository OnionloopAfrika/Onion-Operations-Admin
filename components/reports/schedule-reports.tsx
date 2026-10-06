"use client";

import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../icons/svgs";
import Button from "../ui/button";
import Input from "../ui/input";
import { Modal } from "../ui/modal";
import Select from "../ui/select";

const SCHEDULED_REPORTS = [
  {
    title: "Daily Ops Summary",
    details: "Weekly. Mon 8am-adaeze.ceo@onionloop.afrika",
  },
  {
    title: "KYC Approval Log Summary",
    details: "Monthly. adaeze.ceo@onionloop.afrika",
  },
];

export default function ScheduleReports() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [reportTemplate, setReportTemplate] = useState("executive-summary");
  const [frequency, setFrequency] = useState("");

  return (
    <section className="space-y-[24px] rounded-[12px] border border-[#E5E7EB] bg-white p-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex flex-wrap items-start justify-between gap-[16px]">
        <div className="space-y-[16px]">
          <h2 className="font-[600] text-[16px] text-[#131313]">Scheduled Reports</h2>
          <p className="font-[400] text-[12px] text-[#6C6C6C]">
            These reports generate automatically and are emailed to the listed recipient below
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsScheduleModalOpen(true)}
          className="inline-flex h-[40px] items-center gap-[12px] rounded-[8px] bg-[#00574D] px-[16px] font-[500] text-[14px] text-white"
        >
          <span aria-hidden="true" className="text-[20px] leading-none">
            +
          </span>
          Schedule recurring report
        </button>
      </div>

      <div>
        {SCHEDULED_REPORTS.map((report) => (
          <div
            key={report.title}
            className="flex min-h-[62px] items-center justify-between gap-[16px] border-b border-[#C7C7C7] py-[12px] last:border-b-0 last:pb-0 max-lg:flex-col"
          >
            <p className="min-w-0 font-[400] text-[14px] text-[#6C6C6C]">
              <span className="font-[500] text-[#131313]">{report.title}</span>
              {" - "}
              {report.details}
            </p>

            <div className="flex shrink-0 items-center gap-[20px]">
              <button
                type="button"
                aria-label={`Edit ${report.title} schedule`}
                className="text-[22px] leading-none text-[#04907E]"
              >
                <EditIcon color="#04907E" />
              </button>
              <button
                type="button"
                aria-label={`Delete ${report.title} schedule`}
                className="text-[#CB1A14]"
              >
                <TrashIcon className="h-[24px] w-[24px]" color="#CB1A14" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={isScheduleModalOpen}
        onOpenChange={setIsScheduleModalOpen}
        size="lg"
        className="!max-w-[810px]"
      >
        <div className="space-y-[28px]">
          <div className="space-y-[12px] text-center">
            <h2 className="font-[600] text-[24px] text-[#131313]">Schedule Report</h2>
            <p className="mx-auto max-w-[470px] font-[400] text-[16px] leading-[24px] text-[#333333]">
              This will run automatically on a repeating schedule and emails the report to the
              recipient(s) below
            </p>
          </div>

          <div className="space-y-[32px]">
            <Select
              label="Report template"
              value={reportTemplate}
              onValueChange={setReportTemplate}
              options={[
                { value: "executive-summary", label: "Executive Summary" },
                { value: "daily-ops-summary", label: "Daily Ops Summary" },
                { value: "kyc-approval-log", label: "KYC Approval Log" },
                { value: "merchant-onboarding", label: "Merchant Onboarding Report" },
                { value: "agent-float-payout", label: "Agent Float & Payout Report" },
                { value: "aggregator-commission", label: "Aggregator Commission Report" },
                { value: "dispute-resolution", label: "Dispute Resolution Log" },
              ]}
            />

            <Select
              label="Frequency"
              placeholder="Select date"
              value={frequency}
              onValueChange={setFrequency}
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
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "monthly", label: "Monthly" },
              ]}
            />

            <Input label="Recipient email" type="email" placeholder="adaeze.ceo@onionloop.afrika" />
          </div>

          <div className="grid grid-cols-2 gap-[16px] pt-[16px]">
            <Button
              onClick={() => setIsScheduleModalOpen(false)}
              variant="secondary"
              size="md"
              className="h-[52px] bg-[#F7F7F7] text-[#6C6C6C]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsScheduleModalOpen(false)}
              variant="primary"
              size="md"
              className="h-[52px] bg-[#00574D]"
            >
              Save schedule
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
