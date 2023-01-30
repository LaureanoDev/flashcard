import { useState } from "react";
import Flashcard from "./components/Flashcard";

export default function Home() {
  const [decks, setDecks] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDecks([title].concat(decks));
    setTitle("");
    console.log(decks);
  };
  return (
    <>
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
      <div className="h-[50vh] w-screen bg-black flex items-center justify-center">
        <div className="w-5/6 h-5/6 bg-slate-500 flex justify-between">
          {decks.map((deck) => (
            <Flashcard key={deck._id} />
          ))}
        </div>
      </div>
    </>
  );
}
