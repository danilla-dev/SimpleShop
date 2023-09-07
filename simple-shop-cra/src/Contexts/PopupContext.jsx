import React, { createContext,  useState } from "react";
export const PopupContext = createContext();
const PopupProvider = ({ children }) => {
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [isDoubleEmail, setIsDoubleEmail] = useState(false);
  let showPopup = {
    subscribeNewsletter,
    setSubscribeNewsletter,
    isDoubleEmail,
    setIsDoubleEmail,
  };
  return (
    <PopupContext.Provider value={showPopup}>{children}</PopupContext.Provider>
  );
};
export default PopupProvider;
