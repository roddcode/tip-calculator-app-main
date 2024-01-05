import { createContext, useState } from "react";
export const TipContext = createContext()

export const TipProvider = ({ children }) => {
  const [price, setPrice] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [people, setPeople] = useState(1);

  return (
    <TipContext.Provider
      value={{
        price,
        setPrice,
        percentage,
        setPercentage,
        people,
        setPeople
      }}
    >
      {children}
    </TipContext.Provider>
  );
};