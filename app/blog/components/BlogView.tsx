import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const blogIdeas = ['Historias de estudiantes', 'Análisis culturales', 'Consejos de estudio'];

export default function BlogView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Blog"
        subtitle="Comparte historias, investigaciones y actualizaciones de tu plataforma."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Calendario editorial"
            description="Planifica publicaciones y colabora con tu equipo en borradores."
          />
          <HighlightList items={blogIdeas} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Formato recomendado"
            description="Usa componentes MDX o CMS headless. Para editores ricos cliente, usa dynamic() con ssr:false."
          />
          <InfoCard
            title="Newsletter"
            description="Integra herramientas de email marketing y automatiza campañas."
          />
        </div>
      </div>
    </div>
  );
}
