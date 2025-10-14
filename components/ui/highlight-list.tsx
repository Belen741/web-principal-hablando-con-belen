interface HighlightListProps {
  items: string[];
}

export function HighlightList({ items }: HighlightListProps) {
  return (
    <ul className="space-y-2 text-sm text-slate-700">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 rounded-lg bg-white/60 p-3 shadow-sm backdrop-blur-sm"
        >
          <span className="mt-1 h-2 w-2 rounded-full bg-classroom-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
