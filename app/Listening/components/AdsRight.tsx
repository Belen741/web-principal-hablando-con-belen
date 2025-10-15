export default function AdsRight() {
  return (
    <div className="sticky top-4 space-y-4">
      <div className="rounded-2xl border bg-white/70 p-4 text-sm shadow-sm backdrop-blur">
        <div className="mb-2 font-semibold">Ads</div>
        <div
          className="flex h-60 w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-xs uppercase tracking-wide text-neutral-500"
          data-ads-slot="listening-right-1"
        >
          Adsense placeholder
        </div>
      </div>
      <div className="rounded-2xl border bg-white/70 p-4 text-xs text-neutral-500 shadow-sm backdrop-blur">
        Configure Google Adsense or custom campaigns here.
      </div>
    </div>
  );
}
