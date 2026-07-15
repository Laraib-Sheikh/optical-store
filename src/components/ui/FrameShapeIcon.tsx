const FRAME_PATHS: Record<string, React.ReactNode> = {
  aviator: (
    <>
      <ellipse cx="7.5" cy="12" rx="5.2" ry="4.4" />
      <ellipse cx="16.5" cy="12" rx="5.2" ry="4.4" />
      <path d="M12.7 11.2h-1.4" />
      <path d="M10.5 9.6c.4-.8 1.1-1.2 1.5-1.2s1.1.4 1.5 1.2" />
      <path d="M2.3 11.5 1 10.2" />
      <path d="M21.7 11.5 23 10.2" />
    </>
  ),
  "cat-eye": (
    <>
      <path d="M2.5 13.2c0-3.2 2.2-5.6 5.2-5.6 1.4 0 2.5.4 3.3 1.2l1 .9 1-.9c.8-.8 1.9-1.2 3.3-1.2 3 0 5.2 2.4 5.2 5.6 0 2.4-1.8 4.2-4.4 4.2H6.9c-2.6 0-4.4-1.8-4.4-4.2Z" />
      <path d="M11 12.5h2" />
    </>
  ),
  round: (
    <>
      <circle cx="7.5" cy="12" r="4.6" />
      <circle cx="16.5" cy="12" r="4.6" />
      <path d="M12.1 12h-.2" />
      <path d="M2.9 12H1.8" />
      <path d="M21.1 12h1.1" />
    </>
  ),
  oval: (
    <>
      <ellipse cx="7.5" cy="12" rx="5" ry="3.8" />
      <ellipse cx="16.5" cy="12" rx="5" ry="3.8" />
      <path d="M12.5 12h-1" />
      <path d="M2.5 12H1.6" />
      <path d="M21.5 12h.9" />
    </>
  ),
  browline: (
    <>
      <path d="M2.2 10.2h8.3c.4 0 .7.2.9.5l.6 1.1.6-1.1c.2-.3.5-.5.9-.5h8.3" />
      <path d="M3 10.4v2.4c0 2.1 1.8 3.8 4 3.8s4-1.7 4-3.8v-.8" />
      <path d="M13 11.2v1.6c0 2.1 1.8 3.8 4 3.8s4-1.7 4-3.8v-2.4" />
      <path d="M11 12.2h2" />
    </>
  ),
  geometric: (
    <>
      <path d="M3.2 9.2 7.5 7l4.3 2.2v5.4L7.5 17 3.2 14.6Z" />
      <path d="M12.5 9.2 16.5 7l4.3 2.2v5.4L16.5 17l-4-2.4Z" />
      <path d="M11.5 12h1" />
    </>
  ),
  rectangle: (
    <>
      <rect x="2.2" y="9.2" width="8.6" height="6.4" rx="1.4" />
      <rect x="13.2" y="9.2" width="8.6" height="6.4" rx="1.4" />
      <path d="M10.8 12h2.4" />
      <path d="M2.2 11.2H1.2" />
      <path d="M21.8 11.2h1" />
    </>
  ),
  butterfly: (
    <>
      <path d="M2.4 12.4c0-3.4 2-5.8 5.4-5.8 1.6 0 2.7.5 3.5 1.4L12 9.2l.7-1.2c.8-.9 1.9-1.4 3.5-1.4 3.4 0 5.4 2.4 5.4 5.8 0 2.8-2 4.6-4.8 4.6H7.2c-2.8 0-4.8-1.8-4.8-4.6Z" />
      <path d="M11.2 12h1.6" />
    </>
  ),
  square: (
    <>
      <rect x="2.6" y="8.6" width="7.6" height="7.6" rx="1.6" />
      <rect x="13.8" y="8.6" width="7.6" height="7.6" rx="1.6" />
      <path d="M10.2 12h3.6" />
      <path d="M2.6 11H1.5" />
      <path d="M21.4 11h1.1" />
    </>
  ),
};

interface FrameShapeIconProps {
  id: string;
  className?: string;
}

export default function FrameShapeIcon({ id, className }: FrameShapeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {FRAME_PATHS[id] ?? FRAME_PATHS.round}
    </svg>
  );
}
