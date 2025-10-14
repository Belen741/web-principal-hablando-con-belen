import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-classroom-muted sm:text-base">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="mt-2 sm:mt-0">{action}</div> : null}
    </div>
  );
}
