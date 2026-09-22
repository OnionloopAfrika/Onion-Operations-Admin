export type SettingsTab = 'Profile' | 'Preferences' | 'Company';

export interface ProfileFormData {
    fullName: string;
    email: string;
    phone: string;
}

export interface PreferencesFormData {
    defaultLandingScreen: string;
    defaultDateRange: string;
    appearance: string;
}

export interface CompanyFormData {
    companyLegalName: string;
    customerSupportContact: string;
    businessHours: string;
}