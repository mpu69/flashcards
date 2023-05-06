// import Navbar from "@/components/nav/Navbar";
import Button from "./../../components/flashcard/button";

export default function Home() {
  return (
    <main className="h-screen bg-bg-primary flex justify-center items-center">
      {/* <Navbar /> */}
      <div className="border-2 border-red-400 w-2/3 h-5/6">
        <div className="w-full h-24 mt-24 bg-blue-400 flex justify-around items-center">
          <Button text="New" />
          <Button text="Open" />
        </div>
      </div>
    </main>
  );
}
