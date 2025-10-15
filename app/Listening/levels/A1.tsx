'use client';

import LessonCard from '../components/LessonCard';
import { A1_LESSONS } from '../data/lessons/A1';

export default function A1Level() {
  return (
    <div className="grid gap-4">
      {A1_LESSONS.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
