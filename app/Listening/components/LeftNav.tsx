export default function LeftNav() {
  return (
    <nav className="sticky top-4 space-y-2 rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur">
      <h4 className="text-sm font-semibold uppercase tracking-wide">Site</h4>
      <ul className="space-y-1 text-sm text-neutral-600">
        <li>
          <span className="opacity-60">[Future route tree]</span>
        </li>
        <li>
          <span className="opacity-60">Listening practice</span>
        </li>
      </ul>
    </nav>
  );
}
