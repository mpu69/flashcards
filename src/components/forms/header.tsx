interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <h1 className="text-5xl text-bg-primary font-bold">{text}</h1>;
}
