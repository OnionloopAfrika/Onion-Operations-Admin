export type ReportFormat = 'PDF' | 'XLSX' | 'CSV';

export interface ReportTemplateCard {
    id: string;
    title: string;
    description: string;
    format: ReportFormat;
}

export interface ScheduledReport {
    id: string;
    name: string;
    frequency: string;
    recipientEmail: string;
}

export interface ReportHistoryItem {
    id: string;
    reportName: string;
    format: ReportFormat;
    generatedBy: string;
    date: string;
    slug: string;
}