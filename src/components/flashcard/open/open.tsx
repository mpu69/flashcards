import Header from "@/components/header";
import Deck from "./select-deck";

interface Props {
  setOpenDeck: (value: boolean) => void;
  deckNames: string[];
  currentDeck: string;
  setCurrentDeck: (value: string) => void;
}

export default function OpenDeck({
  setOpenDeck,
  deckNames,
  currentDeck,
  setCurrentDeck,
}: Props) {
  return (
    <>
      <div
        onClick={() => {
          setOpenDeck(false);
        }}
        className="h-screen w-screen absolute bg-[#0f151aa6]"
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-md bg-Background flex flex-col justify-center items-center gap-4">
        <Header text="Select Deck" />
        <div className="w-full px-8 flex flex-col gap-2 overflow-scroll items-center">
          {deckNames.map((deckName) => (
            <Deck
              onClick={() => {
                setCurrentDeck(deckName);
              }}
              deckName={deckName}
              currentDeck={currentDeck}
              key={deckName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
