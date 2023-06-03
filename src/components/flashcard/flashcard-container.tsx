interface Card {
  front: string;
  back: string;
}

interface Props {
  currentDeck: string;
  cards: Card[];
}

export default function FlashcardContainer({ currentDeck, cards }: Props) {
  return (
    <div className="bg-Text w-full h-3/4 cursor-pointer shadow-inner shadow-Background flex justify-center items-center flex-col">
      <div className="font-bold">
        Currently selected deck: {currentDeck === "" ? "no deck" : currentDeck}
      </div>
      <div className="flex flex-col">
        {cards.map((card) => (
          <div className="flex flex-col" key={`${card.front}-${card.back}`}>
            <span>Front: {card.front}</span>
            <span>Back:{card.back}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
