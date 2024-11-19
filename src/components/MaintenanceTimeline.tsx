import React from 'react';
import { MaintenanceRecord, MaintenanceTask } from '../types';
import { format } from 'date-fns';
import { WrenchIcon, AlertTriangleIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';

interface TimelineProps {
  history: MaintenanceRecord[];
  upcoming: MaintenanceTask[];
}

export default function MaintenanceTimeline({ history, upcoming }: TimelineProps) {
  const allEvents = [
    ...history.map((record) => ({
      ...record,
      type: 'history',
      date: new Date(record.date),
    })),
    ...upcoming.map((task) => ({
      ...task,
      type: 'upcoming',
      date: new Date(task.dueDate),
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      
      {allEvents.map((event, index) => (
        <div key={index} className="relative pl-12 pb-8">
          <div className="absolute left-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
            {event.type === 'history' ? (
              <CheckCircleIcon size={14} className="text-green-500" />
            ) : (
              <ClockIcon size={14} className="text-blue-500" />
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {'priority' in event ? (
                  <AlertTriangleIcon
                    size={16}
                    className={
                      event.priority === 'high'
                        ? 'text-red-500'
                        : event.priority === 'medium'
                        ? 'text-amber-500'
                        : 'text-blue-500'
                    }
                  />
                ) : (
                  <WrenchIcon size={16} className="text-gray-500" />
                )}
                <h4 className="font-semibold">{event.type === 'history' ? event.type : event.type}</h4>
              </div>
              <span className="text-sm text-gray-500">
                {format(event.date, 'MMM d, yyyy')}
              </span>
            </div>
            
            <p className="text-gray-600">{event.description}</p>
            
            {'cost' in event ? (
              <div className="mt-2 text-sm text-gray-500">
                Cost: ${event.cost} | Mileage: {event.mileage.toLocaleString()} miles
              </div>
            ) : (
              <div className="mt-2 text-sm text-gray-500">
                Estimated Cost: ${event.estimatedCost}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}