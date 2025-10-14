export default function ExamPreparationLoading() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-1/2 animate-pulse rounded bg-slate-200" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="h-48 animate-pulse rounded-2xl bg-slate-100" />
        <div className="h-48 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    </div>
  );
}
