import React, { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import Answers from "./Answers";

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
  return (
    <main className="flex flex-col justify-center items-center my-20 border-solid border-2 border-english-violet rounded-lg bg-laurel-green w-1/2">
      <h3 className="text-english-violet font-bold">{currentQuestion.question}</h3>
      {/* <div className="flex flex-wrap  justify-between">
        <Answers />
      </div> */}
    </main>
  );
}

export default Question;
