import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const forumIdeas = ['Anuncios oficiales', 'Preguntas frecuentes', 'Retos semanales'];

export default function ForumView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Forum"
        subtitle="Fomenta la comunidad con foros moderados y discusiones temáticas."
      />
      <div className="grid gap-4 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4">
          <InfoCard
            title="Hilos destacados"
            description="Muestra conversaciones recientes y fija las más importantes. Conecta con tu backend preferido."
          />
          <HighlightList items={forumIdeas} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Moderación"
            description="Define reglas y herramientas para revisar reportes."
          />
          <InfoCard
            title="Ideas rápidas"
            description="Organiza clubs de lectura, duelos de vocabulario y espacios para feedback del producto."
          />
        </div>
      </div>
    </div>
  );
}
