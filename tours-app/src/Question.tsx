import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [showAnswer, setShowInfo] = useState(false);
  const toggleShowAnswer = () => {
    setShowInfo(!showAnswer);
  };
  return (
    <article className="question">
      <header>
        <h4>{question} </h4>
        <button className="btn" onClick={toggleShowAnswer}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
}
