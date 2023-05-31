import { useState, useEffect } from "react";

interface Props {
  deckName: string;
  onClick: () => void;
  currentDeck: string;
}

export default function Decks({ deckName, onClick, currentDeck }: Props) {
  const isSelected = currentDeck === deckName;
  return (
    <div
      onClick={onClick}
      className={`w-full h-12 rounded-md border-2 border-Primary-Button flex justify-center items-center text-Text text-2xl cursor-pointer ${
        isSelected ? "bg-Primary-Button" : ""
      }`}
    >
      {deckName}
    </div>
  );
}
