import type { Lesson } from '../types';

export const A2_LESSONS: Lesson[] = [
  {
    id: 'a2-01',
    title: 'Grocery planning',
    audioUrl: '/audio/placeholders/a2-01.mp3',
    transcriptHtml: `
<p>— We need fresh <span title="vegetables like lettuce and carrots">produce</span> for dinner.<br>
— Should we buy more <span title="milk and cheese">dairy</span> products too?<br>
— Yes, and do not forget the <span title="bread made from whole grains">wholegrain bread</span>.</p>
`.trim(),
    translationHtml: `
<p>— Necesitamos verduras frescas para la cena.<br>
— ¿Compramos también más productos lácteos?<br>
— Sí, y no olvides el pan integral.</p>
`.trim(),
    quiz: [
      {
        id: 'a2-01-q1',
        prompt: 'What do they need for dinner?',
        options: [
          { id: 'a', label: 'Produce', correct: true },
          { id: 'b', label: 'Desserts' },
          { id: 'c', label: 'Frozen meals' },
        ],
      },
      {
        id: 'a2-01-q2',
        prompt: 'Which category might need restocking?',
        options: [
          { id: 'a', label: 'Dairy products', correct: true },
          { id: 'b', label: 'Electronics' },
          { id: 'c', label: 'Cleaning supplies' },
        ],
      },
      {
        id: 'a2-01-q3',
        prompt: 'What type of bread should they remember?',
        options: [
          { id: 'a', label: 'Wholegrain bread', correct: true },
          { id: 'b', label: 'White bread' },
          { id: 'c', label: 'Sweet bread' },
        ],
      },
    ],
  },
  {
    id: 'a2-02',
    title: 'Booking a table',
    audioUrl: '/audio/placeholders/a2-02.mp3',
    transcriptHtml: `
<p>— I would like to <span title="reserve">book</span> a table for four this Friday.<br>
— Do you prefer the <span title="space outdoors">patio</span> or the dining hall?<br>
— The patio sounds lovely, please note it is a <span title="birthday celebration">birthday</span>.</p>
`.trim(),
    translationHtml: `
<p>— Me gustaría reservar una mesa para cuatro este viernes.<br>
— ¿Prefiere el patio o el salón?<br>
— El patio suena encantador, por favor anota que es un cumpleaños.</p>
`.trim(),
    quiz: [
      {
        id: 'a2-02-q1',
        prompt: 'How many people are coming?',
        options: [
          { id: 'a', label: 'Two' },
          { id: 'b', label: 'Four', correct: true },
          { id: 'c', label: 'Six' },
        ],
      },
      {
        id: 'a2-02-q2',
        prompt: 'Where do they want to sit?',
        options: [
          { id: 'a', label: 'In the patio', correct: true },
          { id: 'b', label: 'At the bar' },
          { id: 'c', label: 'In a private room' },
        ],
      },
      {
        id: 'a2-02-q3',
        prompt: 'What special note is added?',
        options: [
          { id: 'a', label: 'Anniversary' },
          { id: 'b', label: 'Conference' },
          { id: 'c', label: 'Birthday', correct: true },
        ],
      },
    ],
  },
  {
    id: 'a2-03',
    title: 'Discussing hobbies',
    audioUrl: '/audio/placeholders/a2-03.mp3',
    transcriptHtml: `
<p>— I recently joined a <span title="group of people who hike">hiking club</span>.<br>
— That is exciting! I practice <span title="relaxing water exercise">swimming</span> every weekend.<br>
— Maybe we can plan a <span title="joint activity">joint outing</span> soon.</p>
`.trim(),
    translationHtml: `
<p>— Recientemente me uní a un club de senderismo.<br>
— ¡Qué emocionante! Yo practico natación cada fin de semana.<br>
— Tal vez podamos planear una salida juntos pronto.</p>
`.trim(),
    quiz: [
      {
        id: 'a2-03-q1',
        prompt: 'What new activity was started?',
        options: [
          { id: 'a', label: 'Swimming' },
          { id: 'b', label: 'Joining a hiking club', correct: true },
          { id: 'c', label: 'Painting' },
        ],
      },
      {
        id: 'a2-03-q2',
        prompt: 'Which hobby is practiced every weekend?',
        options: [
          { id: 'a', label: 'Swimming', correct: true },
          { id: 'b', label: 'Cycling' },
          { id: 'c', label: 'Cooking' },
        ],
      },
      {
        id: 'a2-03-q3',
        prompt: 'What do they want to plan?',
        options: [
          { id: 'a', label: 'A joint outing', correct: true },
          { id: 'b', label: 'A competition' },
          { id: 'c', label: 'A class' },
        ],
      },
    ],
  },
  {
    id: 'a2-04',
    title: 'Fixing a schedule',
    audioUrl: '/audio/placeholders/a2-04.mp3',
    transcriptHtml: `
<p>— Can we shift our meeting to <span title="the day after tomorrow">Thursday</span>?<br>
— I am free in the <span title="period after midday">afternoon</span>.<br>
— Perfect, I will send an updated <span title="digital calendar note">calendar invite</span>.</p>
`.trim(),
    translationHtml: `
<p>— ¿Podemos mover nuestra reunión al jueves?<br>
— Estoy libre por la tarde.<br>
— Perfecto, enviaré una invitación actualizada.</p>
`.trim(),
    quiz: [
      {
        id: 'a2-04-q1',
        prompt: 'To which day is the meeting moved?',
        options: [
          { id: 'a', label: 'Wednesday' },
          { id: 'b', label: 'Thursday', correct: true },
          { id: 'c', label: 'Friday' },
        ],
      },
      {
        id: 'a2-04-q2',
        prompt: 'When is the speaker available?',
        options: [
          { id: 'a', label: 'Morning' },
          { id: 'b', label: 'Afternoon', correct: true },
          { id: 'c', label: 'Evening' },
        ],
      },
      {
        id: 'a2-04-q3',
        prompt: 'What will be sent after rescheduling?',
        options: [
          { id: 'a', label: 'A reminder call' },
          { id: 'b', label: 'A calendar invite', correct: true },
          { id: 'c', label: 'Meeting minutes' },
        ],
      },
    ],
  },
];
