import React from 'react';

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};

export const AdmitCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2H8C6.34 2 5 3.34 5 5V19C5 20.66 6.34 22 8 22H16C17.66 22 19 20.66 19 19V5C19 3.34 17.66 2 16 2ZM12 6C13.65 6 15 7.35 15 9C15 10.65 13.65 12 12 12C10.35 12 9 10.65 9 9C9 7.35 10.35 6 12 6ZM8 17V16C8 14.5 9.5 13.5 12 13.5C14.5 13.5 16 14.5 16 16V17H8Z" />
  </svg>
);

export const AttendanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11ZM7 15H9V17H7V15ZM11 15H13V17H11V15ZM15 15H17V17H15V15Z" />
  </svg>
);

export const CourseRegistrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M19 3H5C3.34 3 2 4.34 2 6V20C2 20.55 2.45 21 3 21H19C20.66 21 22 19.66 22 18V5C22 3.9 21.1 3 20 3H19ZM11 19H4V6C4 5.45 4.45 5 5 5H11V19ZM13 19V5H19C19.55 5 20 5.45 20 6V18C20 18.55 19.55 19 19 19H13Z" />
    <path d="M6 8H9V10H6V8Z" fill="currentColor" />
    <path d="M6 12H9V14H6V12Z" fill="currentColor" />
  </svg>
);

export const NotificationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM12 8L18 19H6L12 8Z" opacity="0"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM16.37 13.04C16.85 13.16 17.3 12.87 17.42 12.39C17.54 11.91 17.25 11.46 16.77 11.34C15.54 11.04 14.54 10.36 13.79 9.39C12.85 8.16 12.59 6.55 13.06 5.1L12 5.37L12 8C12 9.66 10.66 11 9 11V16H10.5L12 18V13.82C13.88 14.47 15.93 14.19 16.37 13.04ZM6 10.5C6 11.33 6.67 12 7.5 12H8V9H7.5C6.67 9 6 9.67 6 10.5Z" />
  </svg>
);

export const EventsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM10 13H12V14H11V15H12V16C12 16.55 11.55 17 11 17H10V18H11C12.1 18 13 17.1 13 16V15.5C13 15.1 12.8 14.7 12.5 14.5C12.8 14.3 13 13.9 13 13.5V13C13 11.9 12.1 11 11 11H10V13ZM15 11H16V18H15V12H14V11H15Z" />
  </svg>
);

export const ExamFormIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM13 8V3.5L18.5 9H13V8ZM8 12V14H16V12H8ZM8 16V18H16V16H8Z" />
  </svg>
);

export const FeedbackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM13 8V3.5L18.5 9H13V8ZM8 12H16V14H8V12ZM8 16H13V18H8V16Z" />
  </svg>
);

export const FeesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15ZM5 8C5.55 8 6 7.55 6 7C6 6.45 5.55 6 5 6C4.45 6 4 6.45 4 7C4 7.55 4.45 8 5 8ZM19 8C19.55 8 20 7.55 20 7C20 6.45 19.55 6 19 6C18.45 6 18 6.45 18 7C18 7.55 18.45 8 19 8ZM5 18C5.55 18 6 17.55 6 17C6 16.45 5.55 16 5 16C4.45 16 4 16.45 4 17C4 17.55 4.45 18 5 18ZM19 18C19.55 18 20 17.55 20 17C20 16.45 19.55 16 19 16C18.45 16 18 16.45 18 17C18 17.55 18.45 18 19 18Z" />
  </svg>
);

export const FeeUndertakingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
     <path fillRule="evenodd" clipRule="evenodd" d="M15 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V7L15 2ZM14 3.5L18.5 8H14V3.5ZM6 8H12V10H6V8ZM6 12H12V14H6V12ZM6 16H15V18H6V16Z" />
  </svg>
);

export const GrievanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2ZM9 6H15V8H9V6ZM9 10H12V12H9V10ZM13 10H15V12H13V10ZM9 14H15V16H9V14Z" />
    <path d="M4 6V18H2V6H4Z" />
    <path d="M22 6V18H20V6H22Z" />
  </svg>
);

export const MentorMenteeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H14V16.5C14 14.17 9.33 13 8 13ZM16 13C15.72 13 15.45 13.02 15.18 13.05C16.14 13.82 16.79 14.9 16.94 16.12C17.44 16.03 18.06 16 18.5 16C20.62 16 22.56 16.78 22.92 18.02C22.97 17.65 23 17.14 23 16.5C23 14.17 18.33 13 16 13Z" />
  </svg>
);

export const NeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8H4V6H20V8ZM4 18V12H20V18H4ZM6 14H8V16H6V14Z" />
  </svg>
);

export const PerformanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
     <path d="M6 10H10V18H6V10Z" />
     <path d="M12 6H16V18H12V6Z" />
     <path d="M18 2H22V18H18V2Z" />
     <path d="M2 22H22V20H2V22Z" />
  </svg>
);

export const ReportCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M7 12H11V18H7V12Z" />
    <path d="M13 8H17V18H13V8Z" />
    <path d="M19 4H23V18H19V4Z" />
    <path d="M3 22H23V20H3V22Z" />
  </svg>
);

export const SeatingPlanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4 6H9V19H4V6ZM10 6H15V19H10V6ZM16 6H21V19H16V6ZM6 8H7V9H6V8ZM6 11H7V12H6V11ZM6 14H7V15H6V14ZM12 8H13V9H12V8ZM12 11H13V12H12V11ZM12 14H13V15H12V14ZM18 8H19V9H18V8ZM18 11H19V12H18V11ZM18 14H19V15H18V14Z" />
  </svg>
);

export const RequestCenterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path d="M3 5V7H21V5H3ZM3 12H21V10H3V12ZM21 17H3V15H21V17ZM12 1C10.9 1 10 1.9 10 3H14C14 1.9 13.1 1 12 1Z" />
  </svg>
);

export const TimetableIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
     <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7V12.25L14.5 15.75L15.25 14.5L12.5 11.75V7H11Z" />
  </svg>
);