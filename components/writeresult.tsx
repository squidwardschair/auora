import styles from "../styles/write.module.css";
import { useEffect } from "react";

type Props = {
  term: string;
  answer: string;
  useranswer: string;
  onOverride(): void;
  onContinue(): void;
  fullscreenEnter(correct: boolean): void;
  enterStatus: boolean|null;
};
const WriteResult = ({
  term,
  answer,
  useranswer,
  onOverride,
  onContinue,
  fullscreenEnter,
  enterStatus,
}: Props) => {
  const resultEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter" && enterStatus) {
      e.preventDefault();
      onContinue();
    }
    if (enterStatus===null) {
      fullscreenEnter(true)
    }
  };
  useEffect(() => {
    console.log("blah");
    document.addEventListener("keydown", resultEnter);

    return function cleanup() {
      document.removeEventListener("keydown", resultEnter);
    };
  }, [resultEnter]);
  console.log("yeah!!!!!!");
  return (
    <div className={styles.writingArea}>
      <div className={styles.termHeader}>
        <span className={styles.termText}>{term}</span>
      </div>
      <div className={styles.answerArea}>
        <span className={`${styles.incAnswer} ${styles.answerBox}`}>
          {useranswer}
        </span>
      </div>
      <span className={styles.answerDetail}>Your answer</span>
      <div className={styles.answerArea}>
        <span className={`${styles.corAnswer} ${styles.answerBox}`}>
          {answer}
        </span>
      </div>
      <span className={styles.answerDetail}>Correct answer</span>
      <div className={styles.continueButtonBox}>
        <button className={styles.continueButton} onClick={onContinue}>
          <span className={styles.buttonText}>Continue</span>
        </button>
        <button className={styles.overrideButton} onClick={onOverride}>
          <span className={styles.buttonText}>Override: I was correct</span>
        </button>
      </div>
    </div>
  );
};

export default WriteResult;
