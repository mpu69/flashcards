import { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../../firebase";
import Header from "@/components/header";
import Button from "@/components/button";
import getUser from "@/user";

interface Props {
  setNewDeck: (value: boolean) => void;
  setDeckName: (value: string) => void;
}

interface Data {
  deckName: string;
}

export default function NewCard({ setNewDeck, setDeckName }: Props) {
  const user = getUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deckName: "",
    },
  });

  const onSubmit = async (data: Data) => {
    await addDoc(collection(db, "decks"), {
      deckName: data.deckName,
      user: user.displayName,
    });
    setNewDeck(false);
    setDeckName(data.deckName);
  };
  return (
    <>
      <div
        onClick={() => {
          setNewDeck(false);
        }}
        className="h-screen w-screen absolute bg-[#0f151aa6]"
      ></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-md bg-Background flex flex-col justify-center items-center gap-4"
      >
        <Header text="New Deck" />
        <input
          type="text"
          placeholder="Name of Deck"
          {...register("deckName", { required: "*This is required" })}
          className="w-2/3 h-10 rounded-lg px-2"
        />
        <Button text="Create" />
      </form>
    </>
  );
}
