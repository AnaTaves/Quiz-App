import React, { useContext } from 'react';
import { QuizContext } from './contexts/QuizContext';
import Question from "./components/Question";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="bg-rich-black h-screen flex flex-col  items-center">
      <h1 className="text-laurel-green">Quiz App</h1>
      <Question />
      <button className='bg-english-violet' onClick={()=>dispatch({type: "NEXT_QUESTION"})}>Next Question</button>
    </div>
  );
}

export default App;
