import React from 'react';
import { Home, ScanLine, Bell } from 'lucide-react';

interface BottomNavProps {
  onHome: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onHome }) => {
  return (
    <div className="bg-white border-t border-gray-200 h-16 flex items-center justify-around shadow-[0_-2px_4px_rgba(0,0,0,0.05)] sticky bottom-0 z-50">
      <button 
        onClick={onHome}
        className="flex flex-col items-center justify-center text-blue-500 w-1/3 h-full"
      >
        <Home className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-medium">Home</span>
      </button>
      
      <button className="flex flex-col items-center justify-center text-gray-400 w-1/3 h-full">
        <ScanLine className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-medium">Scan Attendance QR</span>
      </button>

      <button className="flex flex-col items-center justify-center text-gray-400 w-1/3 h-full">
        <Bell className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-medium">Notifications</span>
      </button>
    </div>
  );
};

export default BottomNav;