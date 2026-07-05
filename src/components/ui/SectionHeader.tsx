import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionHref = "#",
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {actionLabel && (
        <Link
          href={actionHref}
          className="text-sm font-medium text-accent hover:text-accent-hover"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
