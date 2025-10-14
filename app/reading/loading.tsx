export default function ReadingLoading() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-1/2 animate-pulse rounded bg-slate-200" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-48 animate-pulse rounded-2xl bg-slate-100" />
        <div className="space-y-4">
          <div className="h-24 animate-pulse rounded-2xl bg-slate-100" />
          <div className="h-24 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
