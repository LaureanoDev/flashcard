import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Flashcard = ({ deck, title, deleteCard }) => {
  const [front, setFront] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const returnCard = () => {
    if (!isEditing) {
      setFront(!front);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1}}
      className={
        front
          ? "h-32 w-72 bg-red-50 rounded-sm cursor-pointer flex flex-col justify-center"
          : "h-32 w-72 bg-green-400 rounded-sm cursor-pointer flex flex-col justify-center"
      }
    >
      <div className="h-[20%] w-72 shadow-lg flex items-center justify-end gap-2">
        <RiPencilFill onClick={() => setIsEditing(!isEditing)} type="submit" className="hover:text-blue-500"/>
        <AiOutlineClose onClick={() => deleteCard(deck.id)} className="hover:text-red-500"/>
      </div>
      <div
        className="h-[80%] w-72 flex items-center justify-center"
        onClick={returnCard}
      >
        <h1
          className={
            front && !isEditing
              ? "display text-center overflow-hidden"
              : "hidden"
          }
        >
          {title}
        </h1>

        <input
          type="text"
          className={isEditing ? "rounded border-none bg-transparent" : "hidden"}
          placeholder="Edit text"
        />

        <h1
          className={front ? "hidden" : "display text-center overflow-hidden"}
        >
          Back
        </h1>
      </div>
    </motion.div>
  );
};

export default Flashcard;
