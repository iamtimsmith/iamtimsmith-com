"use client";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { Customizer } from "../../components/Customizer";
import { showCustomizer } from "../../constants";

export interface CustomizeContextType {
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  resetTextSize: () => void;
  showGifs: boolean;
  toggleGifs: () => void;
}

export const CustomizeContext = createContext<CustomizeContextType>(null!);

export const CustomizeProvider: FC<any> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const minSize = 16;
  const maxSize = 24;
  const textSize = 16;
  const [settings, setSettings] = useState({
    showGifs: false,
    textSize,
  });

  const increaseTextSize = () => {
    if (settings.textSize < maxSize)
      setSettings((prev) => ({ ...prev, textSize: prev.textSize + 1 }));
  };

  const decreaseTextSize = () => {
    if (settings.textSize > minSize)
      setSettings((prev) => ({ ...prev, textSize: prev.textSize - 1 }));
  };

  const resetTextSize = () => setSettings((prev) => ({ ...prev, textSize }));

  const toggleGifs = () =>
    setSettings((prev) => ({ ...prev, showGifs: !prev.showGifs }));

  // Use effect to retrieve the state from localstorage
  useEffect(() => {
    const storedSettings = localStorage.getItem("accessibilitySettings");
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    } else {
      setSettings({ showGifs: true, textSize });
    }
    setIsLoaded(true);
  }, []);

  // Use effect to store the state in localstorage
  useEffect(() => {
    if (!isLoaded) return;
    const storedSettings = localStorage.getItem("accessibilitySettings");
    const newSettings = JSON.stringify(settings);
    console.log("UPDATING LOCALSTORAGE", isLoaded);
    if (storedSettings !== newSettings)
      localStorage.setItem("accessibilitySettings", newSettings);
  }, [settings]);

  // Use effect to set the font size on the root element
  useEffect(() => {
    const root = document.querySelector("html");
    root.style.setProperty("--font-size-base", `${settings.textSize}px`);
  }, [settings.textSize]);

  return (
    <CustomizeContext.Provider
      value={{
        increaseTextSize,
        decreaseTextSize,
        resetTextSize,
        toggleGifs,
        ...settings,
      }}
    >
      {showCustomizer && <Customizer />}
      {children}
    </CustomizeContext.Provider>
  );
};

export const useCustomizeContext = () => {
  return useContext(CustomizeContext);
};
