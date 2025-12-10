import React from 'react';
import { CreditData, PerformanceData, StudentInfo, TableRow } from "./types";
import { 
  AdmitCardIcon,
  AttendanceIcon,
  CourseRegistrationIcon,
  NotificationIcon,
  EventsIcon,
  ExamFormIcon,
  FeedbackIcon,
  FeesIcon,
  FeeUndertakingIcon,
  GrievanceIcon,
  MentorMenteeIcon,
  NeftIcon,
  PerformanceIcon,
  ReportCardIcon,
  SeatingPlanIcon,
  RequestCenterIcon,
  TimetableIcon
} from "./components/CustomIcons";

export const STUDENT_INFO: StudentInfo & { profileImage: string } = {
  school: "School of Computing Science & Engineering",
  program: "Bachelor of Technology in Computer Science and Engineering",
  admno: "23SCSE1012708",
  enrollment: "23131010731",
  name: "Bhuvaneshwar Pratap",
  // NOTE: Replace this URL with your hosted image or Base64 string to use the specific photo
  profileImage: "/profile_picture.png"
};

export const CREDIT_DATA: CreditData[] = [
  { sem: "1", regCredit: 19.00, earnCredit: 19.00 },
  { sem: "2", regCredit: 22.00, earnCredit: 14.00 },
  { sem: "3", regCredit: 23.00, earnCredit: 1.00 },
  { sem: "4", regCredit: 23.00, earnCredit: 23.00 },
];

export const PERFORMANCE_DATA: PerformanceData[] = [
  { sem: "1", sgpa: 7.0000, cgpa: 7.0000 },
  { sem: "2", sgpa: 4.9545, cgpa: 5.9024 },
  { sem: "3", sgpa: 0.4348, cgpa: 3.9375 },
  { sem: "4", sgpa: 6.9565, cgpa: 5.5356 },
];

export const STUDENT_PERFORMANCE_ROWS: TableRow[] = [
  {
    class: "B.TECH(CS) I 2023-24",
    sem: "Sem I",
    examSession: "Fall 2023-2024 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "19.00",
    earnCredit: "19.00",
    sgpa: "7.0000",
    cgpa: "7.0000",
    semEgp: "133",
    totalEgp: "133",
    totalRegCredit: "19.00",
    totalEarnCredit: "19.00"
  },
  {
    class: "B.TECH(CS) I 2023-24",
    sem: "Sem II",
    examSession: "Winter 2023-2024 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "22.00",
    earnCredit: "11.00",
    sgpa: "4.0000",
    cgpa: "5.3902",
    semEgp: "88",
    totalEgp: "221",
    totalRegCredit: "41.00",
    totalEarnCredit: "30.00"
  },
  {
    class: "B.TECH(CS) I 2023-24",
    sem: "Sem II",
    examSession: "Summer term 2023-24 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "22.00",
    earnCredit: "11.00",
    sgpa: "4.0000",
    cgpa: "5.3902",
    semEgp: "88",
    totalEgp: "221",
    totalRegCredit: "41.00",
    totalEarnCredit: "30.00"
  },
  {
    class: "B.TECH(CS) I 2023-24",
    sem: "Sem II",
    examSession: "Previous even Semester Debarred exam cycle March 2025 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "22.00",
    earnCredit: "14.00",
    sgpa: "4.9545",
    cgpa: "5.9024",
    semEgp: "109",
    totalEgp: "242",
    totalRegCredit: "41.00",
    totalEarnCredit: "33.00"
  },
  {
    class: "B.TECH(CS) I 2023-24",
    sem: "Sem II",
    examSession: "Even Semester Backlog May 2024-25 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "22.00",
    earnCredit: "14.00",
    sgpa: "4.9545",
    cgpa: "5.9024",
    semEgp: "109",
    totalEgp: "242",
    totalRegCredit: "41.00",
    totalEarnCredit: "33.00"
  },
  {
    class: "B.Tech CSE II 2023-24",
    sem: "Sem III",
    examSession: "Fall 2024-2025 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "23.00",
    earnCredit: "1.00",
    sgpa: "0.4348",
    cgpa: "3.9375",
    semEgp: "10",
    totalEgp: "252",
    totalRegCredit: "64.00",
    totalEarnCredit: "34.00"
  },
  {
    class: "B.Tech CSE II 2023-24",
    sem: "Sem IV",
    examSession: "Winter 2024-2025 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "23.00",
    earnCredit: "23.00",
    sgpa: "6.9565",
    cgpa: "5.5356",
    semEgp: "160",
    totalEgp: "412",
    totalRegCredit: "87.00",
    totalEarnCredit: "57.00"
  },
  {
    class: "B.Tech CSE II 2023-24",
    sem: "Sem IV",
    examSession: "Revaluation Winter 2024-2025 SCSE",
    admno: "23SCSE1012708",
    prn: "23131010731",
    regCredit: "23.00",
    earnCredit: "23.00",
    sgpa: "6.9565",
    cgpa: "5.5356",
    semEgp: "160",
    totalEgp: "412",
    totalRegCredit: "87.00",
    totalEarnCredit: "57.00"
  }
];

// Exporting ReportCardIcon for backwards compatibility if used elsewhere, 
// though DASHBOARD_ITEMS uses the imported one.
export { ReportCardIcon };

export const DASHBOARD_ITEMS = [
  { id: 1, label: "Admit Card", icon: AdmitCardIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 2, label: "Attendance", icon: AttendanceIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 3, label: "Course Registration", icon: CourseRegistrationIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 4, label: "Notification Hub", icon: NotificationIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 5, label: "Events & Holidays", icon: EventsIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 6, label: "Exam Form", icon: ExamFormIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 7, label: "Feedback", icon: FeedbackIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 8, label: "Fees", icon: FeesIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 9, label: "Fee Undertaking", icon: FeeUndertakingIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 10, label: "Grievance", icon: GrievanceIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 11, label: "Mentor Mentee", icon: MentorMenteeIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 12, label: "NEFT Form", icon: NeftIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 13, label: "Performance", icon: PerformanceIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 14, label: "Report Card", icon: ReportCardIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]", action: true },
  { id: 15, label: "Seaating Plan", icon: SeatingPlanIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 16, label: "Request Center", icon: RequestCenterIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
  { id: 17, label: "Timetable", icon: TimetableIcon, color: "text-[#3b82f6]", bg: "bg-[#CAE6F9]" },
];