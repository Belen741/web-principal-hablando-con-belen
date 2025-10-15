'use client';

import LessonCard from '../components/LessonCard';
import { B1_LESSONS } from '../data/lessons/B1';

export default function B1Level() {
  return (
    <div className="grid gap-4">
      {B1_LESSONS.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
