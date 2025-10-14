import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  footer?: ReactNode;
}

export function InfoCard({ title, description, footer }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-classroom-muted">{description}</p>
      {footer ? <div className="mt-4 text-sm text-classroom-accent">{footer}</div> : null}
    </div>
  );
}
