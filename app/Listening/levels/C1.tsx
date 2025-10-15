'use client';

import LessonCard from '../components/LessonCard';
import { C1_LESSONS } from '../data/lessons/C1';

export default function C1Level() {
  return (
    <div className="grid gap-4">
      {C1_LESSONS.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
