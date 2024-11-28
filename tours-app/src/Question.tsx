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
    <article className="question container">
      <header className="flex justify-center bg-[#EBEEF2] mb-2 ">
        <h4 className="text-xl   p-2">{question} </h4>
        <button
          className="p-2 hover:text-pink-500 transition-colors duration-300"
          onClick={toggleShowAnswer}
        >
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p className="text-xl text-gray-700 mt-2 p-4">{answer}</p>}
    </article>
  );
}
