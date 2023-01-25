import { useState } from "react";

export default function Home() {

  const [question, setQuestion] = useState({})

  const handleInput = (e) => {
    setQuestion(e.target.value)
  }




  return (
    <>
      <div className="h-screen w-auto bg-zinc-800 flex items-center justify-center">
      <form>
        <h1 className="text-white text-center">Enter your text</h1>
        <input type="text" onChange={handleInput}/>
        <input type="submit" value="Send" className="ml-2 text-white cursor-pointer"/>
      </form>
      </div>
    </>
  );
}
