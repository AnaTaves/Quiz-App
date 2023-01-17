import React from "react";

function Answers({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) {

  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = answerText && currentAnswer !== correctAnswer;
  return (
    <div className="border-2 border-solid border-english-violet cursor-pointer flex text-rich-black my-5 w-5/12"  onClick={() => onSelectAnswer(answerText)}>
      <div className="bg-roman-silver border-r-2 border-r-english-violet p-3 hover:bg-rhythm">
      {letterMapping[index]}
      </div>
      <div className=" bg-laurel-green w-10/12 p-2 ">{answerText}</div>
    </div>
  );
}

export default Answers;
