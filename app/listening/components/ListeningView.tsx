import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const listeningIdeas = ['Clips de audio cortos', 'Podcasts temáticos', 'Diálogos guiados'];

export default function ListeningView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Listening"
        subtitle="Integra audios, subtítulos y prácticas de discriminación auditiva."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Recursos multimedia"
            description="Aloja tus audios o conéctate a un CDN. Para reproductores pesados de ondas, usa dynamic() con ssr:false."
          />
          <HighlightList items={listeningIdeas} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Evaluaciones"
            description="Preguntas de selección múltiple, dictados y completar espacios."
            footer="🎧 Añade análisis automático con servicios externos vía API."
          />
        </div>
      </div>
    </div>
  );
}
