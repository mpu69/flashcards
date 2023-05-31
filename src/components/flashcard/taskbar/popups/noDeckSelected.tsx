import Header from "@/components/header";

interface Props {
  setNoDeckSelected: (value: boolean) => void;
}

export default function noDeckSelected({ setNoDeckSelected }: Props) {
  return (
    <>
      <div
        onClick={() => {
          setNoDeckSelected(false);
        }}
        className="h-screen w-screen absolute bg-[#0f151aa6]"
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-96 rounded-md bg-Background flex flex-col justify-center items-center gap-4 text-center">
        <Header text="No Deck Selected" />
        <button></button>
      </div>
    </>
  );
}
