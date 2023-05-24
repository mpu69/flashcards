interface Props {
  text: string;
  onClick?: () => void;
}

export default function FlashcardButton({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="h-1/2 bg-Primary-Button text-Text font-bold rounded-2xl text-4xl px-10 py-8 flex items-center"
    >
      <span>{text}</span>
    </button>
  );
}
