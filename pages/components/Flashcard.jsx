import React from "react";
import { useState } from "react";

const Flashcard = () => {
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
      <h1 className={front ? "display" : "hidden"}>Front</h1>
      <h1 className={front ? "hidden" : "display"}>Back</h1>
    </div>
  );
};

export default Flashcard;
