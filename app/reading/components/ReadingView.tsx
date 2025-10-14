import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const readingLevels = ['Beginner - relatos cortos', 'Intermediate - artículos culturales', 'Advanced - análisis crítico'];

export default function ReadingView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Reading"
        subtitle="Centraliza textos, resúmenes y actividades de comprensión lectora."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <InfoCard
            title="Colección de textos"
            description="Integra fuentes diversas y define niveles. Añade marcadores o notas con componentes client-side cuando los necesites."
          />
          <HighlightList items={readingLevels} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Actividades sugeridas"
            description="Preguntas abiertas, verdadero/falso y resúmenes guiados. Incluye herramientas de IA según tu estrategia."
          />
          <InfoCard
            title="Modo nocturno"
            description="Implementa temas personalizados por ruta para largas sesiones de lectura."
          />
        </div>
      </div>
    </div>
  );
}
