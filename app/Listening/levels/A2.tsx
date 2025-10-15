'use client';

import LessonCard from '../components/LessonCard';
import { A2_LESSONS } from '../data/lessons/A2';

export default function A2Level() {
  return (
    <div className="grid gap-4">
      {A2_LESSONS.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
