import React, { createContext, useState, useEffect } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { app } from "../db/firebaseConfig";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const auth = getAuth(app);
  const [userId, setUserId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userCartCount, setUserCartCount] = useState(100);
  console.log(userId);

  const logoutUser = () => {
    signOut(auth).then(() => setUserId(null));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserId(firebaseUser.uid);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userContextValue = {
    userId,
    setUserId,
    isLoading,
    logoutUser,
    userCartCount,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
