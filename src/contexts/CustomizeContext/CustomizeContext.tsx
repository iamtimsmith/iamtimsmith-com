"use client";
import Cookies from "js-cookie";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Customizer } from "../../components/Customizer";
import { fontSizes, showCustomizer } from "../../constants";
import { Theme } from "../../types";

export interface CustomizeContextType {
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  resetTextSize: () => void;
  setTheme: (newTheme: Theme) => void;
  showGifs: boolean;
  theme: Theme;
  toggleGifs: () => void;
}

interface CustomizeProviderProps extends PropsWithChildren {
  showGifs: boolean;
  textSize: number;
  theme: Theme;
}

export const defaultSettings = {
  showGifs: true,
  textSize: 16,
  theme: "dark" as Theme,
};

export const CustomizeContext = createContext<CustomizeContextType>(null!);

export const CustomizeProvider: FC<CustomizeProviderProps> = ({
  children,
  showGifs,
  textSize,
  theme,
}) => {
  const [settings, setSettings] = useState({
    showGifs,
    textSize,
    theme,
  });

  const increaseTextSize = () => {
    if (settings.textSize < fontSizes.max) {
      Cookies.set(
        "settings",
        JSON.stringify({ ...settings, textSize: settings.textSize + 1 })
      );
      setSettings((prev) => ({ ...prev, textSize: prev.textSize + 1 }));
    }
  };

  const decreaseTextSize = () => {
    if (settings.textSize > fontSizes.min)
      setSettings((prev) => ({ ...prev, textSize: prev.textSize - 1 }));
  };

  const resetTextSize = () => {
    setSettings((prev) => ({ ...prev, textSize: fontSizes.default }));
    Cookies.set(
      "settings",
      JSON.stringify({ ...settings, textSize: fontSizes.default })
    );
  };

  const toggleGifs = () => {
    const newValue = !settings.showGifs;
    setSettings((prev) => ({ ...prev, showGifs: newValue }));
    Cookies.set(
      "settings",
      JSON.stringify({ ...settings, showGifs: newValue })
    );
  };

  const setTheme = (newTheme: Theme) => {
    setSettings((prev) => ({ ...prev, theme: newTheme }));
    Cookies.set("settings", JSON.stringify({ ...settings, theme: newTheme }));
  };

  // Use effect to update data on the root element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-size-base", `${settings.textSize}px`);
    root.dataset.theme = settings.theme;
  }, [settings]);

  return (
    <CustomizeContext.Provider
      value={{
        increaseTextSize,
        decreaseTextSize,
        resetTextSize,
        setTheme,
        theme,
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
