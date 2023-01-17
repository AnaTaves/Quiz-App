import React, { useContext } from 'react';
import { QuizContext } from './contexts/QuizContext';
import Question from "./components/Question";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="bg-rich-black h-screen flex flex-col  items-center">
      <h1 className="text-laurel-green font-bold text-4xl mt-10">Quiz App</h1>
      <Question />
      <button className=' border-2 border-solid border-english-violet bg-laurel-green p-3 text-lg font-bold hover:bg-roman-silver hover:text-white transition-colors' onClick={()=>dispatch({type: "NEXT_QUESTION"})}>Next Question</button>
    </div>
  );
}

export default App;
