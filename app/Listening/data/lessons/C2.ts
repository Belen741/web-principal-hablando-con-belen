import type { Lesson } from '../types';

export const C2_LESSONS: Lesson[] = [
  {
    id: 'c2-01',
    title: 'Philosophy colloquium',
    audioUrl: '/audio/placeholders/c2-01.mp3',
    transcriptHtml: `
<p>— The keynote interrogates <span title="study of knowledge">epistemology</span> through climate narratives.<br>
— She critiques the <span title="logic of cause and effect">causal chain</span> that policymakers present.<br>
— A respondent argues for <span title="questioning everything">radical skepticism</span> toward predictive models.</p>
`.trim(),
    translationHtml: `
<p>— La conferencia analiza la epistemología mediante narrativas climáticas.<br>
— Ella critica la cadena causal que presentan los responsables políticos.<br>
— Un comentarista defiende el escepticismo radical hacia los modelos predictivos.</p>
`.trim(),
    quiz: [
      {
        id: 'c2-01-q1',
        prompt: 'Which field is interrogated?',
        options: [
          { id: 'a', label: 'Epistemology', correct: true },
          { id: 'b', label: 'Meteorology' },
          { id: 'c', label: 'Cartography' },
        ],
      },
      {
        id: 'c2-01-q2',
        prompt: 'What does the speaker critique?',
        options: [
          { id: 'a', label: 'Causal chain from policymakers', correct: true },
          { id: 'b', label: 'Musical composition' },
          { id: 'c', label: 'Maritime law' },
        ],
      },
      {
        id: 'c2-01-q3',
        prompt: 'What stance does the respondent take?',
        options: [
          { id: 'a', label: 'Radical skepticism', correct: true },
          { id: 'b', label: 'Full endorsement' },
          { id: 'c', label: 'Neutral observation' },
        ],
      },
    ],
  },
  {
    id: 'c2-02',
    title: 'Advanced economics panel',
    audioUrl: '/audio/placeholders/c2-02.mp3',
    transcriptHtml: `
<p>— Our panel evaluates <span title="study of behavior under uncertainty">behavioral finance</span> during crises.<br>
— One scholar notes <span title="irrational behavior">cognitive bias</span> in institutional investors.<br>
— The moderator proposes <span title="rules imposed by authorities">regulatory guardrails</span> to stabilize markets.</p>
`.trim(),
    translationHtml: `
<p>— Nuestro panel evalúa las finanzas conductuales en tiempos de crisis.<br>
— Un académico destaca el sesgo cognitivo en los inversionistas institucionales.<br>
— La moderadora propone barandillas regulatorias para estabilizar los mercados.</p>
`.trim(),
    quiz: [
      {
        id: 'c2-02-q1',
        prompt: 'What is being evaluated?',
        options: [
          { id: 'a', label: 'Behavioral finance', correct: true },
          { id: 'b', label: 'Classical painting' },
          { id: 'c', label: 'Astrophysics' },
        ],
      },
      {
        id: 'c2-02-q2',
        prompt: 'Who shows cognitive bias?',
        options: [
          { id: 'a', label: 'Institutional investors', correct: true },
          { id: 'b', label: 'Elementary students' },
          { id: 'c', label: 'Wildlife researchers' },
        ],
      },
      {
        id: 'c2-02-q3',
        prompt: 'What is proposed to stabilize markets?',
        options: [
          { id: 'a', label: 'Regulatory guardrails', correct: true },
          { id: 'b', label: 'Concert series' },
          { id: 'c', label: 'Marathon races' },
        ],
      },
    ],
  },
  {
    id: 'c2-03',
    title: 'Literary criticism',
    audioUrl: '/audio/placeholders/c2-03.mp3',
    transcriptHtml: `
<p>— The essay decodes <span title="hidden meanings">subtext</span> in late-modern novels.<br>
— Critics highlight the <span title="narrative point of view">shifting perspective</span> as a commentary on identity.<br>
— They contrast it with <span title="straightforward storytelling">linear narration</span> of earlier works.</p>
`.trim(),
    translationHtml: `
<p>— El ensayo descifra el subtexto en novelas tardo-modernas.<br>
— Los críticos destacan la perspectiva cambiante como comentario sobre la identidad.<br>
— Lo contrastan con la narración lineal de obras anteriores.</p>
`.trim(),
    quiz: [
      {
        id: 'c2-03-q1',
        prompt: 'What do critics decode?',
        options: [
          { id: 'a', label: 'Subtext in novels', correct: true },
          { id: 'b', label: 'Marketing slogans' },
          { id: 'c', label: 'Astronomy charts' },
        ],
      },
      {
        id: 'c2-03-q2',
        prompt: 'What narrative feature is highlighted?',
        options: [
          { id: 'a', label: 'Shifting perspective', correct: true },
          { id: 'b', label: 'Predictable endings' },
          { id: 'c', label: 'Rhyming dialogue' },
        ],
      },
      {
        id: 'c2-03-q3',
        prompt: 'What earlier style is contrasted?',
        options: [
          { id: 'a', label: 'Linear narration', correct: true },
          { id: 'b', label: 'Silent films' },
          { id: 'c', label: 'Street graffiti' },
        ],
      },
    ],
  },
  {
    id: 'c2-04',
    title: 'Cutting-edge research',
    audioUrl: '/audio/placeholders/c2-04.mp3',
    transcriptHtml: `
<p>— We broadcast live from the <span title="center for scientific experiments">research observatory</span>.<br>
— The lead scientist unveils <span title="tiny computing devices">quantum processors</span> engineered for satellites.<br>
— Audience questions probe <span title="practical usefulness">operational viability</span> in space.</p>
`.trim(),
    translationHtml: `
<p>— Transmitimos en vivo desde el observatorio de investigación.<br>
— La científica principal presenta procesadores cuánticos diseñados para satélites.<br>
— Las preguntas del público examinan la viabilidad operativa en el espacio.</p>
`.trim(),
    quiz: [
      {
        id: 'c2-04-q1',
        prompt: 'Where is the broadcast happening?',
        options: [
          { id: 'a', label: 'Research observatory', correct: true },
          { id: 'b', label: 'Concert hall' },
          { id: 'c', label: 'Mountain cabin' },
        ],
      },
      {
        id: 'c2-04-q2',
        prompt: 'What technology is unveiled?',
        options: [
          { id: 'a', label: 'Quantum processors', correct: true },
          { id: 'b', label: 'Vintage radios' },
          { id: 'c', label: 'Steam engines' },
        ],
      },
      {
        id: 'c2-04-q3',
        prompt: 'What do audience questions examine?',
        options: [
          { id: 'a', label: 'Operational viability', correct: true },
          { id: 'b', label: 'Ticket prices' },
          { id: 'c', label: 'Parking availability' },
        ],
      },
    ],
  },
];
