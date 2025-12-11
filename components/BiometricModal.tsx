import React from 'react';
import { Fingerprint } from 'lucide-react';

interface BiometricModalProps {
  isOpen: boolean;
  onAuthenticate: () => void;
  onCancel: () => void;
}

const BiometricModal: React.FC<BiometricModalProps> = ({ isOpen, onAuthenticate, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity" 
        onClick={onCancel}
      />

      {/* Bottom Sheet - Material Dark Theme #242424 */}
      <div className="bg-[#242424] w-full text-white rounded-t-[1.75rem] p-6 pb-8 relative z-10 animate-slide-up flex flex-col items-center shadow-2xl">
        
        {/* Top Handle / Logo Area */}
        <div className="mb-6 flex flex-col items-center">
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 mb-3">
             <img src="https://play-lh.googleusercontent.com/8ff6EcyK9ep1af8ETdKQAZFs2JVnoiRugwY3GU4Sjhpp5o0zSo-jxslGIogFUrboCw=w480-h960-rw" alt="Logo" className="w-full h-full object-contain" />
           </div>
           <div className="text-sm text-gray-300 font-medium">CloudEMSV2</div>
        </div>

        <h2 className="text-[1.35rem] leading-snug font-normal text-center mb-1">Please authenticate to proceed.</h2>
        
        <p className="text-[#9ca3af] text-[0.9rem] mb-10 font-normal">Touch the fingerprint sensor</p>

        {/* Fingerprint Icon / Interaction Area */}
        <button 
          onClick={onAuthenticate}
          className="active:scale-95 transition-transform mb-6 focus:outline-none"
        >
          <Fingerprint className="w-12 h-12 text-[#7caaf0]" strokeWidth={1.5} />
        </button>

        {/* Cancel Button */}
        <div className="w-full mt-4 flex justify-start">
            <button 
                onClick={onCancel}
                className="text-[#a8c7fa] font-medium text-[1rem] pl-2"
            >
                Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default BiometricModal;