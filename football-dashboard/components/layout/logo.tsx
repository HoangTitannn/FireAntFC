import { memo } from "react";

const Logo = memo(({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-row items-center ${className || ''}`}>
      <svg width="48" height="48" viewBox="0 0 32 32">
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="36.22"
            cy="5.33"
            r="39.36"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#05e6fd"></stop>
            <stop offset="1" stopColor="#157cff"></stop>
          </radialGradient>
          <linearGradient
            id="linear-gradient"
            x1="10.43"
            y1="16.55"
            x2="13.14"
            y2="24.88"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
            <stop offset="0.12" stopColor="#fff" stopOpacity="0.17"></stop>
            <stop offset="0.3" stopColor="#fff" stopOpacity="0.42"></stop>
            <stop offset="0.47" stopColor="#fff" stopOpacity="0.63"></stop>
            <stop offset="0.64" stopColor="#fff" stopOpacity="0.79"></stop>
            <stop offset="0.78" stopColor="#fff" stopOpacity="0.9"></stop>
            <stop offset="0.91" stopColor="#fff" stopOpacity="0.97"></stop>
            <stop offset="1" stopColor="#fff"></stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="15.93"
            y1="25.47"
            x2="16.27"
            y2="8.37"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#fff"></stop>
          </linearGradient>
        </defs>
        <rect
          fill="url(#radial-gradient)"
          width="32"
          height="32"
          rx="5.63"></rect>
        <path
          fill="url(#linear-gradient)"
          d="M9,26.16h.92A4.56,4.56,0,0,0,14.4,22L15,15.33h0s-1.19-.9-3.57,2.71-3,4.93-3,5.72c0,.49-.05,1.3-.07,1.84A.54.54,0,0,0,9,26.16Z"></path>
        <path
          fill="url(#linear-gradient-2)"
          d="M17.4,10.83l.92-.16h0c-.39-.35-.8-.69-1.22-1A.35.35,0,0,1,17,9.29a.34.34,0,0,1,.32-.23h.07a18.59,18.59,0,0,1,2.7.81c.32.13.65.26,1,.41a.94.94,0,0,0,.37.07h.07A.87.87,0,0,0,22,9.87h0v0l1.61-3.7h0c-.5-.07-1-.13-1.51-.18-.27,0-.54,0-.82-.06h0c-.64,0-1.28-.07-1.93-.07a29.37,29.37,0,0,0-7.13.87l-.15,0h0A4.21,4.21,0,0,0,9,10.53H9v.27H9l-.11,3.07h0c.32-.18.64-.34,1-.5A29.1,29.1,0,0,1,17.4,10.83Z"></path>
        <path
          fill="white"
          d="M22.18,11.24s0,0,0,0v.05c-.09.28-.19.55-.3.83s-.13.35-.21.52-.25.6-.39.88A18.06,18.06,0,0,1,19,17.13h0a18.36,18.36,0,0,0,.89-4.41h0a18.25,18.25,0,0,0-11,10.73,2,2,0,0,0-.08.22c-.15.39-.28.79-.39,1.19h0l.05-1.32.25-6.91a1.38,1.38,0,0,1,.32-.84l0-.06a11.17,11.17,0,0,1,3.94-2.86,26,26,0,0,1,5.12-1.69,7.11,7.11,0,0,1,1-.13h0c-.19-.19-.38-.38-.58-.56A16.81,16.81,0,0,0,17.3,9.4h0a18.41,18.41,0,0,1,2.65.8,17.47,17.47,0,0,1,2.23,1.05Z"></path>
      </svg>
      {/* <span>
        <svg width="96" height="32" viewBox="0 0 96 32">
          <path
            fill="#2898f1"
            d="M102.81,25.78h-2.09a1,1,0,0,1-.59-.17,1.06,1.06,0,0,1-.33-.45l-1.87-4.69H89l-1.87,4.69a.95.95,0,0,1-.9.62h-2.1l8-19.43h2.74Zm-5.64-7.21L94,10.66c-.09-.23-.19-.5-.29-.82s-.2-.64-.29-1a16.42,16.42,0,0,1-.6,1.83l-3.14,7.89Zm10-4.53a8.3,8.3,0,0,1,1-.91,7.05,7.05,0,0,1,1.1-.7,5.92,5.92,0,0,1,2.63-.6,5.19,5.19,0,0,1,2,.37,3.9,3.9,0,0,1,1.48,1.06,4.54,4.54,0,0,1,.9,1.65,6.81,6.81,0,0,1,.31,2.13v8.74h-2.5V17a3.61,3.61,0,0,0-.73-2.42,2.75,2.75,0,0,0-2.23-.86,4.27,4.27,0,0,0-2.05.51,6.62,6.62,0,0,0-1.77,1.4V25.78h-2.5V12.05h1.5a.6.6,0,0,1,.65.5Zm17.37,12a3.43,3.43,0,0,1-2.57-.91,3.56,3.56,0,0,1-.9-2.62v-8.4H119.4a.57.57,0,0,1-.37-.13.48.48,0,0,1-.16-.4v-1l2.32-.29.57-4.24a.61.61,0,0,1,.19-.34.6.6,0,0,1,.38-.12h1.26v4.73h4.09v1.75h-4.09v8.24A1.72,1.72,0,0,0,124,23.6a1.54,1.54,0,0,0,1.12.42,2,2,0,0,0,.68-.1,2.48,2.48,0,0,0,.49-.23l.36-.22a.45.45,0,0,1,.26-.1.42.42,0,0,1,.34.23l.73,1.15a4.59,4.59,0,0,1-1.55.92A5.42,5.42,0,0,1,124.58,26Z"
            transform="translate(-32)"></path>
          <path
            fill="#000"
            d="M42.71,8.49v6.8h8.22v2.14H42.71v8.35H40V6.35H52.32V8.49Zm15.58-.75a1.44,1.44,0,0,1-.14.65,2,2,0,0,1-.39.55,2.15,2.15,0,0,1-.57.37,1.82,1.82,0,0,1-.7.13,1.67,1.67,0,0,1-.67-.13,1.77,1.77,0,0,1-.55-.37,1.75,1.75,0,0,1-.38-.55,1.58,1.58,0,0,1-.14-.65,1.71,1.71,0,0,1,.52-1.23,1.62,1.62,0,0,1,.55-.37A1.52,1.52,0,0,1,56.49,6a1.65,1.65,0,0,1,.7.14,1.93,1.93,0,0,1,.57.37,2,2,0,0,1,.39.55A1.59,1.59,0,0,1,58.29,7.74Zm-.53,4.31V25.78H55.28V12.05ZM64.2,14.8a6,6,0,0,1,1.64-2.2,3.69,3.69,0,0,1,2.39-.8,3.49,3.49,0,0,1,.86.1,2.16,2.16,0,0,1,.73.3L69.64,14a.4.4,0,0,1-.42.34,3.28,3.28,0,0,1-.57-.08,3.72,3.72,0,0,0-.85-.08,3.44,3.44,0,0,0-1.2.19,2.69,2.69,0,0,0-.93.56,4.09,4.09,0,0,0-.74.92,7.25,7.25,0,0,0-.59,1.25v8.68h-2.5V12.05h1.42a.8.8,0,0,1,.56.15.93.93,0,0,1,.21.51Zm18.7,9.06a4.85,4.85,0,0,1-1.11.94,6.42,6.42,0,0,1-1.37.66,8.56,8.56,0,0,1-1.51.38,9.09,9.09,0,0,1-1.55.13,7.37,7.37,0,0,1-2.7-.48,5.88,5.88,0,0,1-2.14-1.41,6.32,6.32,0,0,1-1.4-2.3,9,9,0,0,1-.5-3.14A7.87,7.87,0,0,1,71.07,16a6.23,6.23,0,0,1,1.31-2.16,6,6,0,0,1,2.07-1.44,7,7,0,0,1,2.77-.52,6.67,6.67,0,0,1,2.35.41,5.27,5.27,0,0,1,3.1,3.12A7.14,7.14,0,0,1,83.12,18a1.58,1.58,0,0,1-.12.76.54.54,0,0,1-.48.19H73.07a7.92,7.92,0,0,0,.37,2.27,4.55,4.55,0,0,0,.92,1.6,3.76,3.76,0,0,0,1.39,1,5,5,0,0,0,1.82.31,5.47,5.47,0,0,0,1.61-.21,7.83,7.83,0,0,0,1.16-.45,8.19,8.19,0,0,0,.82-.45,1.11,1.11,0,0,1,.57-.21.53.53,0,0,1,.47.23Zm-2-6.44a4.44,4.44,0,0,0-.25-1.54,3.4,3.4,0,0,0-.71-1.21,3.2,3.2,0,0,0-1.14-.79,4,4,0,0,0-1.52-.27,3.84,3.84,0,0,0-2.82,1,4.57,4.57,0,0,0-1.29,2.8Z"
            transform="translate(-32)"></path>
        </svg>
      </span> */}
    </div>
  );
});

Logo.displayName = 'Logo';

export default Logo;
