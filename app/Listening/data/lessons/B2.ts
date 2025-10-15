import type { Lesson } from '../types';

export const B2_LESSONS: Lesson[] = [
  {
    id: 'b2-01',
    title: 'Project retrospective',
    audioUrl: '/audio/placeholders/b2-01.mp3',
    transcriptHtml: `
<p>— Our <span title="discussion after completing a project">retrospective</span> starts with successes.<br>
— The automation scripts significantly <span title="reduced">decreased</span> manual work.<br>
— Agreed, though <span title="delays">bottlenecks</span> appeared during testing.</p>
`.trim(),
    translationHtml: `
<p>— Nuestra retrospectiva comienza con los logros.<br>
— Los scripts de automatización redujeron significativamente el trabajo manual.<br>
— De acuerdo, aunque aparecieron cuellos de botella durante las pruebas.</p>
`.trim(),
    quiz: [
      {
        id: 'b2-01-q1',
        prompt: 'What type of meeting is being held?',
        options: [
          { id: 'a', label: 'Retrospective', correct: true },
          { id: 'b', label: 'Kickoff' },
          { id: 'c', label: 'Stand-up' },
        ],
      },
      {
        id: 'b2-01-q2',
        prompt: 'What improved thanks to automation scripts?',
        options: [
          { id: 'a', label: 'Manual work decreased', correct: true },
          { id: 'b', label: 'Budget increased' },
          { id: 'c', label: 'Team expanded' },
        ],
      },
      {
        id: 'b2-01-q3',
        prompt: 'When did bottlenecks appear?',
        options: [
          { id: 'a', label: 'During planning' },
          { id: 'b', label: 'During testing', correct: true },
          { id: 'c', label: 'During deployment' },
        ],
      },
    ],
  },
  {
    id: 'b2-02',
    title: 'Conference keynote',
    audioUrl: '/audio/placeholders/b2-02.mp3',
    transcriptHtml: `
<p>— Our keynote explores <span title="technology that learns from data">machine learning</span> in healthcare.<br>
— We highlight an <span title="project where hospitals share data">inter-hospital pilot</span>.<br>
— The ethical panel debates <span title="respecting personal information">data privacy</span>.</p>
`.trim(),
    translationHtml: `
<p>— Nuestra ponencia explora el aprendizaje automático en la salud.<br>
— Destacamos un piloto interhospitalario.<br>
— El panel ético debate la privacidad de los datos.</p>
`.trim(),
    quiz: [
      {
        id: 'b2-02-q1',
        prompt: 'What topic does the keynote explore?',
        options: [
          { id: 'a', label: 'Machine learning in healthcare', correct: true },
          { id: 'b', label: 'Travel safety' },
          { id: 'c', label: 'Sports analytics' },
        ],
      },
      {
        id: 'b2-02-q2',
        prompt: 'What pilot project is mentioned?',
        options: [
          { id: 'a', label: 'Inter-hospital pilot', correct: true },
          { id: 'b', label: 'School exchange' },
          { id: 'c', label: 'Aviation test' },
        ],
      },
      {
        id: 'b2-02-q3',
        prompt: 'Which topic does the ethical panel debate?',
        options: [
          { id: 'a', label: 'Data privacy', correct: true },
          { id: 'b', label: 'Travel insurance' },
          { id: 'c', label: 'Public transport' },
        ],
      },
    ],
  },
  {
    id: 'b2-03',
    title: 'Design critique',
    audioUrl: '/audio/placeholders/b2-03.mp3',
    transcriptHtml: `
<p>— The <span title="arrangement of visual elements">layout</span> feels balanced but static.<br>
— Let us incorporate more <span title="elements users can interact with">interactive prompts</span>.<br>
— Good idea; the <span title="short phrase encouraging action">call to action</span> could be brighter.</p>
`.trim(),
    translationHtml: `
<p>— La composición se siente equilibrada pero estática.<br>
— Incorporaremos más avisos interactivos.<br>
— Buena idea; la llamada a la acción podría ser más brillante.</p>
`.trim(),
    quiz: [
      {
        id: 'b2-03-q1',
        prompt: 'How is the layout described?',
        options: [
          { id: 'a', label: 'Balanced but static', correct: true },
          { id: 'b', label: 'Chaotic and busy' },
          { id: 'c', label: 'Minimal and empty' },
        ],
      },
      {
        id: 'b2-03-q2',
        prompt: 'What should be incorporated?',
        options: [
          { id: 'a', label: 'Interactive prompts', correct: true },
          { id: 'b', label: 'More text blocks' },
          { id: 'c', label: 'Additional photos' },
        ],
      },
      {
        id: 'b2-03-q3',
        prompt: 'What element could be brighter?',
        options: [
          { id: 'a', label: 'Call to action', correct: true },
          { id: 'b', label: 'Background texture' },
          { id: 'c', label: 'Footer links' },
        ],
      },
    ],
  },
  {
    id: 'b2-04',
    title: 'Cultural roundtable',
    audioUrl: '/audio/placeholders/b2-04.mp3',
    transcriptHtml: `
<p>— Tonight we compare <span title="stories passed down over time">oral traditions</span> from three regions.<br>
— A historian explains the <span title="connection">parallel</span> between myths and migration.<br>
— Listeners can submit questions through the <span title="live online chat">interactive feed</span>.</p>
`.trim(),
    translationHtml: `
<p>— Esta noche comparamos tradiciones orales de tres regiones.<br>
— Una historiadora explica el paralelo entre mitos y migración.<br>
— Los oyentes pueden enviar preguntas mediante el feed interactivo.</p>
`.trim(),
    quiz: [
      {
        id: 'b2-04-q1',
        prompt: 'What is compared during the roundtable?',
        options: [
          { id: 'a', label: 'Oral traditions', correct: true },
          { id: 'b', label: 'Economic policies' },
          { id: 'c', label: 'Architectural styles' },
        ],
      },
      {
        id: 'b2-04-q2',
        prompt: 'What link does the historian explain?',
        options: [
          { id: 'a', label: 'Between myths and migration', correct: true },
          { id: 'b', label: 'Between sports and health' },
          { id: 'c', label: 'Between art and finance' },
        ],
      },
      {
        id: 'b2-04-q3',
        prompt: 'How can listeners participate?',
        options: [
          { id: 'a', label: 'Through the interactive feed', correct: true },
          { id: 'b', label: 'By sending letters' },
          { id: 'c', label: 'By voting offline' },
        ],
      },
    ],
  },
];
