// ClockIcon.jsx
export default function ClockIcon(props) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="none"
        stroke="white"
        strokeWidth="1"
      />
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path
        d="M8.75 3.75a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
        fill="white"
      />
    </svg>
  );
}
