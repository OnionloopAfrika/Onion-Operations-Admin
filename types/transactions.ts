export type TransactionStatus = 'Completed' | 'Pending' | 'Failed' | 'Flagged';

export interface TransactionRecord {
    id: string;
    type: string;
    from: string;
    to: string;
    amount: string;
    channel: string;
    status: TransactionStatus;
    date?: string;
    flag?: string;
}

export interface TimelineStep {
    step: number;
    title: string;
}