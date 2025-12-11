import React, { useState } from 'react';
import Dashboard from './screens/Dashboard';
import ReportForm from './screens/ReportForm';
import ReportResult from './screens/ReportResult';
import Notifications from './screens/Notifications';
import ScanAttendance from './screens/ScanAttendance';
import BottomNav from './components/BottomNav';
import BiometricModal from './components/BiometricModal';
import { Screen } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DASHBOARD);
  const [showBiometric, setShowBiometric] = useState(false);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleScanClick = () => {
    // Show biometric modal instead of navigating immediately
    setShowBiometric(true);
  };

  const handleBiometricSuccess = () => {
    setShowBiometric(false);
    // Simulate a small delay for effect
    setTimeout(() => {
        navigateTo(Screen.SCAN_ATTENDANCE);
    }, 200);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.DASHBOARD:
        return <Dashboard onNavigateReport={() => navigateTo(Screen.REPORT_FORM)} />;
      case Screen.REPORT_FORM:
        return (
          <ReportForm 
            onBack={() => navigateTo(Screen.DASHBOARD)} 
          />
        );
      case Screen.REPORT_RESULT:
        return <ReportResult onBack={() => navigateTo(Screen.REPORT_FORM)} />;
      case Screen.NOTIFICATIONS:
        return <Notifications onBack={() => navigateTo(Screen.DASHBOARD)} />;
      case Screen.SCAN_ATTENDANCE:
        return <ScanAttendance onBack={() => navigateTo(Screen.DASHBOARD)} />;
      default:
        return <Dashboard onNavigateReport={() => navigateTo(Screen.REPORT_FORM)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* Mobile Frame Emulator: In a real app, remove max-w-[420px] to fill screen */}
      <div className="w-full max-w-[420px] bg-white h-[100dvh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden relative">
            {renderScreen()}
        </div>

        {/* Bottom Navigation - Always visible */}
        <BottomNav 
          onHome={() => navigateTo(Screen.DASHBOARD)} 
          onNotifications={() => navigateTo(Screen.NOTIFICATIONS)}
          onScan={handleScanClick}
          currentScreen={currentScreen}
        />
        
        {/* Biometric Overlay */}
        <BiometricModal 
          isOpen={showBiometric}
          onAuthenticate={handleBiometricSuccess}
          onCancel={() => setShowBiometric(false)}
        />
        
      </div>
    </div>
  );
}

export default App;