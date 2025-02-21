export interface DashboardFormData {
  metrics: {
    totalLicenses: number;
    activeUsers: number;
    complianceRate: number;
    costOptimization: number;
  };
  stakeholders: Array<{
    name: string;
    role: string;
    status: 'active' | 'inactive';
    priority: 'high' | 'medium' | 'low';
  }>;
}

export interface Organization {
  id?: string;
  name?: string;
  dashboardData?: DashboardFormData;
}

export interface Profile {
  organization?: Organization;
}
