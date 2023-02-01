import React from "react";
import { useState } from "react";

const Flashcard = ({title}) => {
  const [front, setFront] = useState(true);

  const returnCard = () => {
    setFront(!front);
  };

  return (
    <div
      className={
        front
          ? "h-32 w-72 bg-red-50 rounded-sm cursor-pointer flex items-center justify-center"
          : "h-32 w-72 bg-green-400 rounded-sm cursor-pointer flex items-center justify-center"
      }
      onClick={returnCard}
    >
      <div className="w-[280px] h-[110px] flex items-center justify-center">
        <h1 className={front ? "display text-center overflow-hidden" : "hidden"}>{title}</h1>
        <h1 className={front ? "hidden" : "display"}>Back</h1>
      </div>
    </div>
  );
};

export default Flashcard;
