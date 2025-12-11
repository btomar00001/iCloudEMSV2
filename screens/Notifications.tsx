import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotificationsProps {
  onBack: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-[#4c9eeb] p-4 flex items-center shadow-md sticky top-0 z-20">
        <button 
          onClick={onBack} 
          className="mr-4 text-white hover:bg-white/10 rounded-full p-1 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[20px] font-semibold text-white flex-1 text-center pr-10">Notifications</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <p className="text-[#555] text-[15px] font-normal text-center leading-relaxed">
          You have no notifications at the moment.
        </p>
      </div>
    </div>
  );
};

export default Notifications;