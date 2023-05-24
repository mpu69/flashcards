import { useState } from "react";
import getUser from "./../../user";
import ProfilePicture from "./profile-image";
import ProfileDropdown from "./profile-dropdown";

export default function Navbar() {
  let user = getUser();
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
