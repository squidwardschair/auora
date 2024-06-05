import MultipleChoice from "../components/multiplechoice";

const cards = [
  {
    question: "who wrote the declaration of independance",
    answer: "thomas jefferson",
    correct: null,
  },
  { question: "who is the counselor on south park", answer: "mr. mackey", correct: null},
  { question: "who is bob", answer: "blah!", correct: null},
];

const McMode = () => {
  return <MultipleChoice cardData={cards} />;
}

export default McMode;