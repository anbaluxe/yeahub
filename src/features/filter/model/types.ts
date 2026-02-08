import type { QuestionFilters } from "@/shared/model/question-filters";

export type SkillItem = {
  readonly id: number;
  title: string;
};

export type QuestionFilterKey = keyof QuestionFilters;
