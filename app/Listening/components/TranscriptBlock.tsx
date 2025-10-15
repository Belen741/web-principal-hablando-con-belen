'use client';

import PdfButton from './PdfButton';

export default function TranscriptBlock({
  transcriptHtml,
  translationHtml,
  transcriptId,
  showTranslation,
  fileName = 'transcript.pdf',
}: {
  transcriptHtml: string;
  translationHtml?: string;
  transcriptId: string;
  showTranslation: boolean;
  fileName?: string;
}) {
  const translationVisible = showTranslation && Boolean(translationHtml?.trim());

  return (
    <div className="mt-3 space-y-3">
      <div
        id={transcriptId}
        className="rounded-xl border bg-white/80 p-3 leading-relaxed shadow-sm"
        dangerouslySetInnerHTML={{ __html: transcriptHtml }}
      />
      {translationVisible ? (
        <div
          className="rounded-xl border bg-neutral-50 p-3 leading-relaxed shadow-sm"
          dangerouslySetInnerHTML={{ __html: translationHtml! }}
        />
      ) : null}
      <PdfButton htmlSelector={`#${transcriptId}`} fileName={fileName} label="Download PDF" />
    </div>
  );
}
