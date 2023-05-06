"use client";

import { useState } from "react";
import { auth } from "./../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProfilePicture from "./profile-image";
import ProfileDropdown from "./profile-dropdown";

interface UserState {
  displayName: string | null;
  email: string | null;
}

export default function Navbar() {
  const [user, setUser] = useState<UserState>({
    displayName: null,
    email: null,
  });

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
      });
    } else {
      setUser({
        displayName: null,
        email: null,
      });
    }
  });

  const [profileDropdownState, setProfileDropdownState] = useState(false);

  return (
    <div className="w-screen h-16 px-4 bg-bg-third drop-shadow-2xl shadow-white fixed flex justify-between items-center">
      <h1 className="text-text-primary text-xl font-bold">
        Good morning, {user.displayName || "Guest"}
      </h1>
      <ProfilePicture setProfileDropdownState={setProfileDropdownState} />
      {profileDropdownState && <ProfileDropdown />}
    </div>
  );
}
