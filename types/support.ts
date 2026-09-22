export type SupportStatus = 'Pending' | 'Active' | 'Suspended';
export type SupportTab = 'All' | 'Open' | 'In Progress' | 'Escalated' | 'Resolved';
export type TicketPriority = 'High' | 'Medium' | 'Urgent' | 'Low';

export interface SupportThreadMessage {
    id: string;
    sender: string;
    message: string;
    timestamp: string;
}

export interface SupportTicket {
    id: string;
    subject: string;
    customer: string;
    category: string;
    priority: TicketPriority;
    assignee: string;
    status: SupportStatus;
    openedAt?: string;
    tabCategory: 'Open' | 'In Progress' | 'Escalated' | 'Resolved';
    threads: SupportThreadMessage[];
}

export interface RecurringIssue {
    id: string;
    title: string;
    ticketCount: number;
}