import type { Lesson } from '../types';

export const B1_LESSONS: Lesson[] = [
  {
    id: 'b1-01',
    title: 'Team briefing',
    audioUrl: '/audio/placeholders/b1-01.mp3',
    transcriptHtml: `
<p>— Today we will review the <span title="tasks assigned to the group">team agenda</span>.<br>
— Should we prioritize the <span title="digital advertising plan">marketing campaign</span>?<br>
— Yes, especially the section about <span title="content for social media">social posts</span>.</p>
`.trim(),
    translationHtml: `
<p>— Hoy revisaremos la agenda del equipo.<br>
— ¿Debemos priorizar la campaña de marketing?<br>
— Sí, especialmente la sección sobre publicaciones sociales.</p>
`.trim(),
    quiz: [
      {
        id: 'b1-01-q1',
        prompt: 'What is being reviewed?',
        options: [
          { id: 'a', label: 'Team agenda', correct: true },
          { id: 'b', label: 'Vacation plans' },
          { id: 'c', label: 'Budget cuts' },
        ],
      },
      {
        id: 'b1-01-q2',
        prompt: 'Which campaign is a priority?',
        options: [
          { id: 'a', label: 'Marketing', correct: true },
          { id: 'b', label: 'Recruitment' },
          { id: 'c', label: 'Training' },
        ],
      },
      {
        id: 'b1-01-q3',
        prompt: 'Which section receives special focus?',
        options: [
          { id: 'a', label: 'Social posts', correct: true },
          { id: 'b', label: 'Meeting notes' },
          { id: 'c', label: 'Office maintenance' },
        ],
      },
    ],
  },
  {
    id: 'b1-02',
    title: 'Apartment issues',
    audioUrl: '/audio/placeholders/b1-02.mp3',
    transcriptHtml: `
<p>— The <span title="water system">plumbing</span> keeps making noise during the night.<br>
— I will schedule a visit with the <span title="person who fixes problems">maintenance</span> team.<br>
— Please check the <span title="main electricity switch">circuit breaker</span> as well.</p>
`.trim(),
    translationHtml: `
<p>— La plomería sigue haciendo ruido por la noche.<br>
— Programaré una visita con el equipo de mantenimiento.<br>
— Por favor revisa también la caja de fusibles.</p>
`.trim(),
    quiz: [
      {
        id: 'b1-02-q1',
        prompt: 'What problem occurs at night?',
        options: [
          { id: 'a', label: 'Noisy plumbing', correct: true },
          { id: 'b', label: 'Broken windows' },
          { id: 'c', label: 'Loud neighbors' },
        ],
      },
      {
        id: 'b1-02-q2',
        prompt: 'Who will be contacted?',
        options: [
          { id: 'a', label: 'The maintenance team', correct: true },
          { id: 'b', label: 'The landlord' },
          { id: 'c', label: 'The police' },
        ],
      },
      {
        id: 'b1-02-q3',
        prompt: 'What additional check is requested?',
        options: [
          { id: 'a', label: 'Circuit breaker', correct: true },
          { id: 'b', label: 'Roof tiles' },
          { id: 'c', label: 'Garden lights' },
        ],
      },
    ],
  },
  {
    id: 'b1-03',
    title: 'Travel itinerary',
    audioUrl: '/audio/placeholders/b1-03.mp3',
    transcriptHtml: `
<p>— We arrive in Berlin at <span title="six thirty in the morning">6:30 a.m.</span>.<br>
— Then we have a <span title="meeting arranged beforehand">scheduled meeting</span> at noon.<br>
— After that, we will tour the <span title="well-known science exhibit">innovation expo</span>.</p>
`.trim(),
    translationHtml: `
<p>— Llegamos a Berlín a las 6:30 a.m.<br>
— Luego tenemos una reunión programada al mediodía.<br>
— Después visitaremos la expo de innovación.</p>
`.trim(),
    quiz: [
      {
        id: 'b1-03-q1',
        prompt: 'When do they arrive in Berlin?',
        options: [
          { id: 'a', label: '6:30 a.m.', correct: true },
          { id: 'b', label: '8:00 p.m.' },
          { id: 'c', label: '10:00 a.m.' },
        ],
      },
      {
        id: 'b1-03-q2',
        prompt: 'What happens at noon?',
        options: [
          { id: 'a', label: 'Lunch reservation' },
          { id: 'b', label: 'Scheduled meeting', correct: true },
          { id: 'c', label: 'City tour' },
        ],
      },
      {
        id: 'b1-03-q3',
        prompt: 'What will they tour later?',
        options: [
          { id: 'a', label: 'Innovation expo', correct: true },
          { id: 'b', label: 'Historic castle' },
          { id: 'c', label: 'Local market' },
        ],
      },
    ],
  },
  {
    id: 'b1-04',
    title: 'Community radio',
    audioUrl: '/audio/placeholders/b1-04.mp3',
    transcriptHtml: `
<p>— Welcome back to our <span title="broadcast to the neighborhood">community radio</span> update.<br>
— Today we interview a <span title="person who organizes city gardens">garden coordinator</span>.<br>
— She will share tips on <span title="growing vegetables in cities">urban farming</span>.</p>
`.trim(),
    translationHtml: `
<p>— Bienvenidos de nuevo a la actualización de nuestra radio comunitaria.<br>
— Hoy entrevistamos a una coordinadora de jardines.<br>
— Ella compartirá consejos sobre agricultura urbana.</p>
`.trim(),
    quiz: [
      {
        id: 'b1-04-q1',
        prompt: 'What type of program is this?',
        options: [
          { id: 'a', label: 'Community radio update', correct: true },
          { id: 'b', label: 'Sports broadcast' },
          { id: 'c', label: 'Cooking show' },
        ],
      },
      {
        id: 'b1-04-q2',
        prompt: 'Who is being interviewed?',
        options: [
          { id: 'a', label: 'Garden coordinator', correct: true },
          { id: 'b', label: 'Local chef' },
          { id: 'c', label: 'City mayor' },
        ],
      },
      {
        id: 'b1-04-q3',
        prompt: 'What topic will be discussed?',
        options: [
          { id: 'a', label: 'Urban farming', correct: true },
          { id: 'b', label: 'Ballet dancing' },
          { id: 'c', label: 'Computer coding' },
        ],
      },
    ],
  },
];
