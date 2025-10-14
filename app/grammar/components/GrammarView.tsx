import { InfoCard } from '@/components/ui/info-card';
import { HighlightList } from '@/components/ui/highlight-list';
import { SectionHeader } from '@/components/ui/section-header';

const focusAreas = ['Tiempos verbales', 'Conectores', 'Estructuras condicionales'];

export default function GrammarView() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Gramática en contexto"
        subtitle="Diseña módulos que expliquen reglas con ejemplos vivos y actividades prácticas."
      />
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <InfoCard
            title="Plantilla de lección"
            description="Introduce la regla, muestra variaciones y finaliza con ejercicios guiados. Añade vídeos o minijuegos cuando requieran interacción pesada (usa dynamic() con ssr:false)."
          />
          <div className="rounded-2xl border border-dashed border-classroom-accent/50 bg-white/70 p-4">
            <h2 className="text-lg font-semibold text-slate-900">Áreas prioritarias</h2>
            <HighlightList items={focusAreas} />
          </div>
        </div>
        <div className="space-y-4">
          <InfoCard
            title="Checklist rápido"
            description="Revisa nivelación, ejemplos positivos/negativos y enlaces a prácticas externas."
            footer="💡 Documenta excepciones y patrones de uso real."
          />
        </div>
      </div>
    </div>
  );
}
