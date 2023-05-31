import Button from "./taskbar-button";

interface Props {
  onClick: () => void;
}

export default function Taskbar({ onClick }: Props) {
  return (
    <div className="flex text-Text gap-2 h-12">
      <Button text="Add" onClick={onClick} />
      <Button text="Remove" />
      <Button text="Edit" />
      <Button text="Browse" />
      <Button text="Delete" />
    </div>
  );
}
