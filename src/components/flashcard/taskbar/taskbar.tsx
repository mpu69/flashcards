import Button from "./taskbar-button";

interface Props {
  setAddCard?: () => void;
}

export default function Taskbar({ setAddCard }: Props) {
  return (
    <div className="flex text-Text gap-2 h-12">
      <Button text="Add" onClick={setAddCard} />
      <Button text="Add2" />
      <Button text="Add2" />
      <Button text="Add2" />
      <Button text="Add2" />
    </div>
  );
}
