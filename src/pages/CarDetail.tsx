import React from 'react';
import { useParams } from 'react-router-dom';
import { cars } from '../data/mockData';
import MaintenanceTimeline from '../components/MaintenanceTimeline';
import {
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
  ShieldIcon,
  CarIcon,
  AlertTriangleIcon,
  WrenchIcon,
} from 'lucide-react';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img
              src={car.image}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl font-bold text-white">
                {car.year} {car.make} {car.model}
              </h1>
              <p className="text-white/80 mt-2">Owned by {car.owner}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <CarIcon size={20} />
                <h3 className="font-semibold">Vehicle Info</h3>
              </div>
              <p className="text-sm text-gray-600">VIN: {car.vin}</p>
              <p className="text-sm text-gray-600">
                Mileage: {car.mileage.toLocaleString()} miles
              </p>
              <p className="text-sm text-gray-600">
                Market Value: ${car.marketValue.toLocaleString()}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <ShieldIcon size={20} />
                <h3 className="font-semibold">Insurance</h3>
              </div>
              <p className="text-sm text-gray-600">
                Provider: {car.insurance.provider}
              </p>
              <p className="text-sm text-gray-600">
                Policy: {car.insurance.policyNumber}
              </p>
              <p className="text-sm text-gray-600">
                Premium: ${car.insurance.monthlyPremium}/month
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FileTextIcon size={20} />
                <h3 className="font-semibold">Registration</h3>
              </div>
              <p className="text-sm text-gray-600">
                State: {car.registration.state}
              </p>
              <p className="text-sm text-gray-600">
                Number: {car.registration.number}
              </p>
              <p className="text-sm text-gray-600">
                Expires: {new Date(car.registration.expiryDate).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <DollarSignIcon size={20} />
                <h3 className="font-semibold">Tax & Fees</h3>
              </div>
              <p className="text-sm text-gray-600">
                Annual Tax: ${car.registration.taxAmount}
              </p>
              <p className="text-sm text-gray-600">
                Last Renewal: {new Date(car.registration.lastRenewalDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Maintenance Timeline</h2>
          <MaintenanceTimeline
            history={car.maintenanceHistory}
            upcoming={car.upcomingMaintenance}
          />
        </div>
      </div>
    </div>
  );
}