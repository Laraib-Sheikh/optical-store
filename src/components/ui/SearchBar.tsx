interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "search...",
}: SearchBarProps) {
  return (
    <div className="relative hidden md:block">
      <input
        type="search"
        placeholder={placeholder}
        className="w-48 rounded-full border border-border bg-surface py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent lg:w-56"
        aria-label="Search products"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </span>
    </div>
  );
}
