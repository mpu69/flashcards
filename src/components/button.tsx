interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="text-Text bg-Primary-Button w-40 h-14 rounded-md hover:-translate-y-1 hover:scale-105 duration-500"
    >
      {text}
    </button>
  );
};

export default Button;
