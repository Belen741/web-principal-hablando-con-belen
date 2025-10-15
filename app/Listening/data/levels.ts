export const LEVELS = [
  { id: 'A1', title: 'Beginner A1', description: 'Simple everyday situations and short exchanges.' },
  { id: 'A2', title: 'Elementary A2', description: 'Daily interactions with more detailed vocabulary.' },
  { id: 'B1', title: 'Intermediate B1', description: 'Extended conversations and practical dialogues.' },
  { id: 'B2', title: 'Upper Intermediate B2', description: 'Complex situations with opinions and arguments.' },
  { id: 'C1', title: 'Advanced C1', description: 'Nuanced topics and academic-style listening.' },
  { id: 'C2', title: 'Proficient C2', description: 'Native-level comprehension with subtle cues.' },
] as const;

export const LEVEL_IDS = LEVELS.map((level) => level.id);
