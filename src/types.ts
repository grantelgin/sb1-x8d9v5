export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  image: string;
  mileage: number;
  marketValue: number;
  owner: string;
  insurance: Insurance;
  registration: Registration;
  maintenanceHistory: MaintenanceRecord[];
  upcomingMaintenance: MaintenanceTask[];
}

export interface Insurance {
  provider: string;
  policyNumber: string;
  expiryDate: string;
  coverage: string;
  monthlyPremium: number;
}

export interface Registration {
  expiryDate: string;
  state: string;
  number: string;
  lastRenewalDate: string;
  taxAmount: number;
}

export interface MaintenanceRecord {
  id: string;
  date: string;
  type: string;
  description: string;
  cost: number;
  mileage: number;
  serviceProvider: string;
  documents?: string[];
}

export interface MaintenanceTask {
  id: string;
  dueDate: string;
  type: string;
  description: string;
  estimatedCost: number;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'scheduled' | 'completed';
}