interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="text-bg-primary bg-text-primary w-40 h-14 rounded-md hover:bg-bg-primary hover:text-text-primary hover:border-2 border-text-primary active:scale-95 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
