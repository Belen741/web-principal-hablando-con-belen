import type { Lesson } from '../types';

export const C1_LESSONS: Lesson[] = [
  {
    id: 'c1-01',
    title: 'Policy debate',
    audioUrl: '/audio/placeholders/c1-01.mp3',
    transcriptHtml: `
<p>— The <span title="analysis of possible results">impact assessment</span> reveals unexpected trade-offs.<br>
— Specifically, rural communities may face <span title="loss of services">service attrition</span>.<br>
— We recommend a <span title="adjusted">calibrated</span> rollout to mitigate disruption.</p>
`.trim(),
    translationHtml: `
<p>— La evaluación de impacto revela compensaciones inesperadas.<br>
— Específicamente, las comunidades rurales pueden enfrentar pérdida de servicios.<br>
— Recomendamos un despliegue calibrado para mitigar la disrupción.</p>
`.trim(),
    quiz: [
      {
        id: 'c1-01-q1',
        prompt: 'What reveals unexpected trade-offs?',
        options: [
          { id: 'a', label: 'Impact assessment', correct: true },
          { id: 'b', label: 'Budget report' },
          { id: 'c', label: 'Travel survey' },
        ],
      },
      {
        id: 'c1-01-q2',
        prompt: 'Which communities might lose services?',
        options: [
          { id: 'a', label: 'Urban districts' },
          { id: 'b', label: 'Rural communities', correct: true },
          { id: 'c', label: 'International partners' },
        ],
      },
      {
        id: 'c1-01-q3',
        prompt: 'What rollout is recommended?',
        options: [
          { id: 'a', label: 'Calibrated rollout', correct: true },
          { id: 'b', label: 'Immediate rollout' },
          { id: 'c', label: 'Suspended rollout' },
        ],
      },
    ],
  },
  {
    id: 'c1-02',
    title: 'Academic interview',
    audioUrl: '/audio/placeholders/c1-02.mp3',
    transcriptHtml: `
<p>— Your thesis reframes <span title="study of language in society">sociolinguistics</span> through digital archives.<br>
— Yes, the corpus exposes <span title="different language variations">dialectal stratification</span> across generations.<br>
— How do you address <span title="ethical concern">consent</span> from contributors?</p>
`.trim(),
    translationHtml: `
<p>— Tu tesis replantea la sociolingüística mediante archivos digitales.<br>
— Sí, el corpus expone estratificación dialectal entre generaciones.<br>
— ¿Cómo abordas el consentimiento de los colaboradores?</p>
`.trim(),
    quiz: [
      {
        id: 'c1-02-q1',
        prompt: 'What field does the thesis reframe?',
        options: [
          { id: 'a', label: 'Sociolinguistics', correct: true },
          { id: 'b', label: 'Biochemistry' },
          { id: 'c', label: 'Architecture' },
        ],
      },
      {
        id: 'c1-02-q2',
        prompt: 'What does the corpus expose?',
        options: [
          { id: 'a', label: 'Dialectal stratification', correct: true },
          { id: 'b', label: 'Seasonal data' },
          { id: 'c', label: 'Financial trends' },
        ],
      },
      {
        id: 'c1-02-q3',
        prompt: 'What ethical aspect is questioned?',
        options: [
          { id: 'a', label: 'Funding' },
          { id: 'b', label: 'Consent', correct: true },
          { id: 'c', label: 'Publication rights' },
        ],
      },
    ],
  },
  {
    id: 'c1-03',
    title: 'Art documentary',
    audioUrl: '/audio/placeholders/c1-03.mp3',
    transcriptHtml: `
<p>— This episode unpacks <span title="themes recurring in art">motifs</span> from post-war murals.<br>
— The curator interprets <span title="symbol for rebuilding">phoenix imagery</span> as communal resilience.<br>
— Viewers can compare scans via our <span title="digital image library">open gallery</span>.</p>
`.trim(),
    translationHtml: `
<p>— Este episodio analiza motivos de murales de posguerra.<br>
— La curadora interpreta la imagen del fénix como resiliencia comunitaria.<br>
— Los espectadores pueden comparar escaneos en nuestra galería abierta.</p>
`.trim(),
    quiz: [
      {
        id: 'c1-03-q1',
        prompt: 'What does the episode analyze?',
        options: [
          { id: 'a', label: 'Motifs from post-war murals', correct: true },
          { id: 'b', label: 'Modern cooking techniques' },
          { id: 'c', label: 'Space exploration history' },
        ],
      },
      {
        id: 'c1-03-q2',
        prompt: 'What does the phoenix imagery represent?',
        options: [
          { id: 'a', label: 'Communal resilience', correct: true },
          { id: 'b', label: 'Individual success' },
          { id: 'c', label: 'Political satire' },
        ],
      },
      {
        id: 'c1-03-q3',
        prompt: 'How can viewers interact with the murals?',
        options: [
          { id: 'a', label: 'Through the open gallery', correct: true },
          { id: 'b', label: 'By attending a concert' },
          { id: 'c', label: 'By joining a sports club' },
        ],
      },
    ],
  },
  {
    id: 'c1-04',
    title: 'Entrepreneur podcast',
    audioUrl: '/audio/placeholders/c1-04.mp3',
    transcriptHtml: `
<p>— Our guest scaled a <span title="company with social goals">social enterprise</span> during a downturn.<br>
— She credits a <span title="strategy to adapt">counter-cyclical</span> pricing model.<br>
— Investors valued the <span title="actions that measure results">impact metrics</span> in quarterly reports.</p>
`.trim(),
    translationHtml: `
<p>— Nuestra invitada escaló una empresa social durante una recesión.<br>
— Ella atribuye el éxito a un modelo de precios contracíclico.<br>
— Los inversionistas valoraron las métricas de impacto en los informes trimestrales.</p>
`.trim(),
    quiz: [
      {
        id: 'c1-04-q1',
        prompt: 'What type of company did the guest scale?',
        options: [
          { id: 'a', label: 'Social enterprise', correct: true },
          { id: 'b', label: 'Mining corporation' },
          { id: 'c', label: 'Sports franchise' },
        ],
      },
      {
        id: 'c1-04-q2',
        prompt: 'What pricing model was used?',
        options: [
          { id: 'a', label: 'Counter-cyclical', correct: true },
          { id: 'b', label: 'Static' },
          { id: 'c', label: 'Discount only' },
        ],
      },
      {
        id: 'c1-04-q3',
        prompt: 'What did investors value?',
        options: [
          { id: 'a', label: 'Impact metrics', correct: true },
          { id: 'b', label: 'Advertising budget' },
          { id: 'c', label: 'Office renovation' },
        ],
      },
    ],
  },
];
