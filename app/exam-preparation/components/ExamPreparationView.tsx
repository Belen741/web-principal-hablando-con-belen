import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const examFeatures = ['Simulacros cronometrados', 'Bancos de preguntas', 'Reportes por habilidad'];

export default function ExamPreparationView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Exam Preparation"
        subtitle="Organiza recursos y simulacros para certificaciones oficiales."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Simulaciones"
            description="Configura exámenes cronometrados con distintos niveles de dificultad. Para cronómetros avanzados, usa dynamic() con ssr:false."
          />
          <HighlightList items={examFeatures} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Plan personalizado"
            description="Combina habilidades débiles con recursos específicos y seguimiento semanal."
          />
        </div>
      </div>
    </div>
  );
}
