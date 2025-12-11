import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';

interface ScanAttendanceProps {
  onBack: () => void;
}

const ScanAttendance: React.FC<ScanAttendanceProps> = ({ onBack }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'user',
            width: { ideal: 720 },
            height: { ideal: 720 }
          },
          audio: false
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError('Camera access denied or unavailable.');
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-white p-4 flex items-center sticky top-0 z-20">
        <button 
          onClick={onBack} 
          className="absolute left-4 text-black p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-black flex-1 text-center">Take Selfie</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center pt-16 bg-white relative">
        
        {/* Camera Circle - Clean, no border as per screenshot */}
        <div className="w-[280px] h-[280px] rounded-full overflow-hidden bg-gray-100 relative mb-24 shadow-sm">
          {error ? (
            <div className="w-full h-full flex items-center justify-center p-4 text-center text-gray-400 text-sm">
              {error}
            </div>
          ) : (
            <video 
              ref={videoRef}
              autoPlay 
              playsInline 
              muted
              className="w-full h-full object-cover transform scale-x-[-1]" 
            />
          )}
        </div>

        {/* Shutter Button */}
        <div className="absolute bottom-20">
            <button className="w-[4.5rem] h-[4.5rem] rounded-full bg-black flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                <Camera className="w-8 h-8 text-white" strokeWidth={1.5} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ScanAttendance;