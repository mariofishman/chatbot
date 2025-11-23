// CheckCircleIcon.jsx
export default function CheckCircleIcon(props) {
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
        d="M11.844 6.209a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
        fill="white"
      />
    </svg>
  );
}
