import React from 'react';
import { Search, Menu } from 'lucide-react';
import { DASHBOARD_ITEMS } from '../constants';

interface DashboardProps {
  onNavigateReport: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigateReport }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-[#3b82f6] text-white p-4 pb-8 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <Menu className="w-6 h-6" />
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src="https://play-lh.googleusercontent.com/8ff6EcyK9ep1af8ETdKQAZFs2JVnoiRugwY3GU4Sjhpp5o0zSo-jxslGIogFUrboCw=w480-h960-rw" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Welcome, Bhuvaneshwar</h1>
      </div>

      {/* Search Bar Container */}
      

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Frequently Used</h2>
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {DASHBOARD_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center"
              onClick={item.action ? onNavigateReport : undefined}
            >
              <div 
                className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-2 ${item.action ? 'cursor-pointer active:scale-95 transition-transform shadow-sm ring-2 ring-blue-100' : 'opacity-80'}`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-[10px] text-center text-gray-700 font-medium leading-tight px-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;