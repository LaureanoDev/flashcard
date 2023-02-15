import { useState } from "react";
import Flashcard from "./components/Flashcard";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [decks, setDecks] = useState([]);
  const [title, setTitle] = useState("");
  const [newFront, setNewFront] = useState("");
  const [back, setBack] = useState("");

  const createCard = (e) => {
    e.preventDefault();
    if (title != "") {
      setDecks([...decks, { title: title, back: back, id: uuidv4() }]);
      setTitle("");
      console.log(decks);
    }
  };

  const deleteCard = (id) => {
    let updatedDecks = [...decks].filter((deck) => deck.id !== id);
    setDecks(updatedDecks);
    console.log(decks);
  };

  const editCard = (id) => {
    let cardIndex = [...decks].findIndex((deck) => deck.id == id);
    if (newFront != "") {
      [...decks][cardIndex].title = newFront;
      setNewFront("");
    }
    setDecks(decks);
  };

  const setBackCard = (id) => {
    let cardIndex = [...decks].findIndex((deck) => deck.id == id);
    if (back != "") {
      [...decks][cardIndex].back = back;
      setBack("") 
    }
    setDecks(decks);
  };

  return (
    <div className="overflow-x-hidden bg-zinc-800 h-screen w-auto">
      <div className="h-[50vh] w-auto bg-zinc-800 flex items-center justify-center">
        <form onSubmit={createCard}>
          <input
            type="text"
            className="rounded p-5 outline-none placeholder:focus:text-[#222] placeholder:transition duration-300 ease-in "
            placeholder="Enter Text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Send"
            className="h-[64px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer"
          />
        </form>
      </div>
      <h1 className="text-center text-white text-2xl">Your Decks</h1>
      <div className="h-auto w-screen bg-zinc-800 flex items-center justify-center">
        <div className="w-auto h-auto bg-zinc-800 flex flex-col gap-5 max-w-[896px] md:grid grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Flashcard
              key={deck.id}
              title={deck.title}
              decks={decks}
              deleteCard={deleteCard}
              editCard={editCard}
              deck={deck}
              setNewFront={setNewFront}
              newFront={newFront}
              back={deck.back}
              setBack={setBack}
              setBackCard={setBackCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
