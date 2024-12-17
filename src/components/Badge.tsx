interface BadgeProps {
  label: string;
  className?: string;
}
function Badge({ label, className }: BadgeProps) {
  const defaultClassName =
    "inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full";
  const mergedClassName = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;

  return <div className={mergedClassName}>{label}</div>;
}

export default Badge;
