"use client";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { Customizer } from "../../components/Customizer";
import { showCustomizer } from "../../constants";

export interface CustomizeContextType {
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  resetTextSize: () => void;
}

export const CustomizeContext = createContext<CustomizeContextType>(null!);

export const CustomizeProvider: FC<any> = ({ children }) => {
  const [textSize, setTextSize] = useState(16);

  const increaseTextSize = () =>
    setTextSize((prev) => (prev < 32 ? prev + 1 : prev));
  const decreaseTextSize = () =>
    setTextSize((prev) => (prev > 12 ? prev - 1 : prev));
  const resetTextSize = () => setTextSize(16);

  useEffect(() => {
    const root = document.querySelector("html");
    root.style.setProperty("--font-size-base", `${textSize}px`);
  }, [textSize]);

  return (
    <CustomizeContext.Provider
      value={{ increaseTextSize, decreaseTextSize, resetTextSize }}
    >
      {showCustomizer && <Customizer />}
      {children}
    </CustomizeContext.Provider>
  );
};

export const useCustomizeContext = () => {
  return useContext(CustomizeContext);
};
