import React from "react";

/**
 * High-fidelity vector SVG icons for modern frontend tools & ecosystems.
 * Hand-crafted with standard viewBox coordinates for pixel-perfect rendering
 * in dark mode, matching official brand marks.
 */
export const TechIcon = ({ name, className = "" }) => {
  switch (name?.toLowerCase()) {
    case "react":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "next.js":
    case "next":
      return (
        <svg
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.067L69.8454 54H54V125.977H66.602V69.9678L139.774 164.887C143.196 162.484 146.452 159.866 149.508 157.067Z"
            fill="url(#next-gradient)"
          />
          <path d="M115 54H127V126H115V54Z" fill="url(#next-gradient-2)" />
          <defs>
            <linearGradient
              id="next-gradient"
              x1="109"
              y1="116.5"
              x2="144.5"
              y2="160.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="next-gradient-2"
              x1="121"
              y1="54"
              x2="120.799"
              y2="106.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M11.5 9H6.5V11H8V18H10V11H11.5V9ZM13.5 15.5C13.5 16.5 14.3 17.2 15.5 17.2C16.8 17.2 17.5 16.5 17.5 15.6C17.5 13.9 14.2 14.2 14.2 11.8C14.2 10.2 15.4 9.5 16.7 9.5C18.1 9.5 19.1 10.3 19.1 11.5H17.2C17.2 10.9 16.7 10.5 16 10.5C15.2 10.5 14.7 10.9 14.7 11.5C14.7 12.8 18 12.5 18 15.3C18 17.2 16.6 18.2 14.8 18.2C13.2 18.2 12.1 17.3 12.1 15.5H13.5Z"
            fill="white"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 16.8C8 17.1 8.6 17.3 9.3 17.3C10.7 17.3 11.4 16.6 11.4 15.1V9.5H9.5V15.1C9.5 15.7 9.2 16 8.7 16C8.2 16 7.8 15.8 7.5 15.6V16.8ZM13.8 15.5C14.3 16.5 15.2 17.3 16.6 17.3C17.8 17.3 18.6 16.7 18.6 15.7C18.6 14.4 17.6 13.9 16.3 13.3C15.1 12.8 14.3 12.3 14.3 11.2C14.3 10.2 15.1 9.5 16.4 9.5C17.4 9.5 18.2 9.9 18.7 10.8L17.2 11.7C16.9 11.2 16.5 10.9 15.9 10.9C15.3 10.9 14.9 11.3 14.9 11.8C14.9 12.4 15.3 12.7 16.1 13.1C17.5 13.7 19.3 14.3 19.3 16.2C19.3 17.9 17.9 18.8 16.1 18.8C14.5 18.8 13.4 18 12.8 16.7L13.8 15.5Z"
            fill="#000000"
          />
        </svg>
      );

    case "tanstack query":
    case "tanstack":
    case "react query":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* TanStack floral geometric mark */}
          <circle cx="12" cy="12" r="11" fill="#1C1E24" stroke="#FF4154" strokeWidth="1.5" />
          <circle cx="12" cy="7.5" r="3" fill="#FF4154" />
          <circle cx="8" cy="14.5" r="3" fill="#FFD234" />
          <circle cx="16" cy="14.5" r="3" fill="#00C4DF" />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case "zod":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect width="24" height="24" rx="6" fill="#3068B7" />
          {/* Official Zod geometric 'Z' mark */}
          <path
            d="M6 7.5H18L9.5 16.5H18V18.5H6L14.5 9.5H6V7.5Z"
            fill="#EAF0F9"
          />
        </svg>
      );

    case "tailwind css":
    case "tailwind":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "redux":
    case "redux toolkit":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M16.5 13.5a3 3 0 1 1-2.8-4 3 3 0 0 1 2.8 4zm-8.8-1a3 3 0 1 1-2.9-4 3 3 0 0 1 2.9 4zm4.4 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            fill="#764ABC"
          />
          <path
            d="M12 2.5C7.2 2.5 3.3 6 2.8 10.7a6.8 6.8 0 0 0 2.2 5.6 5.2 5.2 0 0 1 1.7-1 5.3 5.3 0 0 1-.9-3.8c.4-3.5 3.3-6.1 6.8-6.1a6.8 6.8 0 0 1 6.8 6.8c0 2.3-1.1 4.3-2.9 5.5a5.2 5.2 0 0 1 1.6 1.1 6.8 6.8 0 0 0 2.8-5.3 8.3 8.3 0 0 0-8.9-8z"
            fill="#764ABC"
          />
        </svg>
      );

    case "zustand":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Zustand Bear Silhouette */}
          <path
            d="M5 9C4 7 4 4 6 3c2-1 4 1 5 3 1.5-.4 3-.4 4.5 0 1-2 3-4 5-3 2 1 2 4 1 6 1.5 2 1.5 5 0 7-1 1.5-2.5 2.5-4.5 3-3 1-7 1-10 0-2-.5-3.5-1.5-4.5-3-1.5-2-1.5-5 0-7z"
            fill="#E6983A"
          />
          <circle cx="9" cy="11" r="1.2" fill="#261A08" />
          <circle cx="15" cy="11" r="1.2" fill="#261A08" />
          <ellipse cx="12" cy="14" rx="2" ry="1.2" fill="#261A08" />
        </svg>
      );

    case "firebase":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M4.6 18.2L9.2 4.1c.2-.5.8-.7 1.2-.4.2.1.3.3.3.5l2.4 8.7-8.5 5.3z"
            fill="#FFA000"
          />
          <path
            d="M19.4 18.2l-3.3-13.4c-.1-.5-.6-.8-1.1-.7-.3.1-.5.3-.6.5L12 8.7l7.4 9.5z"
            fill="#F57C00"
          />
          <path
            d="M3.5 19.5l1.1-1.3 8.5-5.3 2.8 3.5-11.8 3.6c-.4.1-.7 0-.9-.3-.2-.2-.2-.4.3-.5z"
            fill="#FFCA28"
          />
          <path
            d="M12.4 22c-.3 0-.6-.1-.8-.3L3.5 19.5l8.5-16.7c.3-.5.9-.6 1.4-.3.2.1.4.3.4.5l8.1 16.5-8.7 2.3c-.3.1-.5.2-.8.2z"
            fill="#FFA000"
            fillOpacity="0.4"
          />
        </svg>
      );

    case "shadcn":
    case "shadcn ui":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M20.5 12.5L12.5 20.5M19 4L4 19"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "mui":
    case "material ui":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path d="M0 2.5l7 4v11l-7-4v-11z" fill="#007FFF" />
          <path d="M7 6.5l7-4v11l-7 4v-11z" fill="#0059B2" />
          <path d="M14 2.5l7 4v11l-7-4v-11z" fill="#007FFF" />
          <path d="M7 17.5l7 4v-5l-7-4v5z" fill="#00B0FF" />
          <path d="M14 17.5l7-4v5l-7 4v-5z" fill="#0059B2" />
        </svg>
      );

    case "dnd-kit":
    case "dnd":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="4" width="7" height="6" rx="2" fill="#6366F1" />
          <rect x="14" y="4" width="7" height="6" rx="2" fill="#38BDF8" />
          <rect x="3" y="14" width="7" height="6" rx="2" fill="#10B981" />
          <rect x="14" y="14" width="7" height="6" rx="2" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="2,2" />
          <circle cx="17.5" cy="17" r="1.5" fill="#818CF8" />
        </svg>
      );

    case "react native":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect x="6" y="2" width="12" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="4" ry="1.5" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="1.5" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(-30 12 12)" />
          <circle cx="12" cy="19" r="0.75" fill="#61DAFB" />
        </svg>
      );

    case "sass":
    case "scss":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.8 13.5c-.7 1.4-2.1 2.2-3.8 2.2-2.7 0-4.5-1.9-4.5-4.6 0-3 2.1-4.7 4.9-4.7 1.7 0 3 .6 3.8 1.6l-1.3 1.2c-.6-.7-1.4-1.1-2.5-1.1-1.8 0-3 1.2-3 3 0 1.9 1.1 3.1 3 3.1 1.1 0 2-.4 2.6-1.1l1.3 1.1c-.2.5-.3.9-.5 1.4z"
            fill="#CD6799"
          />
        </svg>
      );

    case "git":
    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M21.6 10.9L13.1 2.4a1.8 1.8 0 0 0-2.5 0L8.8 4.2l3.2 3.2c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.1 3.1c.8-.3 1.7-.1 2.3.5.9.9.9 2.3 0 3.2s-2.3.9-3.2 0a2.3 2.3 0 0 1-.5-2.5l-2.9-2.9v5.9c.2.2.4.4.5.7.7.9.6 2.3-.3 3.1s-2.3.8-3.2 0-1-2.2-.2-3.1c.4-.5 1-.7 1.6-.7V8.5c-.6 0-1.2-.3-1.6-.7-.8-.9-.8-2.2 0-3.1L2.4 10.9c-.7.7-.7 1.8 0 2.5l8.5 8.5c.7.7 1.8.7 2.5 0l8.2-8.2c.7-.8.7-2 0-2.8z"
            fill="#F05032"
          />
        </svg>
      );

    case "html":
    case "html5":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path d="M3 2l1.6 18.5L12 23l7.4-2.5L21 2H3zm14.5 5.5h-8l.2 2.5h7.6l-.6 6.8-4.7 1.3-4.7-1.3-.3-3.6H9l.2 1.8 2.8.8 2.8-.8.3-3.4H6.8L6.2 5.5h11.5l-.2 2z" fill="#E34F26" />
        </svg>
      );

    case "css":
    case "css3":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path d="M3 2l1.6 18.5L12 23l7.4-2.5L21 2H3zm14.5 5.5h-8l.2 2.5h7.6l-.6 6.8-4.7 1.3-4.7-1.3-.3-3.6H9l.2 1.8 2.8.8 2.8-.8.3-3.4H6.8L6.2 5.5h11.5l-.2 2z" fill="#1572B6" />
        </svg>
      );

    case "node":
    case "node.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.2l6.5 3.8v7.6L12 19.4 5.5 15.6V8L12 4.2z"
            fill="#5FA04E"
          />
        </svg>
      );

    case "rest api":
    case "api":
    case "graphql":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <rect x="2" y="5" width="20" height="14" rx="3" stroke="#959CFF" strokeWidth="1.5" />
          <path d="M7 12h2m3-3v6m3-4l3 4m0-4l-3 4" stroke="#959CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
};

export default TechIcon;
