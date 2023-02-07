import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Flashcard = ({ deck, title, deleteCard, editCard, setNewTitle, newTitle, setNewName }) => {
  const [front, setFront] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const returnCard = () => {
    if (!isEditing) {
      setFront(!front);
    }
  };

  const clickCheck = () => {
    !isEditing;
    setNewName(newTitle)
    editCard(deck.id)
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={
        front
          ? "h-32 w-72 bg-red-50 rounded-sm cursor-pointer flex flex-col justify-center"
          : "h-32 w-72 bg-green-400 rounded-sm cursor-pointer flex flex-col justify-center"
      }
    >
      <div className="h-[20%] w-72 shadow-lg flex items-center justify-end gap-2">
        <RiPencilFill
          onClick={() => setIsEditing(!isEditing)}
          type="submit"
          className={!isEditing ? "hover:text-blue-500" : "hidden"}
        />
        <AiOutlineCheck
          className={isEditing ? "hover:text-green-700" : "hidden"}
          onClick={clickCheck}
        />

        <AiOutlineClose
          onClick={() => deleteCard(deck.id)}
          className="hover:text-red-500"
        />
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
          className={
            isEditing
              ? "rounded border-none bg-transparent outline-none"
              : "hidden"
          }
          onChange={(e) => setNewTitle(e.target.value)}
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
