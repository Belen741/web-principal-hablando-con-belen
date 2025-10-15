import type { Lesson } from '../types';

export const A1_LESSONS: Lesson[] = [
  {
    id: 'a1-01',
    title: 'At the clinic',
    audioUrl: '/audio/placeholders/a1-01.mp3',
    transcriptHtml: `
<p>— Good morning, how are you today?<br>
— I have a slight <span title="headache">headache</span>, but I feel better than yesterday.<br>
— Perfect, I will take your <span title="blood pressure">blood pressure</span>.</p>
`.trim(),
    translationHtml: `
<p>— Buenos días, ¿cómo se siente hoy?<br>
— Me duele un poco la cabeza, pero mejor que ayer.<br>
— Perfecto, voy a tomar su presión.</p>
`.trim(),
    quiz: [
      {
        id: 'a1-01-q1',
        prompt: 'What does the patient feel?',
        options: [
          { id: 'a', label: 'A strong stomachache' },
          { id: 'b', label: 'A slight headache', correct: true },
          { id: 'c', label: 'Back pain' },
        ],
      },
      {
        id: 'a1-01-q2',
        prompt: 'What will be measured?',
        options: [
          { id: 'a', label: 'Temperature' },
          { id: 'b', label: 'Blood pressure', correct: true },
          { id: 'c', label: 'Blood sugar' },
        ],
      },
      {
        id: 'a1-01-q3',
        prompt: 'How does the patient feel compared to yesterday?',
        options: [
          { id: 'a', label: 'Worse' },
          { id: 'b', label: 'The same' },
          { id: 'c', label: 'Better', correct: true },
        ],
      },
    ],
  },
  {
    id: 'a1-02',
    title: 'Ordering breakfast',
    audioUrl: '/audio/placeholders/a1-02.mp3',
    transcriptHtml: `
<p>— Hello! I would like a <span title="toasted bread">toast</span> and orange juice.<br>
— Do you want the juice <span title="without sugar">unsweetened</span>?<br>
— Yes, please, and add a small <span title="portion of butter">butter</span>.</p>
`.trim(),
    translationHtml: `
<p>— ¡Hola! Me gustaría una tostada y jugo de naranja.<br>
— ¿Quieres el jugo sin azúcar?<br>
— Sí, por favor, y agrega una pequeña porción de mantequilla.</p>
`.trim(),
    quiz: [
      {
        id: 'a1-02-q1',
        prompt: 'What does the customer order?',
        options: [
          { id: 'a', label: 'Toast and orange juice', correct: true },
          { id: 'b', label: 'Coffee and cereal' },
          { id: 'c', label: 'Tea and yogurt' },
        ],
      },
      {
        id: 'a1-02-q2',
        prompt: 'How does the customer prefer the juice?',
        options: [
          { id: 'a', label: 'With sugar' },
          { id: 'b', label: 'Unsweetened', correct: true },
          { id: 'c', label: 'With milk' },
        ],
      },
      {
        id: 'a1-02-q3',
        prompt: 'What extra item is requested?',
        options: [
          { id: 'a', label: 'Butter', correct: true },
          { id: 'b', label: 'Jam' },
          { id: 'c', label: 'Honey' },
        ],
      },
    ],
  },
  {
    id: 'a1-03',
    title: 'Taking the bus',
    audioUrl: '/audio/placeholders/a1-03.mp3',
    transcriptHtml: `
<p>— Does this bus go to the <span title="city center">downtown</span>?<br>
— Yes, it stops at the main <span title="bus stop">station</span>.<br>
— Great, how much is the <span title="price">fare</span>?</p>
`.trim(),
    translationHtml: `
<p>— ¿Este autobús va al centro?<br>
— Sí, se detiene en la estación principal.<br>
— Genial, ¿cuánto cuesta el pasaje?</p>
`.trim(),
    quiz: [
      {
        id: 'a1-03-q1',
        prompt: 'Where does the passenger want to go?',
        options: [
          { id: 'a', label: 'To the airport' },
          { id: 'b', label: 'To the downtown', correct: true },
          { id: 'c', label: 'To the museum' },
        ],
      },
      {
        id: 'a1-03-q2',
        prompt: 'Where does the bus stop?',
        options: [
          { id: 'a', label: 'At the main station', correct: true },
          { id: 'b', label: 'At the school' },
          { id: 'c', label: 'At the stadium' },
        ],
      },
      {
        id: 'a1-03-q3',
        prompt: 'What information does the passenger ask for at the end?',
        options: [
          { id: 'a', label: 'The arrival time' },
          { id: 'b', label: 'The fare', correct: true },
          { id: 'c', label: 'The driver name' },
        ],
      },
    ],
  },
  {
    id: 'a1-04',
    title: 'Meeting a neighbor',
    audioUrl: '/audio/placeholders/a1-04.mp3',
    transcriptHtml: `
<p>— Hi, I am your new <span title="person living nearby">neighbor</span>.<br>
— Nice to meet you! Do you live on the same <span title="building level">floor</span>?<br>
— Yes, my apartment is next to the <span title="exit door">stairs</span>.</p>
`.trim(),
    translationHtml: `
<p>— Hola, soy tu nueva vecina.<br>
— ¡Encantada de conocerte! ¿Vives en el mismo piso?<br>
— Sí, mi departamento está junto a las escaleras.</p>
`.trim(),
    quiz: [
      {
        id: 'a1-04-q1',
        prompt: 'Who is speaking?',
        options: [
          { id: 'a', label: 'New neighbors', correct: true },
          { id: 'b', label: 'Coworkers' },
          { id: 'c', label: 'Classmates' },
        ],
      },
      {
        id: 'a1-04-q2',
        prompt: 'Where do they live?',
        options: [
          { id: 'a', label: 'On different floors' },
          { id: 'b', label: 'On the same floor', correct: true },
          { id: 'c', label: 'In different buildings' },
        ],
      },
      {
        id: 'a1-04-q3',
        prompt: 'Where is the new apartment located?',
        options: [
          { id: 'a', label: 'Next to the elevator' },
          { id: 'b', label: 'Next to the stairs', correct: true },
          { id: 'c', label: 'On the ground floor' },
        ],
      },
    ],
  },
];
