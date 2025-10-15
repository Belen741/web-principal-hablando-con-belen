'use client';

import LessonCard from '../components/LessonCard';
import { C2_LESSONS } from '../data/lessons/C2';

export default function C2Level() {
  return (
    <div className="grid gap-4">
      {C2_LESSONS.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
