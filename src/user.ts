import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

interface UserState {
  displayName: string | null;
  email: string | null;
}

export default function User() {
  const [user, setUser] = useState<UserState>({
    displayName: null,
    email: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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

    return () => unsubscribe();
  }, []);

  return user;
}
