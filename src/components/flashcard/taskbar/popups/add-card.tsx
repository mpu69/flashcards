import { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import Header from "@/components/header";
import Button from "@/components/button";

interface Props {
  setAddCard: (value: boolean) => void;
  currentDeck: string;
  setNoDeckSelected: (value: boolean) => void;
}

export default function AddCard({
  setAddCard,
  currentDeck,
  setNoDeckSelected,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      front: "",
      back: "",
    },
  });

  interface Data {
    front: string;
    back: string;
  }

  const onSubmit = async (data: Data) => {
    await addDoc(collection(db, "cards"), {
      front: data.front,
      back: data.back,
      deck: currentDeck,
    });
  };

  return (
    <>
      <div
        onClick={() => {
          setAddCard(false);
        }}
        className="h-screen w-screen absolute bg-[#0f151aa6]"
      ></div>
      <form
        onSubmit={handleSubmit((data) => {
          if (currentDeck === "") {
            setNoDeckSelected(true);
          } else {
            onSubmit(data);
            setAddCard(false);
          }
        })}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-md bg-Background flex flex-col justify-center items-center gap-4"
      >
        <Header text="Add Card" />
        <input
          type="text"
          placeholder="Front"
          {...register("front", { required: "*This is required" })}
          className="w-2/3 h-10 rounded-lg px-2"
        />
        <input
          type="text"
          placeholder="Back"
          {...register("back", { required: "*This is required" })}
          className="w-2/3 h-10 rounded-lg px-2"
        />
        <Button text="Add" />
      </form>
    </>
  );
}
