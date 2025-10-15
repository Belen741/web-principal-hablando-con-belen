'use client';

import LessonCard from '../components/LessonCard';
import { B2_LESSONS } from '../data/lessons/B2';

export default function B2Level() {
  return (
    <div className="grid gap-4">
      {B2_LESSONS.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
