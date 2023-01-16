import React from "react";
import Answers from "./Answers";

function Question() {
  return (
    <main className="flex flex-col justify-center items-center my-20 border-solid border-2 border-english-violet rounded-lg bg-laurel-green w-1/2">
      <h3 className="text-english-violet font-bold">Question</h3>
      {/* <div className="flex flex-wrap  justify-between">
        <Answers />
      </div> */}
    </main>
  );
}

export default Question;
