import React, { useState } from 'react';
import { Search, Menu, Home, User, Lock, LogOut, ChevronRight, X } from 'lucide-react';
import { DASHBOARD_ITEMS, STUDENT_INFO } from '../constants';

interface DashboardProps {
  onNavigateReport: () => void;
}

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void; onNavigateReport: () => void }> = ({ isOpen, onClose, onNavigateReport }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="bg-[#4c9eeb] p-6 text-white pt-12 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
              <img 
                src={STUDENT_INFO.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">{STUDENT_INFO.name}</h2>
              <p className="text-blue-100 text-xs mt-1">{STUDENT_INFO.admno}</p>
            </div>
          </div>
          <div className="text-blue-50 text-xs opacity-90 leading-relaxed font-light">
            {STUDENT_INFO.program}
          </div>
        </div>

        {/* Drawer Menu */}
        <div className="flex-1 overflow-y-auto bg-white">
          <button className="w-full flex items-center px-6 py-4 hover:bg-gray-50 text-gray-700 transition-colors border-b border-gray-100" onClick={onClose}>
            <Home className="w-5 h-5 mr-4 text-gray-500" />
            <span className="font-medium text-sm">Home</span>
            <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
          </button>
          
          <button className="w-full flex items-center px-6 py-4 hover:bg-gray-50 text-gray-700 transition-colors border-b border-gray-100" onClick={onClose}>
            <User className="w-5 h-5 mr-4 text-gray-500" />
            <span className="font-medium text-sm">My Profile</span>
            <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
          </button>

          <div className="bg-gray-50 px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
            Academics
          </div>

          {/* Dynamic Menu Items from Dashboard */}
          {DASHBOARD_ITEMS.map((item) => (
            <button 
              key={item.id}
              className="w-full flex items-center px-6 py-3 hover:bg-blue-50 text-gray-700 transition-colors border-b border-gray-100"
              onClick={() => {
                onClose();
                if (item.action) onNavigateReport();
              }}
            >
              <item.icon className="w-5 h-5 mr-4 text-blue-500" />
              <span className="font-medium text-sm">{item.label}</span>
              <ChevronRight className="w-4 h-4 ml-auto text-gray-300" />
            </button>
          ))}
          
          <div className="bg-gray-50 px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 border-t mt-2">
            Settings
          </div>

          <button className="w-full flex items-center px-6 py-4 hover:bg-gray-50 text-gray-700 transition-colors border-b border-gray-100" onClick={onClose}>
            <Lock className="w-5 h-5 mr-4 text-gray-500" />
            <span className="font-medium text-sm">Change Password</span>
            <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
          </button>
          
          <button className="w-full flex items-center px-6 py-4 hover:bg-red-50 text-red-600 transition-colors mb-8" onClick={onClose}>
            <LogOut className="w-5 h-5 mr-4" />
            <span className="font-medium text-sm">Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ onNavigateReport }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        onNavigateReport={onNavigateReport}
      />

      {/* Top White Header Bar */}
      <div className="bg-white p-3 px-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className="w-7 h-7 text-gray-600" />
          </button>
          <div className="w-8 h-8 flex items-center justify-center">
             <img src="https://play-lh.googleusercontent.com/8ff6EcyK9ep1af8ETdKQAZFs2JVnoiRugwY3GU4Sjhpp5o0zSo-jxslGIogFUrboCw=w480-h960-rw" alt="iCloudEMS" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Blue Box - Rectangular (no radius) */}
      <div className="bg-[#4c9eeb] px-5 pt-4 pb-20">
        <h1 className="text-2xl font-bold leading-tight text-white mb-5">Welcome, Bhuvaneshwar</h1>
        
        {/* Search Bar inside Blue Box */}
        <div className="bg-white rounded-xl shadow-sm p-3.5 flex items-center">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search Frequently Used" 
            className="w-full outline-none text-gray-700 text-sm placeholder:text-gray-400 font-medium"
          />
        </div>
      </div>

      {/* Overlapping Content Section */}
      <div className="flex-1 bg-white mx-4 -mt-12 px-4 py-6 relative z-10 overflow-y-auto shadow-md mb-4 rounded-[6px]">
        <h2 className="text-lg font-bold mb-5 text-gray-800 ml-1">Frequently Used</h2>
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {DASHBOARD_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center group"
              onClick={item.action ? onNavigateReport : undefined}
            >
              <div 
                className={`w-[3.25rem] h-[3.25rem] rounded-full ${item.bg} flex items-center justify-center mb-2.5 ${item.action ? 'cursor-pointer active:scale-95 transition-transform shadow-sm ring-2 ring-blue-50 group-hover:ring-blue-200' : ''}`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-[10px] text-center text-gray-700 font-semibold leading-tight px-0.5 tracking-tight group-hover:text-blue-600 transition-colors">
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