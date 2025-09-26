import React from 'react';

interface IconProps {
  className?: string;
}

// Azure Icon
export const AzureIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L8.5 8.5l-2 5.5h4L12 18l1.5-4h4l-2-5.5L12 2zm0 4l2.5 5h-5L12 6z" fill="#0078D4"/>
  </svg>
);

// Cursor Icon (AI Code Editor)
export const CursorIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M8 2l-1 8-3 3h4.5v9l6-9H12l4-4-1-7H8z" fill="#000000"/>
  </svg>
);

// IBM Cloud Icon
export const IBMCloudIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M8 10h8v2H8v-2zm-2-2h12v2H6V8zm2 6h8v2H8v-2zm-2 2h12v2H6v-2z" fill="#1261FE"/>
  </svg>
);

// GitHub Actions Icon
export const GitHubActionsIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L8 8l-4-6v16l4-6 4 6 4-6 4 6V2l-4 6-4-6z" fill="#2088FF"/>
  </svg>
);

// Google Cloud Icon
export const GoogleCloudIcon: React.FC<IconProps> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.35 4.31-.99C19.13 19.69 20 16.64 20 12c0-4.42-3.58-8-8-8z" fill="#4285F4"/>
  </svg>
);

