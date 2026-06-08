export default function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      {icon && (
        <div className="mb-1 text-2xl" aria-hidden>
          {icon}
        </div>
      )}
      <div className="text-2xl font-extrabold text-white">
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/50">
        {label}
      </div>
    </div>
  );
}
