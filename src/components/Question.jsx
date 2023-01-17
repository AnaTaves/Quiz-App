import React, { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import Answers from "./Answers";

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <main className="flex flex-col justify-center items-center my-20 border-solid border-4 border-english-violet rounded-lg bg-laurel-green w-1/2">
      <h3 className="text-english-violet font-bold text-xl mt-5 ">
        {currentQuestion.question}
      </h3>
      <div className="flex flex-wrap items-center justify-between w-3/5">
        {quizState.answers.map((answer, index) => (
          <Answers
            answerText={answer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
            currentAnswer={quizState.currentAnswer}
            correctAnswer={quizState.correctAnswer}
          />
        ))}
      </div>
    </main>
  );
}

export default Question;
