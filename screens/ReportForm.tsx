import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';

interface ReportFormProps {
  onBack: () => void;
  onSubmit: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onBack, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Add 50ms delay before navigating
    setTimeout(() => {
      onSubmit();
      setIsSubmitting(false);
    }, 50);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex items-center sticky top-0 z-10">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Report Card</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="bg-[#3b82f6] p-4">
            <h2 className="text-white font-semibold text-lg">Grade Card List</h2>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Semester <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 text-gray-700">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Session <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 text-gray-700">
                  <option>Consolidated</option>
                  <option>Overall Performance</option>
                  <option>Consolidated Session Wise</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full bg-[#3b82f6] text-white font-bold py-3 px-4 rounded-md shadow hover:bg-blue-600 transition-colors uppercase tracking-wide ${isSubmitting ? 'opacity-80' : ''}`}
            >
              {isSubmitting ? 'Processing...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;