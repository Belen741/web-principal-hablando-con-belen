import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const pronunciationFocus = ['Fonética básica', 'Entonación', 'Ritmo y acentuación'];

export default function PronunciationView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Pronunciation"
        subtitle="Desarrolla módulos para practicar sonidos, entonación y ritmo del idioma."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Laboratorio de sonidos"
            description="Proporciona ejemplos grabados y guías visuales. Para analizadores de espectrograma usa dynamic() con ssr:false."
          />
          <HighlightList items={pronunciationFocus} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Feedback"
            description="Comparte correcciones de tutores o IA. Permite subir notas y clips de audio de referencia."
          />
        </div>
      </div>
    </div>
  );
}
