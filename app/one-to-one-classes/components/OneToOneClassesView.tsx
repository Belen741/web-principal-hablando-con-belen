import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const classElements = ['Agenda y reservas', 'Material personalizado', 'Seguimiento individual'];

export default function OneToOneClassesView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="One-to-one Classes"
        subtitle="Coordina sesiones personalizadas entre tutores y estudiantes."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Agenda"
            description="Integra calendarios, recordatorios y pagos. Para dashboards complejos usa dynamic() con ssr:false."
          />
          <HighlightList items={classElements} />
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Perfil del estudiante"
            description="Muestra objetivos, historial y materiales sugeridos."
          />
          <InfoCard
            title="Tareas"
            description="Lista actividades previas y posteriores a cada sesión con enlaces directos."
          />
        </div>
      </div>
    </div>
  );
}
