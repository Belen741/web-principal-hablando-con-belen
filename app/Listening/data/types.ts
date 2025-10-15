export type QuizOption = {
  id: string;
  label: string;
  correct?: boolean;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type Lesson = {
  id: string;
  title: string;
  audioUrl: string;
  transcriptHtml: string;
  translationHtml: string;
  quiz: QuizQuestion[];
};
