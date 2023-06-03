import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import getUser from "@/user";
// import Navbar from "@/components/nav/Navbar";
import Button from "./../../components/flashcard/button";
import Flashcards from "./../../components/flashcard/flashcard-container";
import Taskbar from "./../../components/flashcard/taskbar/taskbar";
//Popups
import NewDeck from "@/components/forms/new";
import OpenDeck from "./../../components/flashcard/open/open";
import AddCard from "@/components/flashcard/taskbar/popups/add-card";
import NoDeckSelected from "@/components/flashcard/taskbar/popups/noDeckSelected";

export default function Home() {
  //Popups
  const [newDeck, setNewDeck] = useState(false);
  const [openDeck, setOpenDeck] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [noDeckSelected, setNoDeckSelected] = useState(false);

  //Decks
  const [currentDeck, setCurrentDeck] = useState("");

  //Array of decks
  const [deckNames, setDeckNames] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "decks"), (snapshot) => {
      const names: never[] = [];
      snapshot.forEach((doc) => {
        names.push(doc.data().deckName as never);
      });
      setDeckNames(names);
    });

    return () => unsubscribe();
  }, []);

  //array of cards
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cards"), (snapshot) => {
      const cardData: never[] = [];
      snapshot.forEach((doc) => {
        const card = doc.data();
        cardData.push({
          front: card.front,
          back: card.back,
          deck: card.deck,
        } as never);
      });
      setCards(cardData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {/*Button click pooups*/}
      {newDeck && <NewDeck setNewDeck={setNewDeck} />}
      {openDeck && (
        <OpenDeck
          setOpenDeck={setOpenDeck}
          deckNames={deckNames}
          currentDeck={currentDeck}
          setCurrentDeck={setCurrentDeck}
        />
      )}
      {addCard && (
        <AddCard
          setAddCard={setAddCard}
          currentDeck={currentDeck}
          setNoDeckSelected={setNoDeckSelected}
        />
      )}

      {/*Other popus*/}
      {noDeckSelected && (
        <NoDeckSelected setNoDeckSelected={setNoDeckSelected} />
      )}

      {/*Main content*/}
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
            <Button
              onClick={() => {
                setOpenDeck(true);
              }}
              text="Open"
            />
          </div>
          <Flashcards currentDeck={currentDeck} cards={cards} />
          <Taskbar
            onClick={() => {
              setAddCard(true);
            }}
          />
        </div>
      </main>
    </>
  );
}
