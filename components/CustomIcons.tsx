import React from 'react';

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};

export const AdmitCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M16 2H8C6.34 2 5 3.34 5 5V19C5 20.66 6.34 22 8 22H16C17.66 22 19 20.66 19 19V5C19 3.34 17.66 2 16 2ZM12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8ZM16 18H8V17C8 15.34 10.67 14.5 12 14.5C13.33 14.5 16 15.34 16 17V18Z" />
  </svg>
);

export const AttendanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" />
  </svg>
);

export const CourseRegistrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM11 18H6V16H11V18ZM18 18H13V16H18V18ZM18 14H6V12H18V14ZM18 10H6V8H18V10Z" />
  </svg>
);

export const NotificationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM4 5H16.53C16.2 5.37 16 5.86 16 6.41V13.59C16 14.14 16.2 14.63 16.53 15H4V5ZM18 15.93C18.61 15.68 19 15.11 19 14.45V5.55C19 4.89 18.61 4.32 18 4.07V15.93ZM9 12H7V8H9V12ZM13 12H11V8H13V12Z" />
    <path d="M4 6.5V13.5L8 13.5L13 17.5V2.5L8 6.5H4Z" />
  </svg>
);

export const EventsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM12 12H10V14H12V12ZM16 12H14V14H16V12ZM9 16H7V18H9V16ZM13 16H11V18H13V16ZM17 16H15V18H17V16Z" />
  </svg>
);

export const ExamFormIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
  </svg>
);

export const FeedbackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM13.88 17.12L9.36 12.6L10.77 11.19C10.96 11 11.28 11 11.47 11.19L11.82 11.54C12.02 11.73 12.02 12.05 11.82 12.24L11.55 12.51L12.96 13.92L16.5 10.38L13.88 17.12ZM13 9V3.5L18.5 9H13Z" />
  </svg>
);

export const FeesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 10.1 6.9 12 6.9C14.05 6.9 14.95 7.99 15.09 9H17.06C16.9 7 15.28 5.37 13 5.07V3H11V5.08C8.94 5.43 7 6.81 7 8.9C7 11.7 9.4 12.44 11.97 13.06C14.49 13.7 15.2 14.53 15.2 15.65C15.2 17.05 13.62 17.65 12 17.65C9.8 17.65 8.48 16.55 8.24 15H6.26C6.44 17.43 8.35 18.96 11 19.33V21.5H13V19.31C15.26 18.9 17.2 17.48 17.2 15.35C17.2 12.16 14.4 11.57 11.8 10.9Z" />
  </svg>
);

export const FeeUndertakingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
     <path d="M14.17 5L19 9.83V19H5V5H14.17ZM14.17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9.83C21 9.3 20.79 8.79 20.41 8.42L15.58 3.59C15.21 3.21 14.7 3 14.17 3ZM7 15H17V17H7V15ZM7 11H17V13H7V11ZM7 7H14V9H7V7Z" />
  </svg>
);

export const GrievanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 2H8C6.9 2 6 2.9 6 4V16H4V6H2V20C2 21.1 2.9 22 4 22H18V20H20V4C20 2.9 19.1 2 18 2ZM18 16H8V4H18V16ZM11 12H15V14H11V12ZM11 9H15V11H11V9ZM11 6H15V8H11V6Z" />
  </svg>
);

export const MentorMenteeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H14V16.5C14 14.17 9.33 13 8 13ZM16 13C15.71 13 15.45 13.02 15.17 13.05C16.13 13.82 16.79 14.9 16.94 16.12C17.45 16.03 18.06 16 18.5 16C20.62 16 22.56 16.78 22.92 18.02C22.97 17.65 23 17.14 23 16.5C23 14.17 18.33 13 16 13Z" />
  </svg>
);

export const NeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 18V19H3V6H21V7H23V6C23 4.9 22.1 4 21 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V18H21ZM10 13H14V15H10V13Z" />
    <path d="M21 10H3V16H21V10Z" opacity=".3" />
    <path d="M21 10V16H3V10H21ZM21 8H3C2.45 8 2 8.45 2 9V17C2 17.55 2.45 18 3 18H21C21.55 18 22 17.55 22 17V9C22 8.45 21.55 8 21 8ZM14 14H10V12H14V14Z" />
  </svg>
);

export const PerformanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
     <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" />
  </svg>
);

export const ReportCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 12H17V17H15V12Z" />
  </svg>
);

export const SeatingPlanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18H4V21H6V18H18V21H20V18H22V6C22 4.9 21.1 4 20 4ZM10 14H4V8H10V14ZM20 14H14V8H20V14Z" />
  </svg>
);

export const RequestCenterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M20 6H16V2H14V6H10V2H8V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM20 20H4V8H20V20Z" />
    <path d="M12 11H7V13H12V11Z" />
    <path d="M17 11H14V13H17V11Z" />
    <path d="M17 15H7V17H17V15Z" />
  </svg>
);

export const TimetableIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
     <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
  </svg>
);