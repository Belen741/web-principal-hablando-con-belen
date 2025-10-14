import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const storyBeats = ['Escena introductoria', 'Decisiones múltiples', 'Resultado ramificado'];

export default function InteractiveStoriesView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Interactive Stories"
        subtitle="Diseña narrativas ramificadas y minijuegos que respondan a las elecciones del estudiante."
      />
      <div className="grid gap-4 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4">
          <InfoCard
            title="Motor narrativo"
            description="Define escenas, personajes y puntos de decisión. Para visores complejos en canvas, marca dynamic() con ssr:false."
          />
          <HighlightList items={storyBeats} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Integraciones"
            description="Sincroniza progreso con bases de datos o servicios de gamificación."
          />
          <InfoCard
            title="Ideas rápidas"
            description="Historias culturales, misiones con vocabulario y desafíos de pronunciación contextual."
          />
        </div>
      </div>
    </div>
  );
}
