export enum Screen {
  DASHBOARD = 'DASHBOARD',
  REPORT_FORM = 'REPORT_FORM',
  REPORT_RESULT = 'REPORT_RESULT',
  NOTIFICATIONS = 'NOTIFICATIONS',
  SCAN_ATTENDANCE = 'SCAN_ATTENDANCE'
}

export interface StudentInfo {
  name: string;
  enrollment: string;
  admno: string;
  program: string;
  school: string;
}

export interface CreditData {
  sem: string;
  regCredit: number;
  earnCredit: number;
}

export interface PerformanceData {
  sem: string;
  sgpa: number;
  cgpa: number;
}

export interface TableRow {
  class: string;
  sem: string;
  examSession: string;
  admno: string;
  prn: string;
  regCredit: string;
  earnCredit: string;
  sgpa: string;
  cgpa: string;
  semEgp: string;
  totalEgp: string;
  totalRegCredit: string;
  totalEarnCredit: string;
}