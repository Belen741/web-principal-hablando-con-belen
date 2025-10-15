'use client';

import { downloadHtmlAsPdf } from '@/lib/pdf';

export default function PdfButton({
  htmlSelector,
  fileName,
  label = 'Download PDF',
}: {
  htmlSelector: string;
  fileName: string;
  label?: string;
}) {
  const handleClick = async () => {
    const element = document.querySelector(htmlSelector) as HTMLElement | null;
    if (!element) return;
    await downloadHtmlAsPdf(element.outerHTML, fileName);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-xl border px-3 py-1 text-sm font-medium hover:bg-neutral-100"
    >
      {label}
    </button>
  );
}
