import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';
import { CalendarIcon, WrenchIcon, AlertTriangleIcon } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const upcomingMaintenanceCount = car.upcomingMaintenance.length;
  const urgentMaintenanceCount = car.upcomingMaintenance.filter(
    (task) => task.priority === 'high'
  ).length;

  return (
    <Link
      to={`/cars/${car.id}`}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">
            {car.year} {car.make} {car.model}
          </h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-gray-600">
            <span className="font-semibold">{car.mileage.toLocaleString()}</span> miles
          </div>
          <div className="text-gray-600">
            Owner: <span className="font-semibold">{car.owner}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-blue-600">
            <CalendarIcon size={16} />
            <span>
              Registration expires:{' '}
              {new Date(car.registration.expiryDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          {upcomingMaintenanceCount > 0 && (
            <div className="flex items-center gap-2 text-amber-600">
              <WrenchIcon size={16} />
              <span>{upcomingMaintenanceCount} upcoming tasks</span>
            </div>
          )}
          {urgentMaintenanceCount > 0 && (
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangleIcon size={16} />
              <span>{urgentMaintenanceCount} urgent</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}