interface Props {
  deckName: string;
}

export default function Decks({ deckName }: Props) {
  return (
    <div className="w-full h-12 rounded-md border-2 border-Primary-Button flex justify-center items-center text-Text text-2xl">
      {deckName}
    </div>
  );
}
