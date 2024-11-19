import React, { useState } from 'react';
import { cars } from '../data/mockData';
import CarCard from '../components/CarCard';
import AddVehicleModal from '../components/AddVehicleModal';
import { CarIcon, WrenchIcon } from 'lucide-react';

export default function Dashboard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddVehicle = (vehicleData: any) => {
    // In a real app, this would make an API call to add the vehicle
    console.log('Adding vehicle:', vehicleData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Family Fleet Manager</h1>
            <p className="text-gray-600 mt-2">Keep track of all your vehicles in one place</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CarIcon size={20} />
              Add Vehicle
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <WrenchIcon size={20} />
              Log Maintenance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      <AddVehicleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddVehicle}
      />
    </div>
  );
}