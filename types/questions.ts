export type Card = {
  question: string;
  answer: string;
  correct: boolean | null;
  userAnswer: string | null;
  learnStatus: number;
  id: number;
  isEmpty?: boolean;
};
export type questionProps = {
  cardData: Card[];
};