export type NotificationCategory = 'All' | 'Risk' | 'Finance' | 'Operations' | 'Support' | 'System';

export interface NotificationItem {
    id: string;
    title: string;
    category: Exclude<NotificationCategory, 'All'>;
    timestamp: string;
    dotColor: string;
}