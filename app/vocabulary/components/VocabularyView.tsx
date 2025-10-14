import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const activities = ['Flashcards temáticas', 'Listas colaborativas', 'Juegos de memoria auditiva'];

export default function VocabularyView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Vocabulario vivo"
        subtitle="Administra colecciones de palabras, categorías y repasos espaciados."
      />
      <div className="grid gap-4 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4">
          <InfoCard
            title="Colecciones"
            description="Agrupa vocabulario por objetivos. Conecta APIs externas para traducciones o audio bajo demanda."
            footer="🔌 Ideal para sincronizar con tu app móvil."
          />
          <HighlightList items={activities} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Listas inteligentes"
            description="Define reglas de repaso usando espaciado, frecuencia y popularidad."
          />
          <InfoCard
            title="Próximos pasos"
            description="Añade un tablero de progreso o badges en un componente client-side pesado usando dynamic()."
          />
        </div>
      </div>
    </div>
  );
}
