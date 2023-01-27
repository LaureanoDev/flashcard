import { useState } from "react";
import Flashcard from "./components/Flashcard";

export default function Home() {
  const [decks, setDecks] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDecks(title)
    setTitle("")
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
      <div className='h-[50vh] w-screen bg-black flex items-center justify-center'>
        <Flashcard />
    </div>
    </>
  );
}
