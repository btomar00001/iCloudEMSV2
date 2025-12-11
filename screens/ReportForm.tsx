
import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ZoomIn, ZoomOut, Move, Home, Menu, Download } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Label
} from 'recharts';
import { 
  CREDIT_DATA, 
  PERFORMANCE_DATA, 
  STUDENT_INFO, 
  STUDENT_PERFORMANCE_ROWS 
} from '../constants';

interface ReportFormProps {
  onBack: () => void;
  // onSubmit is handled internally now to show results on same page
}

const ChartToolbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="absolute top-3 right-2 flex items-center space-x-2 z-20">
      <button className="text-gray-400 hover:text-gray-600 transition-colors" title="Zoom In">
        <ZoomIn className="w-4 h-4" />
      </button>
      <button className="text-gray-400 hover:text-gray-600 transition-colors" title="Zoom Out">
        <ZoomOut className="w-4 h-4" />
      </button>
      <button className="text-gray-400 hover:text-gray-600 transition-colors" title="Pan">
        <Move className="w-4 h-4" />
      </button>
      <button className="text-gray-400 hover:text-gray-600 transition-colors" title="Reset">
        <Home className="w-4 h-4" />
      </button>
      <div className="relative">
        <button 
          className="text-gray-400 hover:text-gray-600 transition-colors" 
          title="Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu className="w-4 h-4" />
        </button>
        {showMenu && (
          <div className="absolute right-0 top-6 bg-white shadow-xl rounded-md border border-gray-100 w-36 py-1 text-xs z-50">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center text-gray-700" onClick={() => setShowMenu(false)}>
              <Download className="w-3 h-3 mr-2" /> Download PNG
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center text-gray-700" onClick={() => setShowMenu(false)}>
              <Download className="w-3 h-3 mr-2" /> Download CSV
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center text-gray-700" onClick={() => setShowMenu(false)}>
              <Download className="w-3 h-3 mr-2" /> Download XLS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const toRoman = (num: string) => {
  const n = parseInt(num);
  const romans = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return romans[n] || num;
};

const ReportForm: React.FC<ReportFormProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Add 500ms delay to simulate fetching data
    setTimeout(() => {
      setShowResult(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header - Centered Title */}
      <div className="bg-white p-4 shadow-sm flex items-center justify-center sticky top-0 z-30 relative">
        <button 
          onClick={onBack} 
          className="absolute left-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Report Card</h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Blue Box - Grade Card List */}
        <div className="bg-[#4c9eeb] px-6 pt-6 pb-20">
          <h2 className="text-2xl font-bold text-white">Grade Card List</h2>
        </div>

        {/* Overlapping White Form Box */}
        <div className="bg-white mx-4 -mt-12 rounded-[6px] shadow-md p-6 space-y-6 relative z-10 mb-6">
          
          {/* Semester Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Semester <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 text-gray-700 font-medium">
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Session Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Session <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 text-gray-700 font-medium">
                <option>Consolidated</option>
                <option>Overall Performance</option>
                <option>Consolidated Session Wise</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full bg-[#3b82f6] text-white font-bold py-3.5 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors uppercase tracking-wide text-sm ${isSubmitting ? 'opacity-80' : ''}`}
          >
            {isSubmitting ? 'Processing...' : 'Submit'}
          </button>
        </div>

        {/* Results Container (Visible only after Submit) */}
        {showResult && (
          <div className="px-4 pb-4 animate-fade-in">
            {/* The Main "Student Performance Report" Section */}
            <div className="bg-white rounded-[6px] shadow-[0_0_15px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden">
              
              {/* Main Header */}
              <div className="p-4 border-b border-gray-100 bg-white">
                <h2 className="text-[#1e3a8a] font-bold text-lg">Student Performance Report</h2>
              </div>

              <div className="p-4 space-y-6">
                
                {/* Section 1: Data Table */}
                <div className="overflow-x-auto border border-gray-200 rounded-[6px]">
                  <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="bg-[#eff6ff] text-blue-600 font-semibold">
                      <tr>
                        <th className="p-3 border-b border-blue-100 min-w-[120px]">Class</th>
                        <th className="p-3 border-b border-blue-100 text-center">Sem</th>
                        <th className="p-3 border-b border-blue-100 min-w-[180px]">Exam Session</th>
                        <th className="p-3 border-b border-blue-100 text-center">Admno</th>
                        <th className="p-3 border-b border-blue-100 text-center">prn</th>
                        <th className="p-3 border-b border-blue-100 text-center">RegCredit</th>
                        <th className="p-3 border-b border-blue-100 text-center">Earn Credit</th>
                        <th className="p-3 border-b border-blue-100 text-center">SGPA</th>
                        <th className="p-3 border-b border-blue-100 text-center">CGPA</th>
                        <th className="p-3 border-b border-blue-100 text-center">Sem EGP</th>
                        <th className="p-3 border-b border-blue-100 text-center">total EGP</th>
                        <th className="p-3 border-b border-blue-100 text-center">Total Reg Credit</th>
                        <th className="p-3 border-b border-blue-100 text-center">Total Earn Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {STUDENT_PERFORMANCE_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 text-gray-700 transition-colors">
                          <td className="p-3">{row.class}</td>
                          <td className="p-3 text-center">{row.sem}</td>
                          <td className="p-3">{row.examSession}</td>
                          <td className="p-3 text-center">{row.admno}</td>
                          <td className="p-3 text-center">{row.prn}</td>
                          <td className="p-3 text-center">{row.regCredit}</td>
                          <td className="p-3 text-center">{row.earnCredit}</td>
                          <td className="p-3 text-center">{row.sgpa}</td>
                          <td className="p-3 text-center">{row.cgpa}</td>
                          <td className="p-3 text-center">{row.semEgp}</td>
                          <td className="p-3 text-center">{row.totalEgp}</td>
                          <td className="p-3 text-center">{row.totalRegCredit}</td>
                          <td className="p-3 text-center">{row.totalEarnCredit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 2: Info Card (Dark Theme) */}
                <div className="bg-[#1e293b] rounded-xl p-5 shadow-lg space-y-3 text-sm">
                    <div>
                      <span className="block text-cyan-400 text-xs font-bold uppercase mb-0.5">School: <span className="text-gray-300 font-normal normal-case ml-1">{STUDENT_INFO.school}</span></span>
                    </div>
                    <div>
                      <span className="block text-cyan-400 text-xs font-bold uppercase mb-0.5">Program: <span className="text-gray-300 font-normal normal-case ml-1">{STUDENT_INFO.program}</span></span>
                    </div>
                    <div>
                      <span className="block text-cyan-400 text-xs font-bold uppercase mb-0.5">Admno: <span className="text-gray-300 font-normal normal-case ml-1">{STUDENT_INFO.admno}</span></span>
                    </div>
                    <div>
                      <span className="block text-cyan-400 text-xs font-bold uppercase mb-0.5">Enrollment: <span className="text-gray-300 font-normal normal-case ml-1">{STUDENT_INFO.enrollment}</span></span>
                    </div>
                    <div>
                      <span className="block text-cyan-400 text-xs font-bold uppercase mb-0.5">Name: <span className="text-gray-300 font-normal normal-case ml-1">{STUDENT_INFO.name}</span></span>
                    </div>
                </div>

                {/* Section 3: Credit Summary */}
                <div className="space-y-3">
                  <h3 className="text-[#1e3a8a] font-bold text-lg">Credit Summary</h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-[6px]">
                    <table className="w-full text-sm text-center border-collapse">
                      <thead>
                        <tr className="bg-[#eff6ff] text-blue-600">
                          <th className="p-3 border border-blue-100 w-1/4">Sem</th>
                          <th className="p-3 border border-blue-100 w-1/4">Reg Credit</th>
                          <th className="p-3 border border-blue-100 w-1/4">Earn Credit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {CREDIT_DATA.map((data) => (
                          <tr key={data.sem} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 border border-gray-100 font-medium text-gray-700">{data.sem}</td>
                            <td className="p-3 border border-gray-100 text-gray-600">{data.regCredit.toFixed(2)}</td>
                            <td className="p-3 border border-gray-100 text-gray-600">{data.earnCredit.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 4: Credit Chart (Dual Axis) */}
                <div className="bg-white rounded-[6px] shadow-[0_0_15px_rgba(0,0,0,0.15)] border border-gray-200 pb-2 relative">
                  <h2 className="text-[#313638] font-bold text-[17px] pt-3 pl-3 mb-1">Student Progress</h2>
                  <ChartToolbar />
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={CREDIT_DATA}
                        margin={{ top: 20, right: 5, left: -10, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis 
                            dataKey="sem" 
                            tick={{fontSize: 14, fill: '#000', fontWeight: 500}} 
                            tickFormatter={(val) => `Sem ${toRoman(val)}`}
                            axisLine={true}
                            tickLine={false}
                            stroke="#9ca3af"
                        />
                        {/* Left Y-Axis for Reg Credit */}
                        <YAxis 
                            yAxisId="left"
                            orientation="left"
                            tick={{fontSize: 14, fill: '#3b82f6', fontWeight: 500}} 
                            axisLine={true}
                            tickLine={false}
                            domain={[0, 25]}
                            tickCount={6}
                            stroke="#3b82f6"
                        >
                          <Label 
                            value="Reg Credit" 
                            angle={-90} 
                            position="insideLeft" 
                            style={{ textAnchor: 'middle', fill: '#3b82f6', fontWeight: 'bold', fontSize: '14px' }}
                            offset={15}
                          />
                        </YAxis>

                        {/* Right Y-Axis for Earn Credit */}
                        <YAxis 
                            yAxisId="right"
                            orientation="right"
                            tick={{fontSize: 14, fill: '#22c55e', fontWeight: 500}} 
                            axisLine={true}
                            tickLine={false}
                            domain={[0, 25]}
                            tickCount={6}
                            stroke="#22c55e"
                        >
                          <Label 
                            value="Earn Credit" 
                            angle={90} 
                            position="insideRight" 
                            style={{ textAnchor: 'middle', fill: '#22c55e', fontWeight: 'bold', fontSize: '14px' }}
                            offset={15}
                          />
                        </YAxis>

                        <Tooltip 
                            cursor={{fill: '#eff6ff', opacity: 0.4}}
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                        />
                        <Legend 
                            wrapperStyle={{fontSize: '14px', marginTop: '10px', fontWeight: 600}} 
                            iconType="circle"
                        />
                        <Bar yAxisId="left" name="Reg Credit" dataKey="regCredit" fill="#3b82f6" barSize={35} radius={[0, 0, 0, 0]} />
                        <Bar yAxisId="right" name="Earn Credit" dataKey="earnCredit" fill="#22c55e" barSize={35} radius={[0, 0, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Section 5: Performance Summary */}
                <div className="space-y-3">
                  <h3 className="text-[#1e3a8a] font-bold text-lg">Performance Summary</h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-[6px]">
                    <table className="w-full text-sm text-center border-collapse">
                      <thead>
                        <tr className="bg-[#eff6ff] text-blue-600">
                          <th className="p-3 border border-blue-100 w-1/3">Sem</th>
                          <th className="p-3 border border-blue-100 w-1/3">SGPA</th>
                          <th className="p-3 border border-blue-100 w-1/3">CGPA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {PERFORMANCE_DATA.map((data) => (
                          <tr key={data.sem} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 border border-gray-100 font-medium text-gray-700">{data.sem}</td>
                            <td className="p-3 border border-gray-100 text-gray-600">{data.sgpa.toFixed(4)}</td>
                            <td className="p-3 border border-gray-100 text-gray-600">{data.cgpa.toFixed(4)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6: Performance Chart (Dual Axis) */}
                <div className="bg-white rounded-[6px] shadow-[0_0_15px_rgba(0,0,0,0.15)] border border-gray-200 pb-2 relative">
                  <h2 className="text-[#313638] font-bold text-[17px] pt-3 pl-3 mb-1">Student Progress</h2>
                  <ChartToolbar />
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={PERFORMANCE_DATA}
                        margin={{ top: 20, right: 5, left: -10, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis 
                            dataKey="sem" 
                            tick={{fontSize: 14, fill: '#000', fontWeight: 500}} 
                            tickFormatter={(val) => `Sem ${toRoman(val)}`}
                            axisLine={true}
                            tickLine={false}
                            stroke="#9ca3af"
                        />
                        
                        {/* Left Y-Axis for SGPA */}
                        <YAxis 
                            yAxisId="left"
                            orientation="left"
                            tick={{fontSize: 14, fill: '#3b82f6', fontWeight: 500}} 
                            axisLine={true}
                            tickLine={false}
                            domain={[0, 10]}
                            tickCount={6}
                            stroke="#3b82f6"
                        >
                          <Label 
                            value="SGPA" 
                            angle={-90} 
                            position="insideLeft" 
                            style={{ textAnchor: 'middle', fill: '#3b82f6', fontWeight: 'bold', fontSize: '14px' }}
                            offset={15}
                          />
                        </YAxis>

                        {/* Right Y-Axis for CGPA */}
                        <YAxis 
                            yAxisId="right"
                            orientation="right"
                            tick={{fontSize: 14, fill: '#22c55e', fontWeight: 500}} 
                            axisLine={true}
                            tickLine={false}
                            domain={[0, 10]}
                            tickCount={6}
                            stroke="#22c55e"
                        >
                          <Label 
                            value="CGPA" 
                            angle={90} 
                            position="insideRight" 
                            style={{ textAnchor: 'middle', fill: '#22c55e', fontWeight: 'bold', fontSize: '14px' }}
                            offset={15}
                          />
                        </YAxis>

                        <Tooltip 
                            cursor={{fill: '#eff6ff', opacity: 0.4}}
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                        />
                        <Legend 
                            wrapperStyle={{fontSize: '14px', marginTop: '10px', fontWeight: 600}} 
                            iconType="circle"
                        />
                        <Bar yAxisId="left" name="SGPA" dataKey="sgpa" fill="#3b82f6" barSize={35} radius={[0, 0, 0, 0]} />
                        <Bar yAxisId="right" name="CGPA" dataKey="cgpa" fill="#22c55e" barSize={35} radius={[0, 0, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportForm;
