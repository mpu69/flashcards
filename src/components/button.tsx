interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="text-text-primary bg-bg-secondary w-36 h-12 rounded-md hover:bg-bg-secondary-hover active:scale-95 duration-300">
      {text}
    </button>
  );
};

export default Button;
