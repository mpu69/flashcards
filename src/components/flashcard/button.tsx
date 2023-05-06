interface Props {
  text: string;
}

export default function FlashcardButton({ text }: Props) {
  return (
    <button className="h-1/2 bg-bg-secondary text-text-primary font-bold rounded-2xl text-4xl px-10 py-8 flex items-center">
      <span>{text}</span>
    </button>
  );
}
