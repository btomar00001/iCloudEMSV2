import React from 'react';
import { Home, ScanLine, Bell } from 'lucide-react';

interface BottomNavProps {
  onHome: () => void;
  onNotifications: () => void;
  onScan: () => void;
  currentScreen?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ onHome, onNotifications, onScan, currentScreen }) => {
  const isHome = currentScreen === 'DASHBOARD';
  const isNotifs = currentScreen === 'NOTIFICATIONS';
  const isScan = currentScreen === 'SCAN_ATTENDANCE';

  return (
    <div className="bg-white border-t border-gray-200 h-16 flex items-center justify-around shadow-[0_-2px_4px_rgba(0,0,0,0.05)] sticky bottom-0 z-50">
      <button 
        onClick={onHome}
        className={`flex flex-col items-center justify-center w-1/3 h-full ${isHome ? 'text-[#3b82f6]' : 'text-gray-400'}`}
      >
        <Home className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-medium">Home</span>
      </button>
      
      <button 
        onClick={onScan}
        className={`flex flex-col items-center justify-center w-1/3 h-full ${isScan ? 'text-[#3b82f6]' : 'text-gray-400'}`}
      >
        <ScanLine className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-medium">Scan Attendance QR</span>
      </button>

      <button 
        onClick={onNotifications}
        className={`flex flex-col items-center justify-center w-1/3 h-full ${isNotifs ? 'text-[#3b82f6]' : 'text-gray-400'}`}
      >
        <Bell className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-medium">Notifications</span>
      </button>
    </div>
  );
};

export default BottomNav;