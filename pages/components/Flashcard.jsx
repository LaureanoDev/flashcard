import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Flashcard = ({
  deck,
  decks,
  title,
  deleteCard,
  editCard,
  setNewFront,
  back,
  setBack,
  setBackCard,
}) => {
  const [front, setFront] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const returnCard = () => {
    if (isEditing == false) {
      setFront(!front);
    }
  };

  const clickCheck = () => {
    editCard(deck.id);
    setIsEditing(false);
    setBackCard(deck.id);
    
  };

  useEffect(() => {
    console.log(front, isEditing);
  }, [front, isEditing]);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={
        front
          ? "h-32 w-72 bg-red-50 rounded-lg cursor-pointer flex flex-col justify-center"
          : "h-32 w-72 bg-red-50 rounded-lg cursor-pointer flex flex-col justify-center"
      }
    >
      <div className="h-[20%] w-72 shadow-lg flex items-center justify-end gap-2">
        <RiPencilFill
          onClick={() => setIsEditing(true)}
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
        className={
          front ? "h-[80%] w-72 flex items-center justify-center" : "hidden"
        }
        onClick={returnCard}
      >
        <h1
          className={
            !isEditing && front
              ? "display text-center overflow-hidden"
              : "hidden"
          }
        >
          {title}
        </h1>
        <input
          type="text"
          className={
            isEditing && front == true
              ? "rounded border-none bg-transparent outline-none"
              : "hidden"
          }
          onChange={(e) => setNewFront(e.target.value)}
          placeholder="Edit text"
        />
      </div>
      <div
        className={
          front == false
            ? "h-[80%] w-72 flex items-center justify-center"
            : "hidden"
        }
        onClick={returnCard}
      >
        <h1
          className={front ? "hidden" : "display text-center overflow-hidden"}
        >
          {back}
        </h1>
        <input
          type="text"
          placeholder="Enter your back"
          className={
            front == false && isEditing == true
              ? "rounded border-none bg-transparent outline-none"
              : "hidden"
          }
          onFocus={() => setIsEditing(true)}
          onChange={(e) => setBack(e.target.value)}
        />
      </div>
    </motion.div>
  );
};

export default Flashcard;
