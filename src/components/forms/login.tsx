import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";
import { useRouter } from "next/router";
import Header from "../header";
import Button from "./../button";

interface RegisterProps {
  setLogin: (value: boolean) => void;
}

export default function Login({ setLogin }: RegisterProps) {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  interface RegisterFormData {
    email: string;
    password: string;
  }

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("Logged in succesfully");
      router.push("/home");
    } catch (error) {
      console.log("Login Failed: ", error);
      setErrorMessage((error as Error).message);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setLogin(false);
        }}
        className="h-screen w-screen absolute flex justify-center items-center bg-[#0f151aa6]"
      ></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute h-1/2 w-96 bg-Background rounded-lg flex flex-col justify-center items-center gap-4 shadow-md shadow-Secondary-Button"
      >
        <img
          onClick={() => {
            setLogin(false);
          }}
          src={"back-button-svgrepo-com.svg"}
          alt="back button"
          className="z-10 w-8 top-0 -left-10 absolute cursor-pointer"
        />
        <Header text="Log In" />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "*Please provide an email" })}
          className="w-2/3 h-10 rounded-lg hover:bg-text-primary duration-300 px-2 mt-3"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "*Please enter a password",
          })}
          className="w-2/3 h-10 rounded-lg hover:bg-text-primary duration-300 px-2"
        />
        <div className="flex flex-col">
          <i className="m-0 p-0 text-sm text-black">{errors.email?.message}</i>
          <i className="m-0 p-0 text-sm text-black">
            {errors.password?.message}
          </i>
          <i className="m-0 p-0 text-sm text-black">{errorMessage}</i>
        </div>

        <Button text="Log In" />
      </form>
    </>
  );
}
