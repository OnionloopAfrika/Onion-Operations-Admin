export type AccountStatus = 'Pending' | 'Active';

export interface FlaggedAccount {
    id: string;
    name: string;
    reason: string;
    status: AccountStatus;
}

export interface RiskComplianceData {
    alert: {
        title: string;
        description: string;
    };
    flaggedCount: number;
    flaggedAccounts: FlaggedAccount[];
    regulatoryFiling: {
        daysLeft: number;
        description: string;
    };
    resolutionStats: {
        count: number;
        avgResolutionTime: string;
    };
    liquidityHealth: {
        percentage: number;
    };
}

export interface RiskComplianceProps {
    data?: RiskComplianceData;
    onViewDetails?: () => void;
}