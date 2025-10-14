import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const speakingTools = ['Role play guiado', 'Grabación con feedback', 'Rondas rápidas de preguntas'];

export default function SpeakingView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Speaking"
        subtitle="Facilita la práctica oral con herramientas de grabación y escenarios conversacionales."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Sesiones guiadas"
            description="Define scripts, objetivos y métricas para cada conversación. Usa dynamic() con ssr:false para widgets de grabación."
          />
          <HighlightList items={speakingTools} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Feedback instantáneo"
            description="Conecta modelos de IA o tutores humanos y registra sugerencias clave."
          />
        </div>
      </div>
    </div>
  );
}
