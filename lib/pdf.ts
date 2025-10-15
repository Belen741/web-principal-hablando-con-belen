export async function downloadHtmlAsPdf(html: string, fileName: string) {
  try {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const cleanText = html
      .replace(/<br\s*\/?>(\n)?/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\n{3,}/g, '\n\n');
    const lines = doc.splitTextToSize(cleanText.trim(), 515);
    doc.text(lines, 40, 60, { lineHeightFactor: 1.5 });
    doc.save(fileName);
  } catch (error) {
    const w = window.open('', '_blank');
    if (!w) {
      console.error('Unable to open a new window for printing.', error);
      return;
    }
    w.document.write(
      `<html><head><title>${fileName}</title></head><body>${html}</body></html>`
    );
    w.document.close();
    w.focus();
    w.print();
    w.close();
  }
}
