import { useState } from "react";
import Flashcard from "./components/Flashcard";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [decks, setDecks] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDecks([...decks, { title: title, id: uuidv4() }]);
    setTitle("");
    console.log(decks);
  };
  return (
    <div className="overflow-x-hidden bg-zinc-800 h-screen w-auto">
      <div className="h-[50vh] w-auto bg-zinc-800 flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-white text-center">Enter your text</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Send"
            className="ml-2 text-white cursor-pointer"
          />
        </form>
      </div>
      <h1 className="text-center text-white text-2xl">Your Decks</h1>
      <div className="h-auto w-screen bg-zinc-800 flex items-center justify-center">
        <div className="w-auto h-auto bg-zinc-800 flex flex-col gap-3 max-w-[896px] md:grid grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Flashcard key={deck.id} title={deck.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
