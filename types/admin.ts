export type AdminStatus = 'Active' | 'Pending' | 'Suspended';

export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: string;
    access: string;
    status: AdminStatus;
    lastActive: string;
    initials: string;
    permissions: {
        transactions: boolean;
        reserves: boolean;
        reports: boolean;
        compliance: boolean;
    };
    activityLogs: {
        id: string;
        title: string;
        timestamp: string;
    }[];
}

export interface AuditLogItem {
    id: string;
    description: string;
    timestamp: string;
}