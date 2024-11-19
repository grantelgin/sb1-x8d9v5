import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'RAV4',
    year: 2020,
    vin: '1HGCM82633A123456',
    image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=800',
    mileage: 45000,
    marketValue: 25000,
    owner: 'Sarah Johnson',
    insurance: {
      provider: 'State Farm',
      policyNumber: 'SF123456789',
      expiryDate: '2024-12-31',
      coverage: 'Full Coverage',
      monthlyPremium: 125
    },
    registration: {
      expiryDate: '2024-09-30',
      state: 'CA',
      number: '8ABC123',
      lastRenewalDate: '2023-09-30',
      taxAmount: 350
    },
    maintenanceHistory: [
      {
        id: 'mh1',
        date: '2024-01-15',
        type: 'Oil Change',
        description: 'Regular oil change and filter replacement',
        cost: 75,
        mileage: 42000,
        serviceProvider: 'Toyota Service Center'
      },
      {
        id: 'mh2',
        date: '2023-11-20',
        type: 'Tire Rotation',
        description: 'Rotation and balance of all tires',
        cost: 50,
        mileage: 40000,
        serviceProvider: 'Discount Tire'
      }
    ],
    upcomingMaintenance: [
      {
        id: 'um1',
        dueDate: '2024-04-15',
        type: 'Brake Inspection',
        description: 'Regular brake system inspection',
        estimatedCost: 100,
        priority: 'medium',
        status: 'scheduled'
      }
    ]
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    vin: '2HGES167X9H123456',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800',
    mileage: 62000,
    marketValue: 18000,
    owner: 'Mike Johnson',
    insurance: {
      provider: 'Geico',
      policyNumber: 'GC987654321',
      expiryDate: '2024-11-30',
      coverage: 'Full Coverage',
      monthlyPremium: 110
    },
    registration: {
      expiryDate: '2024-08-31',
      state: 'CA',
      number: '7XYZ789',
      lastRenewalDate: '2023-08-31',
      taxAmount: 280
    },
    maintenanceHistory: [
      {
        id: 'mh3',
        date: '2024-02-01',
        type: 'Air Filter',
        description: 'Air filter replacement',
        cost: 45,
        mileage: 60000,
        serviceProvider: 'Honda Service'
      }
    ],
    upcomingMaintenance: [
      {
        id: 'um2',
        dueDate: '2024-05-01',
        type: 'Oil Change',
        description: 'Regular oil change due',
        estimatedCost: 75,
        priority: 'high',
        status: 'pending'
      }
    ]
  }
];