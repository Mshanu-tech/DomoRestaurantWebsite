export function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.84.23-1.4 1.44-1.4h1.53V5.1C16.75 5.03 15.9 5 14.9 5c-2.1 0-3.53 1.28-3.53 3.63v2.28H9v2.9h2.37V21h3.13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TwitterIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4l7.2 9.4L4.4 20H6.6l6-6.5 4.4 6.5H20l-7.5-9.9L19.2 4h-2.2l-5.4 5.9L7.5 4H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
