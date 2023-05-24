import { useState } from "react";
// import Navbar from "@/components/nav/Navbar";
import Button from "./../../components/flashcard/button";
import Flashcards from "./../../components/flashcard/flashcard-container";
import Taskbar from "./../../components/flashcard/taskbar/taskbar";
import NewDeck from "@/components/flashcard/forms/new";
import AddCard from "@/components/flashcard/forms/add-card";

export default function Home() {
  const [newDeck, setNewDeck] = useState(false);
  const [addCard, setAddCard] = useState(false);
  return (
    <>
      {newDeck && <NewDeck setNewDeck={setNewDeck} />}
      {addCard && <AddCard setAddCard={setAddCard} />}
      <main className="h-screen bg-Background flex justify-center items-center">
        {/* <Navbar /> */}
        <div className="w-2/3 h-5/6">
          <div className="w-full h-24 mt-16 flex justify-around items-center">
            <Button
              onClick={() => {
                setNewDeck(true);
              }}
              text="New"
            />
            <Button text="Open" />
          </div>
          <Flashcards />
          <Taskbar setAddCard={setAddCard} />
        </div>
      </main>
    </>
  );
}
