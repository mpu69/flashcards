import { useState } from "react";
import Button from "./../components/button";
import Register from "./../components/forms/register";
import Login from "./../components/forms/login";

export default function Index() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <main className="h-screen bg-bg-primary flex flex-col justify-center items-center gap-12">
      <h1 className="absolute text-[#ffffff3b] text-9xl animate-ping-once">
        Welcome
      </h1>
      <img className="w-80" src={"undraw_mobile_analytics_72sr.svg"} />
      <div className="flex flex-col gap-6">
        <Button
          text="Register"
          onClick={() => {
            setRegister(true);
          }}
        />
        <Button
          text="Log In"
          onClick={() => {
            setLogin(true);
          }}
        />
      </div>
      {register && <Register setRegister={setRegister} />}
      {login && <Login setLogin={setLogin} />}
    </main>
  );
}
