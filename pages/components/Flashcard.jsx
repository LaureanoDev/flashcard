import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";

const Flashcard = ({ deck, title, deleteCard }) => {
  const [front, setFront] = useState(true);

  const returnCard = () => {
    setFront(!front);
  };

  return (
    <div
      className={
        front
          ? "h-32 w-72 bg-red-50 rounded-sm cursor-pointer flex flex-col justify-center"
          : "h-32 w-72 bg-green-400 rounded-sm cursor-pointer flex flex-col justify-center"
      }
    >
      <div className="h-[20%] w-72 shadow-lg flex items-center justify-end gap-2">
        <RiPencilFill />
        <AiOutlineClose onClick={() => deleteCard(deck.id)} />
      </div>
      <div
        className="h-[80%] w-72 flex items-center justify-center"
        onClick={returnCard}
      >
        <h1
          className={front ? "display text-center overflow-hidden" : "hidden"}
        >
          {title}
        </h1>
        <h1
          className={front ? "hidden" : "display text-center overflow-hidden"}
        >
          Back
        </h1>
      </div>
    </div>
  );
};

export default Flashcard;
