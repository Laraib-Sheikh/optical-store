interface LensTypeIconProps {
  id: string;
  className?: string;
}

function LensOutline() {
  return (
    <path
      d="M4 7.5c0-1.4 1.1-2.5 2.5-2.5h11c1.4 0 2.5 1.1 2.5 2.5v9c0 1.4-1.1 2.5-2.5 2.5h-11C5.1 19 4 17.9 4 16.5v-9Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  );
}

export default function LensTypeIcon({ id, className }: LensTypeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <LensOutline />
      {id === "bifocal" && (
        <path
          d="M9.2 15.8c0-1.5 1.3-2.2 2.8-2.2s2.8.7 2.8 2.2v1.4H9.2v-1.4Z"
          fill="#9ca3af"
        />
      )}
      {id === "multifocal" && (
        <>
          <path d="M5.2 8.2h2.4v7.6H5.2Z" fill="#9ca3af" opacity="0.7" />
          <path d="M16.4 8.2h2.4v7.6h-2.4Z" fill="#9ca3af" opacity="0.7" />
          <path d="M7.6 11.2h8.8v1.6H7.6Z" fill="#c4c4c4" />
        </>
      )}
      {id === "trifocal" && (
        <path d="M5.5 11.2h13v2.2h-13Z" fill="#9ca3af" />
      )}
      {id === "progressive" && (
        <path
          d="M8.2 16.8c0-2.4 1.6-3.8 3.8-3.8s3.8 1.4 3.8 3.8"
          fill="#9ca3af"
          opacity="0.75"
        />
      )}
    </svg>
  );
}
