interface Props {
  text: string;
  onClick?: () => void;
}

export default function TaskbarButton({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="h-full w-1/5 bg-Primary-Button rounded-b-md"
    >
      {text}
    </button>
  );
}
