export default function ListeningLoading() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-12 space-y-3 lg:col-span-8 lg:col-start-3">
        <div className="h-16 animate-pulse rounded-2xl bg-neutral-200" />
        <div className="h-16 animate-pulse rounded-2xl bg-neutral-200" />
        <div className="h-16 animate-pulse rounded-2xl bg-neutral-200" />
      </div>
    </div>
  );
}
